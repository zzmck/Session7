import React from 'react'
import styles from './tags.module.css'

export default function tags({tags}) {

  const tag = tags.map((item, index) => {
    return <p  data-testid="tag" key={index} className={styles.tagclass}>{item}</p>
  });
  return (
    <div className={styles.container}>
      {tag}
    </div>
  )
}
