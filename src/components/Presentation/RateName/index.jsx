import React from 'react'
import styles from './rateName.module.css'
import Name from '../../Name'
import Rate from '../../Rate'

export default function ratename({data}) {
  return (
    <div className={styles.container}>
      <Name name={data.name} picture={data.picture}/>
      <Rate data={data.rating} />
    </div>
  )
}
