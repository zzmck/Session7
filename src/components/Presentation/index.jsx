import React from 'react'
import styles from './presentation.module.css'
import RateName from './RateName'
import DescAccomodation from './Accomodation'
import styled from 'styled-components'

const ContainerAccomodation = styled.div`
display:flex;
flex-direction: column;
align-content: flex-start;
align-items: flex-start;
`;

export default function Presentation({data}) {


  return (
    <div className={styles.container}>
      <ContainerAccomodation>
        <DescAccomodation data={data} />
      </ContainerAccomodation>
      <RateName data={data} />
    </div>
  )
}