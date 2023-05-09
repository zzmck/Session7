import React from 'react';
import styles from './global.css';

const GlobalStyle = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default GlobalStyle;