import React from 'react';
import styles from './[id].css';
import { history } from 'umi';

export default (props) => {
  const { id } = props.match.params;
  const clickHandle = () => {
    history.push('/orderlist');
  };

  return (
    <div>
      <h1 className={styles.title}>Page Product/[{id}]</h1>
      <button type={'button'} onClick={clickHandle}>跳转</button>
    </div>
  );
}
