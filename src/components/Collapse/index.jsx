import React from 'react';
import Component from './Component'
import styled from 'styled-components'

const ContainerCollapse = 
  styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    gap: ${({ direction }) => direction === "column" ? "33px" : "76px"};
    width: 100%;

    @media (max-width: 1200px)
    {
      gap: 20px;
      flex-wrap:wrap;
    }
  `;
export default function DescriptionEquipements(props) {
  const { direction, data } = props;

  const bars = [];
  const nbComponent = data.length;

  for (let i = 1; i <= nbComponent; i++) {
    bars.push(<Component key={i} direction={direction} data={data[(i-1)]} />);
  }
  
  return (
    
    <ContainerCollapse  direction={direction}>
      {bars}
    </ContainerCollapse>
  );
}