import { Component, OnDestroy, ViewChild } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { OrdersChartComponent } from './charts/orders-chart.component';
import { ProfitChartComponent } from './charts/profit-chart.component';
import { OrdersChart } from '../../../@core/data/orders-chart';
import { ProfitChart } from '../../../@core/data/profit-chart';
import {DashboardsClient} from '../../../service/Dashboard/DashboardService'
import { OrderProfitChartSummary, OrdersProfitChartData } from '../../../@core/data/orders-profit-chart';

@Component({
  selector: 'ngx-ecommerce-charts',
  styleUrls: ['./charts-panel.component.scss'],
  templateUrl: './charts-panel.component.html',
})
export class ECommerceChartsPanelComponent implements OnDestroy {

  private alive = true;

  chartPanelSummary: OrderProfitChartSummary[];
  period: string = 'month';
  ordersChartData: any;
  profitChartData: any;

  @ViewChild('ordersChart', { static: true }) ordersChart: OrdersChartComponent;
  @ViewChild('profitChart', { static: true }) profitChart: ProfitChartComponent;

  constructor(private ordersProfitChartService: OrdersProfitChartData, private dashboardsClient:DashboardsClient) {
    
    // this.ordersProfitChartService.getOrderProfitChartSummary()
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe((summary) => {
    //     this.chartPanelSummary = summary;
        
    //   });

    this.dashboardsClient.getTotalPlaylist().subscribe((res:any)=>{

      var data = new Array()
      res.data.data.forEach(x=>data.push({title:x.title,value:+x.value}))

      this.chartPanelSummary=data.reverse();

    });
    this.getOrdersChartData(this.period);
    this.getProfitChartData(this.period);
  }

  setPeriodAndGetChartData(value: string): void {
    if (this.period !== value) {
      this.period = value;
    }

    this.getOrdersChartData(value);
    this.getProfitChartData(value);
  }

  changeTab(selectedTab) {
    if (selectedTab.tabTitle === 'Profit') {
      this.profitChart.resizeChart();
    } else {
      this.ordersChart.resizeChart();
    }
  }

  getOrdersChartData(period: string) {
    this.ordersProfitChartService.getOrdersChartData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(ordersChartData => {
        //this.ordersChartData = ordersChartData;
        //console.log(ordersChartData)
        this.dashboardsClient.getAll(period)
    .pipe(takeWhile(() => this.alive))
    .subscribe((res:any)=>{
      var arrLabel = new Array()
      res.data.data.forEach(x=>arrLabel.push(x.title))
      

      var arrLike = new Array()
      var arrCmt = new Array()
      var arrListen = new Array()
      var arrDownload = new Array()
      res.data.data.forEach(x=>{
        arrLike.push(+x.like);
        arrCmt.push(+x.cmt);
        arrListen.push(+x.listen);
        arrDownload.push(+x.download);
      })
      //console.log({chartLabel:arrLabel,linesData:[arrData]})
      this.ordersChartData={chartLabel:arrLabel,linesData:[arrLike,arrCmt,arrListen,arrDownload]}
      this.profitChartData={chartLabel:arrLabel,data:[arrLike,arrCmt,arrListen,arrDownload]}
      //console.log("aa",this.ordersChartData)
    })
      });

    console.log(period)
    
  }

  getProfitChartData(period: string) {
    this.ordersProfitChartService.getProfitChartData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(profitChartData => {
        //this.profitChartData = profitChartData;
        console.log('pro',profitChartData)
        this.dashboardsClient.getAll(period)
    .pipe(takeWhile(() => this.alive))
    .subscribe((res:any)=>{
      var arrLabel = new Array()
      res.data.data.forEach(x=>arrLabel.push(x.title))
      

      var arrLike = new Array()
      var arrCmt = new Array()
      var arrListen = new Array()
      var arrDownload = new Array()
      res.data.data.forEach(x=>{
        arrLike.push(+x.like);
        arrCmt.push(+x.cmt);
        arrListen.push(+x.listen);
        arrDownload.push(+x.download);
      })
      //console.log({chartLabel:arrLabel,linesData:[arrData]})
      this.profitChartData={chartLabel:arrLabel,data:[arrLike,arrCmt,arrListen,arrDownload]}
    })
      });
    
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
