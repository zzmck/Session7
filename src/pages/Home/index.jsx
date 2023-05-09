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
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 50px 60px;
  align-items: stretch;
  padding: 56px 50px;
  margin: 43px 0 26px;
  border-radius: 25px;
  background: #F7F7F7;
  @media (max-width: 768px) {
    margin-bottom: 26px;
    gap: 20px 60px;
    width: 100%;
    margin-top: 22px;
    padding: 0;
    border-radius: 0;
    padding-bottom: 56px;
    background: white;
  }
`;

export default function Home() {
  

  return (
    <div className={styles.container}>
      <h1 data-testid="TitleWebsite" hidden>Bienvenue sur kasa</h1>
      <BannerContainer className="ContainerBanner">
        <Banner bannerData={banner_data} />
      </BannerContainer>
      <CardsContainer className="ContainerCards">
        <Cards />
      </CardsContainer>
    </div>
  );
}