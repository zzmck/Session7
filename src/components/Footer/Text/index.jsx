import React from 'react'
import styles from './footerText.module.css'

export default function text() {
  return (
    <div data-testid="textFooter" className={styles.text}>© 2020 Kasa. All rights reserved</div>
  )
}
