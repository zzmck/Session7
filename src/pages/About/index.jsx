import React from 'react'
import styles from './pageAbout.module.css'
import Collapse from '../../components/Collapse'
import Banner from '../../components/Banner'
import picture from '../../assets/banner_about.webp'

import styled from 'styled-components'

const ContainerBanner = styled.div`
  display:flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 223px;
  border-radius: 25px;

  @media (max-width: 768px) {
    height: 223px !important;
    justify-content: flex-start;
    border-radius: 10px;
  }
`;
const ContainerCollapse=styled.div`
    display: flex;
    max-width: 1040px;
    margin-top: 31px;
    margin-right: 100px;
    margin-left: 100px;
  @media (max-width: 768px) {
    margin: 0 0px;
    margin-top:19px;
  }
`;

export default function about() {

  const dataCollapse = [{
    title:"Fiabilité",
    text:"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
  },
  {
    title:"Respect",
    text:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },{
    title:"Service",
    text:"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  },
  {
    title:"Sécurité",
    text:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  }]
  const banner_data = [{
    "title":"",
    "picture":picture,
    "alt":"Description about the picture",
    "overlay":0.3
  }];



  return (
    <div className={styles.container}>
    <ContainerBanner>
      <Banner bannerData={banner_data} />
    </ContainerBanner>
    <ContainerCollapse> 
      <Collapse direction="column" data={dataCollapse} />
    </ContainerCollapse>
    </div>
  )
}