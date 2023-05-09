import React from "react";
import styles from "./banner.module.css";

export default function Banner({bannerData}) {
  let key, title, picture, alt, overlay, overlayClass = "";

  bannerData.forEach((item, index) => {
    key = index;
    title = item.title;
    picture = item.picture;
    alt = item.alt;
    if (item.overlay) {
      overlay = item.overlay;
      overlayClass = styles.overlayClass;
    }
  });
  
 
  return (
    <>
      <img
        data-testid="banner-picture"
        src={picture}
        alt={alt}
        className={` ${styles.imgClass}`}
      />
      {overlay !== undefined ? (
        <div
          data-testid="banner-overlay"
          id={key}
          className={`${overlayClass}`}
          style={{ opacity: overlay }}
        ></div>
      ) : null}
      {title ? <h2 data-testid="banner-title" className={styles.titles}>{title}</h2> : null}

    </>
  );
}