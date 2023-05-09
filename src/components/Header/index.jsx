import React from 'react'
import styles from './header.module.css'
import Logo from './Logo'
import Nav from './Nav'

export default function Header() {
  return (
    <div className={styles.container}>
      <Logo />
      <Nav />
    </div>
  );
}
