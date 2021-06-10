import {red,pink,purple,indigo,blue,lightBlue,green,lime,yellow,orange,deepOrange,brown,deepPurple} from "@material-ui/core/colors"
import { rgb } from "d3-color";
export const themeColors = {
    chartLine:[
        {
            main:red.A700,
            gradientFrom:red[400],
            gradientTo:red[50]
        },
        {
            main:deepPurple.A700,
            gradientFrom:deepPurple[400],
            gradientTo:deepPurple[50]
        },
        {
            main:lightBlue.A700,
            gradientFrom:lightBlue[400],
            gradientTo:lightBlue[50]
        },
        {
            main:green.A700,
            gradientFrom:green[400],
            gradientTo:green[50]
        },

    ],
    chartCPU:{
        main:blue.A700
    },
    chartType:[
        red.A400,
        pink.A400,
        purple.A400,
        indigo.A400,
        blue.A400,
        green.A400,
        lightBlue.A400,
        lime.A400,
        yellow.A400,
        deepOrange.A400,
        orange.A400,
        brown.A400,
        deepPurple.A400,
    ]
    
}

export const CoolTheme = {
    color: [
      '#0b5ea8',
      '#17aecc',
      '#b3b3ff',
      '#b21ab4',
      '#6f0099',
      '#2a2073',
      '#0b5ea8',
      '#17aecc',
      '#b3b3ff',
      '#eb99ff',
      '#fae6ff',
      '#e6f2ff',
      '#eeeeee'
    ],
  
    title: {
      textStyle: {
        fontWeight: 'normal',
        color: '#00aecd'
      }
    },
  
    visualMap: {
      color: ['#00aecd', '#a2d4e6']
    },
  
    toolbox: {
      color: ['#00aecd', '#00aecd', '#00aecd', '#00aecd']
    },
  
    tooltip: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      axisPointer: {
        // Axis indicator, coordinate trigger effective
        type: 'line', // The default is a straight line： 'line' | 'shadow'
        lineStyle: {
          // Straight line indicator style settings
          color: '#00aecd',
          type: 'dashed'
        },
        crossStyle: {
          color: '#00aecd'
        },
        shadowStyle: {
          // Shadow indicator style settings
          color: 'rgba(200,200,200,0.3)'
        }
      }
    },
  
    // Area scaling controller
    dataZoom: {
      dataBackgroundColor: '#eee', // Data background color
      fillerColor: 'rgba(144,197,237,0.2)', // Fill the color
      handleColor: '#00aecd' // Handle color
    },
  
    timeline: {
      lineStyle: {
        color: '#00aecd'
      },
      controlStyle: {
        color: '#00aecd',
        borderColor: '00aecd'
      }
    },
  
    candlestick: {
      itemStyle: {
        color: '#00aecd',
        color0: '#a2d4e6'
      },
      lineStyle: {
        width: 1,
        color: '#00aecd',
        color0: '#a2d4e6'
      },
      areaStyle: {
        color: '#b21ab4',
        color0: '#0b5ea8'
      }
    },
  
    chord: {
      padding: 4,
      itemStyle: {
        color: '#b21ab4',
        borderWidth: 1,
        borderColor: 'rgba(128, 128, 128, 0.5)'
      },
      lineStyle: {
        color: 'rgba(128, 128, 128, 0.5)'
      },
      areaStyle: {
        color: '#0b5ea8'
      }
    },
  
    graph: {
      itemStyle: {
        color: '#b21ab4'
      },
      linkStyle: {
        color: '#2a2073'
      }
    },
  
    map: {
      itemStyle: {
        color: '#c12e34'
      },
      areaStyle: {
        color: '#ddd'
      },
      label: {
        color: '#c12e34'
      }
    },
  
    gauge: {
      axisLine: {
        lineStyle: {
          color: [
            [0.2, '#dddddd'],
            [0.8, '#00aecd'],
            [1, '#f5ccff']
          ],
          width: 8
        }
      }
    }
  };

var colorPalette = [
    '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
    '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
    '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
    '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
];


export const MacaronsTheme = {
    color: colorPalette,

    title: {
        textStyle: {
            fontWeight: 'normal',
            color: '#008acd'
        }
    },

    visualMap: {
        itemWidth: 15,
        color: ['#5ab1ef','#e0ffff']
    },

    toolbox: {
        iconStyle: {
            normal: {
                borderColor: colorPalette[0]
            }
        }
    },

    tooltip: {
        backgroundColor: 'rgba(50,50,50,0.5)',
        axisPointer : {
            type : 'line',
            lineStyle : {
                color: '#008acd'
            },
            crossStyle: {
                color: '#008acd'
            },
            shadowStyle : {
                color: 'rgba(200,200,200,0.2)'
            }
        }
    },

    dataZoom: {
        dataBackgroundColor: '#efefff',
        fillerColor: 'rgba(182,162,222,0.2)',
        handleColor: '#008acd'
    },

    grid: {
        borderColor: '#eee'
    },

    categoryAxis: {
        axisLine: {
            lineStyle: {
                color: '#008acd'
            }
        },
        splitLine: {
            lineStyle: {
                color: ['#eee']
            }
        }
    },

    valueAxis: {
        axisLine: {
            lineStyle: {
                color: '#008acd'
            }
        },
        splitArea : {
            show : true,
            areaStyle : {
                color: ['rgba(250,250,250,0.1)','rgba(200,200,200,0.1)']
            }
        },
        splitLine: {
            lineStyle: {
                color: ['#eee']
            }
        }
    },

    timeline : {
        lineStyle : {
            color : '#008acd'
        },
        controlStyle : {
            normal : { color : '#008acd'},
            emphasis : { color : '#008acd'}
        },
        symbol : 'emptyCircle',
        symbolSize : 3
    },

    line: {
        smooth : true,
        symbol: 'emptyCircle',
        symbolSize: 3
    },

    candlestick: {
        itemStyle: {
            normal: {
                color: '#d87a80',
                color0: '#2ec7c9',
                lineStyle: {
                    color: '#d87a80',
                    color0: '#2ec7c9'
                }
            }
        }
    },

    scatter: {
        symbol: 'circle',
        symbolSize: 4
    },

    map: {
        label: {
            normal: {
                textStyle: {
                    color: '#d87a80'
                }
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#eee',
                areaColor: '#ddd'
            },
            emphasis: {
                areaColor: '#fe994e'
            }
        }
    },

    graph: {
        color: colorPalette
    },

    gauge : {
        axisLine: {
            lineStyle: {
                color: [[0.2, '#2ec7c9'],[0.8, '#5ab1ef'],[1, '#d87a80']],
                width: 10
            }
        },
        axisTick: {
            splitNumber: 10,
            length :15,
            lineStyle: {
                color: 'auto'
            }
        },
        splitLine: {
            length :22,
            lineStyle: {
                color: 'auto'
            }
        },
        pointer : {
            width : 5
        }
    }
  }