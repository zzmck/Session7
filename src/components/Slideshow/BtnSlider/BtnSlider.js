import React from 'react'
import leftArrow from '../../../assets/left-arrow.svg'
import rightArrow from '../../../assets/right-arrow.svg'
import styles from './BtnSlider.module.css'

export default function BtnSlider({ moveSlide, direction}) {
    const btnClass = direction === "next" ? `${styles.next}` : `${styles.prev}`;
  
    const handleClick = () => {
      if (moveSlide) {
        moveSlide();
      }
    };
  
    return (
      <button
        data-testid={direction === "next" ? "nextBtn" : "prevBtn"}
        onClick={handleClick}
        className={btnClass}
      >
        <img className={styles.buttons} src={direction === "next" ? rightArrow : leftArrow} alt="Icons Arrow"/>
      </button>
    );
  
  
}