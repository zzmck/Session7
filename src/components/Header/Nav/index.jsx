import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DataContext } from '../../../context';
import styles from './headerNav.module.css';
import NavItem from './Items';

export default function Nav() {
  const { links } = useContext(DataContext);
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const link = links.map((item, index) => {
    const linkClass = index === activeLink ? `${styles.decoration} ${styles.underline}` : styles.decoration;
    return (
      <Link key={index} to={item.link} className={linkClass} onClick={() => handleLinkClick(index)}>
        <NavItem name={item.name} />
      </Link>
    );
  });

  useEffect(() => {
    const activeIndex = links.findIndex((item) => item.link === location.pathname);
    setActiveLink(activeIndex);
  }, [links, location.pathname]);

  return (
    <nav className={styles.container}>
      <ul data-testid="navigationHeader" className={styles.itemsContainer}>
        {link}
      </ul>
    </nav>
  );
}
