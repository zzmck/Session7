import React from 'react'
import styles from './rate.module.css'
import starFull from '../../assets/star_full.svg'
import starEmpty from '../../assets/star_empty.svg'

export default function Rate(props) {
  const {data, classComponent} = props;
  const specialStyle = classComponent ? `${styles.container} ${classComponent}` : styles.container;
  const range = [1, 2, 3, 4, 5];
  return (
    <div className={specialStyle} >
      {range.map((nbStar, index)=>{
        const isFull = data >= nbStar;
        const imgSrc = isFull ? starFull : starEmpty;
        return <img data-testid="testStar" key={index} src={imgSrc} className={styles.star}  alt="stars" />;
      })

      }
    </div>
  )
}