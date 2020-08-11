import React from 'react';
import styles from './_layout.css';

export default props => {
  return (
    <div className={styles.layout}>
      <h2>Product Layout Page</h2>
      {props.children}
    </div>
  );
};
