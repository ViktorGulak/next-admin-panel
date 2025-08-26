'use client'
import React, {useState} from 'react'
import styles from "./tabMenu.module.scss"
import type TabHeader from "@/lib/types/TabHeader"

interface ITabMenuProps{
    headers: TabHeader[]
}
const TabMenu = ({headers}: ITabMenuProps) => {
    const [activeTab, setActiveTab] = useState("notes")
    const isActiveTab = (item: string) => item === activeTab
    const handleTabClick = (tab: string) => setActiveTab(tab)
    console.log("рендер")
  return (
    <ul className={`tab ${styles.custom_tab}`}>
        {   
            headers.map(el => {
                return (
                    <li className="tab-item" key={el.headerName}>
                        <button 
                            className={`btn btn-link ${ isActiveTab(el.headerName) ? styles.active : ""}`} 
                            onClick={() => handleTabClick(el.headerName)}>
                            {el.headerTitle}
                        </button>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default TabMenu