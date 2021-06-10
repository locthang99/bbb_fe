import { Component, OnInit } from '@angular/core';
import { DashboardHttpClient } from "../../../services/dashboard/dashboard-service";

export interface aa {
  data: number[];
  labels: string[];
  formatter: "";
}

@Component({
  selector: 'ngx-chart-new-song',
  templateUrl: './chart-new-song.component.html',
  styleUrls: ['./chart-new-song.component.scss']
})
export class ChartNewSongComponent implements OnInit {

  private alive = true;

  trafficBarData: aa;
  trafficListData: any;
  revealed = false;
  period: string = "month";

  constructor(private dashboardsClient: DashboardHttpClient) {
    this.trafficListData = new Array();
    this.trafficBarData = {data:[0],labels:[''],formatter:''}
    this.dashboardsClient.getChartSong(this.period).then((res: any) => {
      this.getTrafficFrontCardData('',res);
      this.getTrafficBackCardData('',res);
    });
  }

  ngOnInit(){

  }
  toggleView() {
    this.revealed = !this.revealed;
  }

  setPeriodAngGetData(value: string): void {
    this.period = value;

    this.dashboardsClient.getChartSong(this.period).then((res: any) => {
      this.getTrafficFrontCardData(value,res);
      this.getTrafficBackCardData(value,res);
    });

  }

  getTrafficBackCardData(period: string,res:any) {
      
        let arr = new Array();
        let data = new Array();
        let labels = new Array();
        arr = res.data;
        for (let i = 0; i < arr.length; i++) {
          data.push(arr[i].value);
          labels.push(arr[i].title)
        }
        this.trafficBarData={data:data,labels:labels,formatter: ""};

  }

  getTrafficFrontCardData(period: string,res:any) {

      this.trafficListData = [];
      let arr = new Array();
      let rs = [];
      arr = res.data;
      for (let i = 1; i < arr.length; i++) {
        let index = { title: arr[i].title, value: arr[i].value };
        let item = {
          date: index.title,
          value: index.value,
          delta: {
            up: false,
            value: Math.abs(
              (index.value - arr[i - 1].value) / (index.value)*100
            ).toString().substring(0,4),
          },
          comparison: {
            prevDate: arr[i - 1].title,
            prevValue: arr[i - 1].value,
            nextDate: index.title,
            nextValue: index.value,
          },
        };

        if(index.value>=arr[i-1].value)
          item.delta.up=true;
        this.trafficListData.push(item);
      }
      //console.log(this.trafficListData)

  }

  ngOnDestroy() {
    this.alive = false;
  }

}
