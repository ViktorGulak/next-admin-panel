
import React from "react";
import styles from "./page.module.scss";
const PaymentAuth = () => {
  return (
    <div className={styles.payment_auth_form}>
            <form>
                <div className={styles.form_title}>
                    <span>Оплата услуг</span>
                </div>
                <div className="form-group">
                    <div className="select-group">
                    <label className="form-label" htmlFor="select-vodokanal">Водоканал</label>
                    <select className="form-select" id="select-vodokanal">
                        <option>Оренбург водоканал</option>
                        <option>Орск водоканал</option>
                        <option>Кувандык водоканал</option>
                        <option>Гай водоканал</option>
                        <option>Новотроицк водоканал</option>
                    </select>
                    </div>
                    <div className="columns" style={{marginTop: "15px"}}>
                        <div className="column col-6">
                            <div className="form-group">
                                <label className="form-label" htmlFor="personal">Лицевой счёт</label>
                                <input className="form-input" type="text" id="personal" placeholder="Введите лицевой счёт"/>
                            </div>
                        </div>
                        <div className="column col-6">
                            <div className="form-group">
                                <label className="form-label" htmlFor="phone">Номер телефона</label>
                                <input className="form-input" type="text" id="phone" placeholder="Ваш номер телефона"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.warning_devider + " divider"} ></div>
                <div className={styles.warning_record}>
                    <span>Отправляя заявку вы соглашаетесь на обработку своих персональных данных</span>
                </div>
                <button className="btn btn-lg">Получить информацию о задолженности</button>
            </form>
        </div>
  );
}
export default PaymentAuth
