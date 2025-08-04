import React from 'react'
import styles from "./header.module.scss"

const Header = ({children}: { children: React.ReactNode }) => {

  return (
    <header className={`navbar ${styles.header}`}>
      {children}   
      {/* header из spectra.css. Потомки вставляются соответствующие*/}       
    </header>
 )
}
export default Header;
