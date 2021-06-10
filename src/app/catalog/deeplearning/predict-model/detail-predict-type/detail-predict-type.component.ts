import { Component, OnInit,Input } from '@angular/core';
import {} from 'app/services/dashboard/dashboard-service'
import {CoolTheme,MacaronsTheme} from 'app/@theme/themeColor'

@Component({
  selector: 'ngx-detail-predict-type',
  templateUrl: './detail-predict-type.component.html',
  styleUrls: ['./detail-predict-type.component.scss']
})
export class DetailPredictTypeComponent implements OnInit {

  @Input() resultPredict : any[];
  @Input() isLoading : boolean;
  chartInstance:any;
  macaronsTheme = MacaronsTheme;


  constructor() {
    if(this.resultPredict==undefined||this.resultPredict==undefined)
    {
    }
   }

  initOption(index)
   {
    let option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
        textStyle: {
          fontFamily:'"Helvetica Neue", sans-serif',
          fontSize :16
        },
      },
      textStyle: {
        fontFamily:'"Helvetica Neue", sans-serif',
        fontSize :16
      },
      calculable: true,
      series: [
        {
          name: '',
          type: 'pie',
          radius: [20, 140],
          roseType: 'area',
          itemStyle: {
              borderRadius: 5
          },
          data: [
  
          ]
        }
      ]
    };
     option.series[0].data=[]
      this.resultPredict[index].predict.forEach((t,i) => {
        option.series[0].data.push({ value: t.value, name: t.nameType })
        //option.legend.data.push(t.nameType)
      })
      return option;
   }
  ngOnInit(): void {
  }
  onChartInit(ec){
    //this.chartInstance=ec;
  }



}

