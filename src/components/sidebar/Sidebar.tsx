'use client'
import React, {useState, useEffect} from 'react';
import getSidebarLinks from './sidebarData';
import styles from "./sidebar.module.scss";
import Link from 'next/link'
import { usePathname, useParams } from 'next/navigation'
import { useAuthorizedEmployeeStore } from "@/lib/store/authorized-employee-store"
const Sidebar = () =>{

  const [sbActive, setSbActive] = useState(true);
  const path = usePathname();
  const params = useParams()
  const { employeeId, setEmployeeId } = useAuthorizedEmployeeStore();

  useEffect(() => {
    if (params.id) setEmployeeId(params.id as string);
  }, [params.id]);

  const links = getSidebarLinks(employeeId);
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
