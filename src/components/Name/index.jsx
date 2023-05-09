import React from 'react'
import styles from './name.module.css'

export default function Name({ name, picture, classComponent }) {
  const specialStyle = classComponent ? `${styles.container} ${classComponent}` : styles.container;
  return (
    <div className={specialStyle}>
      <div data-testid="hosterName" className={styles.name}>{name}</div>
      <div className={styles.containpicture}>
        <img data-testid="hosterPicture" className={styles.picture} src={picture} alt="Hoster" />
      </div>
    </div>
  );
}