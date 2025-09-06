import React from 'react'
import styles from "./tabMenu.module.scss"

const TabMenu = ({children}: {children: React.ReactNode}) => {

  return (
    <ul className={`tab ${styles.custom_tab}`}>
        {children}
    </ul>
  )
}

export default TabMenu