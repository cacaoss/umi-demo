import React from 'react';
import styles from './index.css';
import { dynamic } from 'umi';

const delay = timeout => {
  return new Promise((resolve, reject) => setTimeout(resolve, timeout));
};

const DelayHelloPage = dynamic({
  loader: async function() {
    await delay(2000);

    const { HelloPage } = await import('./Hellopage');
    return HelloPage;
  },
});

export default DelayHelloPage;
