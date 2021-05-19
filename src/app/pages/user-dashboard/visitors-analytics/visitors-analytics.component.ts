import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { NbThemeService } from '@nebular/theme';
import { OutlineData, VisitorsAnalyticsData } from '../../../@core/data/visitors-analytics';
import { forkJoin } from 'rxjs';
import {DashboardsClient} from '../../../service/Dashboard/DashboardService'

@Component({
  selector: 'ngx-ecommerce-visitors-analytics',
  styleUrls: ['./visitors-analytics.component.scss'],
  templateUrl: './visitors-analytics.component.html',
})
export class ECommerceVisitorsAnalyticsComponent implements OnDestroy {
  private alive = true;

  pieChartValue: number;
  chartLegend: {iconColor: string; title: string}[];
  visitorsAnalyticsData: { innerLine: number[]; outerLine: any[]; };

  constructor(private themeService: NbThemeService,
              private visitorsAnalyticsChartService: VisitorsAnalyticsData, private dashboardsClient:DashboardsClient) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.setLegendItems(theme.variables.visitorsLegend);
      });

    // forkJoin(
    //   this.visitorsAnalyticsChartService.getInnerLineChartData(),
    //   this.visitorsAnalyticsChartService.getOutlineLineChartData(),     
    //   //this.visitorsAnalyticsChartService.getPieChartData(),
    //  // this.dashboardsClient.getAge("year")
    // )
    // .pipe(takeWhile(() => this.alive))
    //   .subscribe(([innerLine, outerLine]: [number[], OutlineData[]]) => {
    //     this.visitorsAnalyticsData = {
    //       innerLine: innerLine,
    //       outerLine: outerLine,
    //     };
    //     console.log(this.visitorsAnalyticsData)
    //     //console.log(res)
    //     //this.pieChartValue = pieChartValue;
        
    //     // let innerLine1 = new Array();
    //     // let outerLine1 = new Array();
    //     // res.data.data.forEach(element => {
    //     //   outerLine1.push({label:element.title,value:+element.value})
    //     //   innerLine1.push(+element.value)
          
    //     // });
    //     // console.log({
    //     //   innerLine: outerLine1,
    //     //   outerLine: innerLine1,
    //     // })

    //   });

      this.dashboardsClient.getAge("year").subscribe((res:any)=>{
        let innerLine = new Array();
        let outerLine = new Array();
        //innerLine = res.data.data.map(i=>{(+i.value)%50});
        res.data.data.forEach(element => {
          outerLine.push({label:element.title,value:+element.value})
          innerLine.push(+element.value%50)
          
        });
        this.visitorsAnalyticsData = {
          innerLine: innerLine.reverse(),
          outerLine: outerLine,
        };
        console.log({
          innerLine: outerLine,
          outerLine: innerLine,
        })
      })
  }

  setLegendItems(visitorsLegend): void {
    this.chartLegend = [
      {
        iconColor: visitorsLegend.firstIcon,
        title: 'Người dùng',
      },
      {
        iconColor: visitorsLegend.secondIcon,
        title: 'Ca sĩ',
      },
    ];
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
