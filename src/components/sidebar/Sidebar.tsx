'use client'
import React, {useState} from 'react';
import getSidebarLinks from './sidebarData';
import styles from "./sidebar.module.scss";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Sidebar = () =>{

  const [sbActive, setSbActive] = useState(true);
  const path = usePathname();
  const links = getSidebarLinks();
  console.log(sbActive)
  return (
    <div className={`${styles.sidebar} ${!sbActive ? styles.collapsed : ""}`}>
      <div className={styles.sidebar_header}>
        {sbActive && <h4>Меню</h4>}
        <button 
        className="btn btn-link btn-lg btn-action"
        onClick={ () => setSbActive(!sbActive)}
        >
          <i className={`icon ${!sbActive ? "icon-menu" : "icon-cross"}`}></i>
        </button>
      </div>
      <ul className={`${styles.nav_menu}`}>
        {
          links.map((item) => {
            return (
              <li key={item.title}>
                <Link href = {item.path} 
                className={path === item.path ? styles.selected : ""}>
                  <i className={item.icon}></i>
                  {sbActive && <span>{item.title}</span>}
                </Link>
              </li>
            );
          })
        }  
      </ul>
    </div>
  )
}

export default Sidebar
