import React from 'react';
import Banner from '../../components/Banner';
import Cards from '../../components/Cards';
import picture from '../../assets/banner_Home.webp';
import styles from './home.module.css';
import styled from 'styled-components';

const banner_data = [{
  "title":"Chez vous, partout et ailleurs",
  "picture":picture,
  "alt":"Description about the picture",
  "overlay":0.3
}];
const BannerContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  height:223px;
    @media (max-width: 768px) {
        justify-content: flex-start;
        height: 111px;
  }
`;
export default function Home() {
  

  return (
    <div className={styles.container}>
      <h1 data-testid="TitleWebsite" hidden>Bienvenue sur kasa</h1>
      <BannerContainer className="ContainerBanner">
        <Banner bannerData={banner_data} />
      </BannerContainer>
      <div className={styles.cardsContainer}>
        <Cards />
      </div>
    </div>
  );
}