import React,{ useState } from 'react'
import styles from './headerItems.module.css'

export default function NavItems({name, clicked, onClick}) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };


  return (
      <li className={`${styles.items} ${hovered || clicked ?  styles.underline : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      >{name}</li>
  )
}
