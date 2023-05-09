import React,{ useContext } from 'react'
import {Link} from 'react-router-dom'
import { DataContext } from '../../../context';
import styles from './headerNav.module.css'
import NavItem from './Items'



export default function Nav() {
  const {links} = useContext(DataContext);
const link = links.map((item, index) => {
  return <Link key={index} to={item.link} className={styles.decoration}><NavItem name={item.name} /></Link>
})
  return (
    <div className={styles.container}>
    <ul data-testid="navigationHeader" className={styles.itemsContainer}>
      {link}
    </ul>
    </div>
  )
}
