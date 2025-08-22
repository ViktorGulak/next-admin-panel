import React from 'react'
import styles from "./userCard.module.scss"
import Image from "next/image"
import userImg from '../../assets/ProfileST.png'
const UserCard = () => {

  return (
    <div className={`card ${styles.user_card}`}>
      <Image src={userImg} alt="Пользователь" />
      <div className="card-header">
        <div className= {`card-title h5 ${styles.user_card_title}`}>Фамилия Имя Отчество</div>
      </div>
      <div className="card-body">
        <ul>
          <li><h6>Телефон:</h6> <span>12-12-12</span></li>
          <li><h6>Почта:</h6> <span>mailing@mail.ru</span></li>
          <li><h6>Должность:</h6> <span>аналитик</span></li>
        </ul>
      </div>
    </div>
  );
}
export default UserCard;