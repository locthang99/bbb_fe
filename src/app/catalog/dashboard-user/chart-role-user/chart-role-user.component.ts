import { Component, OnInit } from '@angular/core';
import {DashboardHttpClient} from 'app/services/dashboard/dashboard-service'
import {MacaronsTheme} from 'app/@theme/themeColor'

@Component({
  selector: 'ngx-chart-role-user',
  templateUrl: './chart-role-user.component.html',
  styleUrls: ['./chart-role-user.component.scss']
})
export class ChartRoleUserComponent implements OnInit {

  chartInstance:any;
  coolTheme = MacaronsTheme;
  option = {
    title: {
      text: 'Thống kê loại user',
      x: 'center'
    },
    textStyle: {
      fontFamily:'"Helvetica Neue", sans-serif',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
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
    dbService.getTotalRole().then(res=>{
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