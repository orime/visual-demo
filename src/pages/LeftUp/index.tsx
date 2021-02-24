import React, { useMemo } from 'react'
import ReactEcharts from 'echarts-for-react'
import { EChartsOption } from 'echarts'
import Card from '@/components/Card'

const RightInfo = () => {
  const options: EChartsOption = useMemo(() => {
    return ({
      title: {
        // text: '基础雷达图',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {},
      legend: {
        orient: 'vertical',
        data: ['投资分析'],
        formatter: '{a|318.39\n}{b|   总得分}',
        inactiveColor: 'rgba(208, 217, 99, 100)',
        textStyle: {
          color: '#fff',
          rich: {
            a: {
              color: 'rgba(208, 217, 99, 100)',
              fontSize: 24,
              lineHeight: 24,
            },
            b: {
              color: 'rgba(208, 217, 99, 100)',
              fontSize: 16,
            },
          },
        },
        right: 20,
        top: 20
      },
      textStyle:{
        color: 'rgba(208, 217, 99, 100)',
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: '配套服务 77.63', max: 100 },
          { name: '生态环境 77.63', max: 100 },
          { name: '产业聚集 77.63', max: 100 },
          { name: '经济实力 77.63', max: 100 },
        ],
        radius: 88,
        axisName: {
          rich:{
            a: {
              color: 'rgba(208, 217, 99, 100)',
            }
          },
          formatter: '{a|{value}}'
        }
      },
      series: [{
        type: 'radar',
        areaStyle: {},
        data: [
          {
            value: [77.63, 77.63, 77.63, 77.63],
            name: '投资分析'
          }
        ],
      }]
    })
  }, [])
  return <Card title="投资分析" ><ReactEcharts theme="light" option={options} /></Card>
}

export default RightInfo