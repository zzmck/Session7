import React,{useState} from 'react'
import styles from './headerItems.module.css'

export default function NavItems({name}) {

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };


  return (
      <li className={`${styles.items} ${hovered ? styles.underline : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >{name}</li>
  )
}
