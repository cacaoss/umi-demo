import styles from './index.css';
import { Link } from 'umi';
import React from 'react';

export default props => {
  if (props.location.pathname === '/login') {
    return (
      <div className={styles.rootLayOut}>
        <h1>Root Page Layout -- Login</h1>
        <Link to={'/'}>首页</Link>
        <Link to={'/login'}>登录</Link>
        <Link to={'/product/123'}>产品</Link>
        <Link to={'/welcome'}>欢迎</Link>
        <Link to={'/delaypage'}>延时加载</Link>
        <Link to={'/morepage'}>MorePage</Link>
        {props.children}
      </div>
    );
  } else {
    return (
      <div className={styles.rootLayOut}>
        <h1>Root Page Layout -- Simple</h1>
        <Link to={'/'}>首页</Link>
        <Link to={'/login'}>登录</Link>
        <Link to={'/product/123'}>产品</Link>
        <Link to={'/welcome'}>欢迎</Link>
        <Link to={'/delaypage'}>延时加载</Link>
        <Link to={'/morepage'}>MorePage</Link>
        {props.children}
      </div>
    );
  }
};
