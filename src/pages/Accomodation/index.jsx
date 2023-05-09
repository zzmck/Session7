import React, { useContext } from 'react';
import styles from './pageAccomodation.module.css';
import Slideshow from '../../components/Slideshow';
import Presentation from '../../components/Presentation';
import Collapse from '../../components/Collapse';
import { DataContext } from '../../context';
import { useParams, Navigate } from 'react-router-dom';
import styled from 'styled-components'

const ContainerCollapse=styled.div`
  display: flex;
  width: 100%;
  margin-top: 24px;
  @media (max-width: 768px) {
    margin-top: 16px;
}
`;
export default function Accomodation() {
  const { data } = useContext(DataContext);
  const { id } = useParams();
 
  const thisAccomodation = data.find(accomodation => accomodation.id === id);
  if (!thisAccomodation) {
    return <Navigate to="/404" />;
  }

  const dataSlider = thisAccomodation.pictures;

  const dataPresentation = {
    title: thisAccomodation.title,
    location: thisAccomodation.location,
    tags: thisAccomodation.tags,
    name: thisAccomodation.host.name,
    picture:thisAccomodation.host.picture,
    rating: thisAccomodation.rating
  }

  const dataCollapse = [{
    title:"Description",
    text:thisAccomodation.description
  },
  {
    title:"Equipements",
    text:thisAccomodation.equipments
  }]

  return (
    <div className={styles.container}>
      <Slideshow data={dataSlider} />
      <Presentation data={dataPresentation} />
      <ContainerCollapse>
        <Collapse direction='row' data={dataCollapse} />
      </ContainerCollapse>
    </div>
  );
}