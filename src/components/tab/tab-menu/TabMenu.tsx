'use client'
import React from 'react'
import {useTabStore} from "@/lib/store/tab-store"
import styles from "./tabMenu.module.scss"
import type {TabHeader, Tab} from "@/lib/types/TabMenuTypes"

interface ITabMenuProps{
    headers: TabHeader[]
}
const TabMenu = ({headers}: ITabMenuProps) => {

    const {activeTab, setActiveTab} = useTabStore()
    const isActiveTab = (item: string) => item === activeTab
    const handleTabClick = (tab: Tab) => setActiveTab(tab)

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