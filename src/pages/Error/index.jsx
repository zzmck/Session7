import React from 'react'
import Error from '../../components/Error'
import styled from 'styled-components'

const ContainerError=styled.div`
    display:flex;
    margin-right:100px;
    margin-left:100px;
    margin-top:26px;
    margin-bottom:26px;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
      margin-right: 20px;
      margin-left: 20px;
    }
`;
export default function error() {
  const dataError = [{
    "type" : "404",
    "message" : "Oups! La page que vous demandez n'existe pas.",
    "returnMessage" : "Retourner à la page d'accueil"
  }];
  return (
    <ContainerError className="ErrorContainer">
        <Error data={dataError} />
    </ContainerError>
  )
}