import { Component, OnChanges, OnInit } from '@angular/core';
import {DashboardHttpClient} from "app/services/dashboard/dashboard-service"
import {themeColors} from "app/@theme/themeColor"

@Component({
  selector: 'ngx-chart-reaction-my-song',
  templateUrl: './chart-reaction-my-song.component.html',
  styleUrls: ['./chart-reaction-my-song.component.scss']
})
export class ChartReactionMySongComponent implements OnInit {
  isLoading = true;
  echartsIntance: any;
  options = {
    title:{text:" Thống kê tương tác bài hát"},
    textStyle: {
      fontFamily:'"Helvetica Neue", sans-serif',
    },
    itemStyle: {
      normal: {
        opacity: 0,
      },
      emphasis: {
        color: '#ffffff',
        borderColor: '#fff',
        borderWidth: 2,
        opacity: 1,
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Like','Comment','Listen','Download']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Listen',
        type: 'bar',        
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Like',
        type: 'bar',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Comment',
        type: 'bar',        
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Download',
        type: 'bar',       
        data: [320, 332, 301, 334, 390, 330, 320]
      }
    ]
  };

  constructor(public dbService: DashboardHttpClient) {
    this.initOption();
    this.loadDataToChart('month')
   }

  ngOnInit(): void {
  }

  initOption(){
    this.options.series.forEach( (sr,i )=> {
      sr['itemStyle']= {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: themeColors.chartLine[i].main,
          }, {
            offset: 1,
            color: themeColors.chartLine[i].main,
          }]),
        },
      },
      sr['lineStyle']= {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: themeColors.chartLine[i].main,
          }, {
            offset: 1,
            color: themeColors.chartLine[i].main,
          }]),
        },
      }      
      sr['areaStyle']= {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: themeColors.chartLine[i].gradientFrom,
          }, {
            offset: 1,
            color: themeColors.chartLine[i].gradientTo,
          }]),
          opacity: 1,
        },
      }
      sr.type = 'line'
    });
  }
  onChartInit(echarts) {
    this.echartsIntance = echarts;
  }

  onChangeShape(shape)
  {
    if(shape)
    {
      this.options.series.forEach((sr,i )=> {
        sr.type = 'line'
      });
    }
    else
    {
      this.options.series.forEach((sr,i )=> {
        sr.type = 'bar'
      });
    }

    if(this.echartsIntance)
    {
      this.echartsIntance.setOption(this.options);
    }
  }

  onChangeTime(time)
  {
    this.loadDataToChart(time)
  }

  loadDataToChart(time)
  {
    this.isLoading = true;
    this.dbService.getChartReactionMySong(time).then(res=>{
      var arrLabel = new Array()
      res.data.forEach(x=>arrLabel.push(x.title))
      

      var arrLike = new Array()
      var arrCmt = new Array()
      var arrListen = new Array()
      var arrDownload = new Array()
      res.data.forEach(x=>{
        arrLike.push(x.like);
        arrCmt.push(x.cmt);
        arrListen.push(x.listen);
        arrDownload.push(x.download);
      })

      this.options.xAxis[0].data = arrLabel;
      this.options.legend.data=['Listen','Like','Comment','Download']
      this.options.series[0].data=arrListen;
      this.options.series[1].data=arrLike;
      this.options.series[2].data=arrCmt;
      this.options.series[3].data=arrDownload;
      if(this.echartsIntance)
      {
        this.echartsIntance.setOption(this.options);
      }
      this.isLoading = false;

    })
  }
}
