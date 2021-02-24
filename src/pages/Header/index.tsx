import React, { memo, useState, useEffect } from 'react';
import { moment } from '@/utils/util';
// import SvgIcon from '@/components/SvgIcon';
import styles from './index.module.scss';

// SvgIcon.createFromIconfontCN({
//   scriptUrl: '//at.alicdn.com/t/font_624956_br6r8nb9msp.js',
// });
// * usage：<SvgIcon icon="icon-shezhi" className={styles.setIcon} />

const FORMAT = 'YYYY/MM/DD HH:mm:SS';

const RawHeader = () => {
  const [time, setTime] = useState(+new Date());

  useEffect(() => {
    const t = setInterval(() => {
      setTime(+new Date());
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        杭州城市大脑 | 数字驾驶舱
      </div>
      <div className={styles.center}>
        <div className={styles.leftTitle}>特色指标</div>
        <div className={styles.mainTitle}>数字驾驶舱</div>
        <div className={styles.rightTitle}>部门 | 县区 | 街道</div>
      </div>
      <div className={styles.right}>
        <div>位置 张铭 欢迎进入</div>
        <div className={styles.desc}>{moment(time).format(FORMAT)}</div>
      </div>
    </div>
  );
};

export default memo(RawHeader)
