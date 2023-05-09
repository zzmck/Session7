import React from 'react'
import styles from './index.module.css'

export default function title({data}) {
  return (
    <div data-testid="testTitle" className={styles.container}>{data}</div>
  )
}
