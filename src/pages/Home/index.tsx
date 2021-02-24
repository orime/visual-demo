import React, { PureComponent } from 'react';
import ReactParticleLine from 'react-particle-line';
import animate from 'animate.css';
import Header from '@/pages/Header';
import LeftInfo from '@/pages/LeftInfo';
import LeftUp from '@/pages/LeftUp'
import LeftDown from '@/pages/LeftDown'
import TestPage from '@/pages/TestPage/index'
import Map from '@/pages/Map/index.js';
import Environment from '@/pages/Environment';
import Service from '@/pages/Service';
import Economic from '@/pages/Economic';
// import Trading from '@/pages/Trading';

import styles from './index.module.scss';
import Cluster from '../Cluster';

export default class index extends PureComponent {
  render() {
    return (
      <div className={styles.homeBox}>
        <ReactParticleLine>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.subHeader}>
            绿色投资顾问(金峰乡锦湖村)
          </div>
          <div className={styles.body}>
            <div className={styles.left}>
              <LeftUp />
              <LeftDown />
            </div>
            <div className={styles.center}>
              <div className={`${styles.centerUp} ${animate.animated} ${animate.zoomIn}`}>
                <Map />
              </div>
              <div className={styles.centerDown}>
                <Cluster />
              </div>
            </div>
            <div className={styles.right}>
              <Environment />
              <Service />
              <Economic />
            </div>
          </div>
        </ReactParticleLine>
      </div>
    );
  }
}
