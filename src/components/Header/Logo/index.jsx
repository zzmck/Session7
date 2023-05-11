import React from 'react';
import {Link} from "react-router-dom"
import styles from './index.module.css';
import imgLogo from '../../../assets/header_logo.webp'

export default function Logo() {
  return (
    <Link to='/'>
    <div className={styles.container}>
        <img data-testid="logo" src={imgLogo} alt="Logo Kasa" />
    </div>
    </Link>
  );
}