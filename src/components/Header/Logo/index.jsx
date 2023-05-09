import React from 'react';
import styles from './index.module.css';
import imgLogo from '../../../assets/header_logo.webp'

export default function Logo() {
  return (
    <div className={styles.container}>
        <img data-testid="logo" src={imgLogo} alt="Logo Kasa" />
    </div>
  );
}