import { Component, OnDestroy } from "@angular/core";
import { TrafficList, TrafficListData } from "../../../@core/data/traffic-list";
import { TrafficBarData, TrafficBar } from "../../../@core/data/traffic-bar";
import { takeWhile } from "rxjs/operators";
import { DashboardsClient } from "../../../service/Dashboard/DashboardService";

@Component({
  selector: "ngx-traffic-reveal-card",
  styleUrls: ["./traffic-reveal-card.component.scss"],
  templateUrl: "./traffic-reveal-card.component.html",
})
export class TrafficRevealCardComponent implements OnDestroy {
  private alive = true;

  trafficBarData: any;
  //trafficListData: TrafficList;
  trafficListData: any;
  revealed = false;
  period: string = "month";

  constructor(
    private trafficListService: TrafficListData,
    private trafficBarService: TrafficBarData,
    private dashboardsClient: DashboardsClient
  ) {
    this.getTrafficFrontCardData(this.period);
    this.getTrafficBackCardData(this.period);
  }

  toggleView() {
    this.revealed = !this.revealed;
  }

  setPeriodAngGetData(value: string): void {
    this.period = value;

    this.getTrafficFrontCardData(value);
    this.getTrafficBackCardData(value);
  }

  getTrafficBackCardData(period: string) {
    // this.trafficBarService
    //   .getTrafficBarData(period)
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe((trafficBarData) => {
    //     this.trafficBarData = trafficBarData;
    //     console.log("vip",this.trafficBarData)
    //   });

      this.dashboardsClient.getChartSong(period).subscribe((res: any) => {
        let arr = new Array();
        let data = new Array();
        let labels = new Array();
        arr = res.data.data;
        for (let i = 0; i < arr.length; i++) {
          data.push(+arr[i].value);
          labels.push(arr[i].title)
        }
        this.trafficBarData={data:data,labels:labels};
      });
  }

  getTrafficFrontCardData(period: string) {
    // this.trafficListService.getTrafficListData(period)
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe(trafficListData => {
    //     this.trafficListData = trafficListData;
    //     console.log(this.trafficListData)
    //   });

    this.dashboardsClient.getChartSong(period).subscribe((res: any) => {
      let arr = new Array();
      let rs = new Array();
      arr = res.data.data;
      for (let i = 1; i < arr.length; i++) {
        let index = { title: arr[i].title, value: arr[i].value };
        let item = {
          date: index.title,
          value: +index.value,
          delta: {
            up: false,
            value: +Math.abs(
              (+index.value - arr[i - 1].value) / (+index.value)*100
            ).toString().substring(0,4),
          },
          comparison: {
            prevDate: arr[i - 1].title,
            prevValue: +arr[i - 1].value,
            nextDate: index.title,
            nextValue: +index.value,
          },
        };

        if(+index.value>=+arr[i-1].value)
          item.delta.up=true;
        rs.push(item)
      }
      console.log(rs[0])
      this.trafficListData=rs;
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
