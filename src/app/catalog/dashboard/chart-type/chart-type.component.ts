import { Component, OnInit } from '@angular/core';
import { themeColors } from 'app/@theme/themeColor'
import {DashboardHttpClient} from 'app/services/dashboard/dashboard-service'
import {CoolTheme,MacaronsTheme} from 'app/@theme/themeColor'

@Component({
  selector: 'ngx-chart-type',
  templateUrl: './chart-type.component.html',
  styleUrls: ['./chart-type.component.scss']
})
export class ChartTypeComponent implements OnInit {

  chartInstance:any;
  macaronsTheme = MacaronsTheme;
  option = {
    title: {
      text: 'Thông kê loại nhạc',
      subtext: 'Việt Nam',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    textStyle: {
      fontFamily:'"Helvetica Neue", sans-serif',
      fontSize :15
    },
    // legend: {
    //   x: 'center',
    //   y: 'bottom',
    //   data: []
    // },
    calculable: true,
    series: [
      {
        name: '',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [

        ]
      }
    ]
  };

  constructor(private dbService:DashboardHttpClient) {
    dbService.getTotalType().then(res=>{
      res.data.forEach((t,i) => {
        //this.option.legend.data.push(t.title)
        this.option.series[0].data.push({ value: t.value, name: t.title })
      });
      if(this.chartInstance)
      {
        this.chartInstance.setOption(this.option);
      }
    })
   }


  ngOnInit(): void {
  }
  onChartInit(ec){
    this.chartInstance=ec;
  }

}
