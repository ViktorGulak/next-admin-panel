'use client'
import React from 'react'
import styles from "./avatar.module.scss"
import profileImg from "@/assets/ProfileST.png";
import logout from "@/lib/actions/logout.action"
import Image from 'next/image'
import { useAuthorizedEmployeeStore } from "@/lib/store/authorized-employee-store";
import { useRouter } from 'next/navigation';

const Avatar = () => {
  const { clearEmployeeId } = useAuthorizedEmployeeStore();
  const router = useRouter();

  const logoutHandler = async () => {
    await logout();
    clearEmployeeId();
    router.push("/adminpanel");
  }
  
  return (
    <div className={`popover popover-bottom ${styles.avatar_wrapper}`}>
      <figure className="avatar avatar-lg">
        <Image src={profileImg} alt="Профиль" />
      </figure>
      <div className="popover-container">
        <div className={`card ${styles.popover_card}`}>
          <div className="card-body">
            <p>IT отдел: 70-53-90</p>
          </div>
          <div className="card-body">
            <button className="btn btn-link"
              onClick={logoutHandler}
            >
              Выйти
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Avatar
