import React from 'react'
import styles from './error.module.css'
export default function Error({data}) {
  const { type, message, returnMessage } = data.map((item)=>{
  return {
    type: item.type,
    message: item.message,
    returnMessage: item.returnMessage,
  };
 })[0];
  return (
        <>
            <span className={styles.error}>{type}</span>
            <span className={styles.message}>{message}</span>
            <a className={styles.return} href="/">{returnMessage}</a>
        </>
  )
}

