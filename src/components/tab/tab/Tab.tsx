import React from 'react'
import styles from "./tab.module.scss"

const Tab = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={styles.tab_wrapper}>
        {children}
    </div>
  )
}

export default Tab