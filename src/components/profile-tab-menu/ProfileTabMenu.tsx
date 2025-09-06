'use client'
import React from 'react'
import {useTabStore} from "@/lib/store/tab-store"
import styles from "./profileTabMenu.module.scss"
import type {TabHeader, Tab} from "@/lib/types/TabMenuTypes"

interface IProfileTabMenuProps{
    headers: TabHeader[]
}
const ProfileTabMenu = ({headers}: IProfileTabMenuProps) => {

    const {activeTab, setActiveTab} = useTabStore()
    const isActiveTab = (item: Tab) => item === activeTab
    const handleTabClick = (tab: Tab) => setActiveTab(tab)

  return (
    <>
        {   
            headers.map(el => {
                return (
                    <li className="tab-item" key={el.headerName}>
                        <button 
                            className={`btn btn-link ${styles.tab_link} ${ isActiveTab(el.headerName) ? styles.active : ""}`} 
                            onClick={() => handleTabClick(el.headerName)}>
                            {el.headerTitle}
                        </button>
                    </li>
                )
            })
        }
    </>
  )
}

export default ProfileTabMenu