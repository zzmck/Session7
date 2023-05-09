import React from 'react'
import styles from './name.module.css'

export default function name({name, picture}) {
  return (
    <div className={styles.container}>
      <div data-testid="hosterName" className={styles.name}>{name}</div>
      <div className={styles.containpicture}>
        <img data-testid="hosterPicture" className={styles.picture} src={picture} alt="Hoster" />
      </div>
    </div>
  )
}