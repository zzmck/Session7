import React from 'react'
import styles from './collapseContent.module.css'

export default function Content({direction, data, state}) {
  return (
    <>
      <div data-testid="content" className={`${styles.container} ${direction==='column' ? styles.column : styles.row} ${state ? '' : styles.hide}`}>{data}</div>
    </>
  )
}
