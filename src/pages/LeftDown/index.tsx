import React, { useMemo } from 'react'
import ReactEcharts from 'echarts-for-react'
import { dataTool, EChartsOption } from 'echarts'
import Card from '@/components/Card'
import styles from './index.module.scss'

const columns = ['项目名称', '项目类型', '招商方向', '操作']

const titleComp = () => {
  return columns.map((item) => {
    return <div className={styles.titleItem}>{item}</div>
  })
}

const RightInfo = () => {
  const data = [
    {name: '金峰乡锦湖村集体物业楼', category: '村集体控制物业', investment: '出租 合作'},
    {name: '蒋岭上自然村', category: '魅力乡村 美丽集镇', investment: ''},
  ]
  return (<Card title="可开发资源清单" >
    <>
      <div className={styles.titleWrap}>{titleComp()}</div>
      <div className={styles.bodyWrap}>
        {data.map(item => {
          return <div className={styles.bodyItem}>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.category}>{item.category}</div>
            <div className={styles.investment}>{item.investment}</div>
            <div className={styles.operation}>查看</div>
          </div>
        })}
      </div>
    </>
  </Card>)
}

export default RightInfo