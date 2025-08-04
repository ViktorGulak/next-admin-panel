import Form from 'next/form'
import React from "react";
import styles from "./page.module.scss";
const AdminPanelAuth = () => {
  return (
    <div className={styles.auth_form_wrapper}>
        <h3 className={styles.auth_form_title}>Авторизация в панели администратора</h3> 
        <Form action="">
            <div className="form-group">
                <label className="form-label" htmlFor="input-login">Логин</label>
                <input className="form-input" type="text"
                     id="input-login" placeholder="Ваш логин"/>
                <label className="form-label" htmlFor="input-password">Пароль</label>
                <input className="form-input" type="password" autoComplete='on'
                    id="input-password" placeholder="Ваш пароль"/>
                <button className="btn btn-primary" type="submit">Войти</button>   
            </div>
        </Form>
    </div>
);
}
export default AdminPanelAuth
