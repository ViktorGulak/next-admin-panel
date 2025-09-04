import React, {useState} from 'react'
import styles from "./tabContent.module.scss"

const TabContent = ({children}: {children: React.ReactNode}) => {
    
  return (
    <div className="tab_content">
      {children}
    </div>
    
  )
}

export default TabContent