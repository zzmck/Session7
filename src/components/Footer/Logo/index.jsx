import React from 'react'
import styles from './logo.module.css'
import logo_footer from '../../../assets/footer_logo.webp'

export default function logo() {
  return (
    <div className={styles.picture}>
      <img data-testid="logoFooter" src={logo_footer} alt='Logo kasa blanc' />
    </div>
  )
}
