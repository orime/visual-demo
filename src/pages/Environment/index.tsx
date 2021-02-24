import Card from '@/components/Card';
import React from 'react';

function Environment() {
  return (
    <Card title="生态环境">
      <img style={{width: 485}} src={require('../../assets/images/environment-bg.png').default} alt=""/>
    </Card>
  );
}

export default Environment;
