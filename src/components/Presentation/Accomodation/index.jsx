import React from 'react'
import styles from './presAccomodation.module.css'
import Title from '../../Title'
import Location from '../../Location'
import Tags from '../../Tags'
import styled from 'styled-components'

const TitleStyle = styled.div`
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 51px;
  
  display: flex;
  align-items: flex-end;
  
  color: #FF6060;
  min-height: 51px;
  @media(max-width:768px){
      font-size: 18px;
      line-height: 26px;
    min-height: 26px;
  }
`;

const LocationStyle = styled.div`
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: flex-end;
    height: fit-content;
  color: #FF6060;
  @media(max-width:768px){
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-top: 5px;
  }
`;
export default function accomodation({data}) {
  return (
    <div className={styles.container}>
    <TitleStyle>
      <Title data={data.title} />
    </TitleStyle>
    <LocationStyle>
      <Location data={data.location} />
    </LocationStyle>
      <Tags tags={data.tags} />
    </div>
  )
}
