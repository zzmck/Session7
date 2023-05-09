import React from 'react';
import { useSlider } from './useSlider';
import styles from './slideshow.module.css';
import BtnSlider from './BtnSlider/BtnSlider';

const Slider = ({ data }) => {
  const { dataSlider, slideAnim, nextSlide, prevSlide } = useSlider(data);

  return (
    <div data-testid="Slider" className={styles.container}>
        <>
          {dataSlider.map((image, index) => (
            <div
              key={index}
              className={
                slideAnim.index === index + 1
                  ? `${styles.slide} ${styles.activeAnim}`
                  : styles.slide
              }
            >
              <img
                className={styles.picture}
                src={image}
                data-testid="slider-image"
                alt={`Logement ${image} ${index}`}
              />
            </div>
          ))}

          {dataSlider.length > 1 && (
            <>
              <div className={styles.containerbutton}>
              <BtnSlider moveSlide={prevSlide} direction="prev" />
              <BtnSlider moveSlide={nextSlide} direction="next" />
              </div>
              <div className={styles.pagination}>
                <span data-testid="paginationCurrent" className={styles.paginationCurrent}>
                  {slideAnim.index}
                </span>
                <span className={styles.paginationSeparator}>/</span>
                <span className={styles.paginationTotal}>
                  {dataSlider.length}
                </span>
              </div>
            </>
          )}
        </>
    </div>
  );
};

export default Slider; 