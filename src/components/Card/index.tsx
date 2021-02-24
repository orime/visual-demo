import React from 'react';
import styles from './index.module.scss'

interface CardProps {
  title: string;
  children: React.ReactChild;
  titleAlign?: 'left' | 'center' | 'right'
}

function Card(props: CardProps) {
  const { title, children, titleAlign } = props
  return (
    <div className={styles.card}>
      <div className={styles.title} style={{textAlign: titleAlign ? titleAlign : 'center', paddingLeft: titleAlign?10:0}}>{title}</div>
      {children}
    </div>
  );
}

export default Card;
