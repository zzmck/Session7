import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '../../Title';
import styles from './cardsItem.module.css';
import styled from 'styled-components'

const TitleStyle = styled.div`
  font-family: var(--font-family);
  position: absolute;
  bottom: 20px;
  left: 20px;
  right:20px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: flex-end;
  color: var(--background-color);
  @media(max-width:768px){
    bottom: 15px;
    left: 19.7px;
    right: 19.7px;
  }
`;

export default function Item({ data }) {
  const { id, cover, title } = data;
  useEffect(() => {
    const cacheImage = async () => {
      const image = new Image();
      image.src = cover;
      if (image.complete) {
        return;
      }

      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = reject;
      });
    };

    cacheImage();
  }, [cover]);

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link to={`/accomodation/${id}`}>
      <div data-testid="cards-items" className={styles.card}>
        <img
          data-testid="cards-picture"
          src={cover}
          alt={title}
          style={{ display: isLoaded ? 'block' : 'none' }}
          onLoad={() => setIsLoaded(true)}
        />
        {!isLoaded && (
          <div className="placeholder">
            <div data-testid="cards-spinner" className="spinner" />
          </div>
        )}
        <TitleStyle>
          <Title data={title} classComponent={styles.title} />
        </TitleStyle>
      </div>
    </Link>
  );
}