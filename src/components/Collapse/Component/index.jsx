import React, { useState } from 'react'
import Content from './Content'
import ArrowUp from '../../../assets/fleche_up.webp'
import ArrowDown from '../../../assets/fleche_down.webp'
import styles from './collapseComponent.module.css'

export default function Description({ direction, data }) {
  const title = data.title;

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen)
  }

  let showData = null

  if (Array.isArray(data.text) && data.text.length > 1) {
    showData = (
      <ul>
        {data.text.map((item, index) => {
          return <li key={index} className={styles.listes}>{item}</li>
        })}
      </ul>
    )
  } else {
    showData = data.text;
  }
  const textClass = direction === "column" ? `${styles.text} ${styles.column}` : `${styles.text} ${styles.row}`;
  return (
    <>
      <div className={styles.container}>
        <div data-testid="titleCollapse" className={styles.title} onClick={toggleDescription}>
          <span className={textClass}>{title}</span>
          <img
            className={styles.arrow}
            src={isDescriptionOpen ? ArrowUp : ArrowDown}
            alt={isDescriptionOpen ? 'ArrowUp' : 'ArrowDown'}
          />
        </div>
        <Content direction={direction} data={showData} state={isDescriptionOpen} />
      </div>
    </>
  )
}