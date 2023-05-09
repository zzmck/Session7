import React from 'react'
import styles from './tags.module.css'

export default function tags({tags, classComponent}) {
  const specialStyle = classComponent ? `${styles.container} ${classComponent}` : styles.container;
  const tag = tags.map((item, index) => {
    return <p  data-testid="tag" key={index} className={styles.tagclass}>{item}</p>
  });
  return (
    <div className={specialStyle}>
      {tag}
    </div>
  )
}
