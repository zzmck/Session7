import React from 'react'
import styles from './footer.module.css'
import LogoFooter from './Logo'
import TextFooter from './Text'

export default function footer() {
  return (
    <div className={styles.container}>
      <LogoFooter />
      <TextFooter />
    </div>
  )
}
