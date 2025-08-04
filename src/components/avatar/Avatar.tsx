import React from 'react'
import styles from "./avatar.module.scss"
import profileImg from "@/assets/ProfileST.png";
import Link from 'next/link'
import Image from 'next/image'

const Avatar = () => {
    
  return (
    <div className={`popover popover-bottom ${styles.avatar_wrapper}`}>
        <figure className="avatar avatar-lg">
          <Image src={profileImg} alt="Профиль" />
        </figure>  
        
    </div>
  )
}

export default Avatar
