import Card from '@/components/Card';
import { dataTool } from 'echarts';
import React from 'react';
import styles from './index.module.scss'

function Cluster() {
  const data = [
    {
      category: '景区', title: '景区数量(10公里)', count: 23, evaluateType: 'star', items: [
        { name: '金峰峡谷漂流', distance: 0.87, value: '重点' },
        { name: '源头水湾', distance: 2.77, value: '重点' },
        { name: '锦溪秀色', distance: 2.78, value: '重点' },
      ]
    },
    {
      category: '酒店', title: '酒店数量(10公里)', count: 17, evaluateType: 'star', items: [
        { name: '千岛湖温馨岛度假酒店', distance: 6.78, value: '重点' },
        { name: '千岛湖浙旅名庭酒店', distance: 7.78, value: '重点' },
        { name: '锦溪秀色', distance: 2.78, value: '重点' },
      ]
    },
    {
      category: '名宿', title: '名宿数量(10公里)', count: 128, evaluateType: 'score', items: [
        { name: '春兰土菜馆', distance: 1.87, value: '3.81' },
        { name: '枫丹名宿', distance: 2.32, value: '3.6' },
        { name: '千岛湖国民农庄有限公司', distance: 2.38, value: '3.8' },
      ]
    },
  ]
  return (
    <Card title="产业聚集" titleAlign="left">
      <div className={styles.wrap}>
        {data.map(item => {
          return <div className={styles.itemWrap}>
            <div className={styles.title}>
              <div>{item.title}</div>
              <div className={styles.count}>{item.count}家</div>
            </div>
            <div className={styles.subTitle}>
              <div className={styles.name}>{`${item.category}名称`}</div>
              <div className={styles.distance}>距离</div>
              <div className={styles.value}>{item.evaluateType === 'star' ? '星级' : '评分'}</div>
            </div>
            {item.items.map((subItem) => {
              return <div className={styles.body}>
                <div className={styles.name}>{subItem.name}</div>
                <div className={styles.distance}>{subItem.distance}km</div>
                <div className={styles.value}>{subItem.value}</div>
              </div>
            })}
          </div>
        })}</div>
    </Card>
  );
}

export default Cluster;
