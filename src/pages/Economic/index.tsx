import Card from '@/components/Card';
import React from 'react';
import EchartsForReact from 'echarts-for-react'
import * as echarts from 'echarts'

function Economic() {
  var data = {
    city: ["2017年","2018年","2019年","2020年E3"],
    num: [30.23, 47.00, 81.79, 59.56]
}
const option = {
        backgroundColor:'#0e1c47',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(255,255,255,0)' // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: 'rgba(255,255,255,1)' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(255,255,255,0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
        },

    },
    grid: {
        top: '18%',
        left: '15%',
        right: '5%',
        bottom: '25%',
        // containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: 'color:"#46668b"'
            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                // color: '#24c4ff',
                color: '#fff',
                margin: 15,
            },
            formatter: function(data: any) {
                return data
            }
        },
        axisTick: {
            show: false,
        },
        data: data.city
    }],
    yAxis: [{
        min: 0,
        max: 100,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#46668b'
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#46668b"
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                // color: '#24c4ff',
                color: '#fff',

            },
            formatter: function(value:any) {
                if (value === 0) {
                    return value
                }
                return value
            }
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name: '经济实力',
        type: 'line',
        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbolSize: 8,
        lineStyle: {
            normal: {
                color: "#9bcfd1", // 线条颜色
            },
            borderColor: 'rgba(84, 151, 159,.8)',
        },
        itemStyle: {
            color: "rgba(84, 151, 159,.8)",
            borderColor: "#9bcfd1",
            borderWidth: 2

        },
        label: {
            normal: {
                show: true,
                position: "top",
                formatter: [
                    ' {a|{c}}',
                ].join(','),
                rich: {
                    a: {
                        color: '#fff',
                        align: 'center',
                    },
                }
            }
        },
        tooltip: {
            show: true
        },
        areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "rgba(84, 151, 159,.8)"
                    },
                    {
                        offset: 1,
                        color: "rgba(84, 151, 159,.1)"
                    }
                ], false),
                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        data: data.num
    }]
};  return (
    <Card title="经济实力">
      <EchartsForReact option={option} />
    </Card>
  );
}

export default Economic;
