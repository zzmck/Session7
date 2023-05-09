import React from 'react'
import Error from '../../components/Error'
import styles from './error.module.css';

export default function error() {
  const dataError = [{
    "type" : "404",
    "message" : "Oups! La page que vous demandez n'existe pas.",
    "returnMessage" : "Retourner à la page d'accueil"
  }];
  return (
    <div className={styles.container}>
        <Error data={dataError} />
    </div>
  )
}