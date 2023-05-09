import React from 'react'
import styles from './title.module.css'

export default function title({data, classComponent}) {
  const specialStyle = classComponent ? `${styles.container} ${classComponent}` : styles.container;
  return (
    <div data-testid="testTitle" className={specialStyle}>{data}</div>
  )
}
