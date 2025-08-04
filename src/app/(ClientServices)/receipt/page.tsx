
import React from "react";
import styles from "./page.module.scss";
const Receipt = () => {
  return (
    <div className={styles.receipt_form_wrapper}>
        <h3 className={styles.receipt_title}>Оплата онлайн физических лиц ООО "Оренбург Водоканал"</h3> {/* Определение Физическое или юридическое это лицо и какой водоканал берутся из бд*/}
        <form>
            <div className="columns">
                <div className="column col-6 ">
                    <span className={styles.client_record}>Здравствуйте Имя Отчество из бд</span>
                    <span className={styles.client_record}>Лицевой счёт: счёт</span>
                    <span className={styles.client_record}>Номер телефона: телефон</span>
                    <span className={styles.checkbox_wrapper}>
                        <div className="form-group">
                            <label className={`form-checkbox ${styles.custom_form_label}`}>
                                <input type="checkbox"/>
                                <i className={`form-icon ${styles.custom_form_icon}`}></i> Получить квитанцию на email
                            </label>
                        </div>
                        <div className="form-group">
                            <label className={`form-checkbox ${styles.custom_form_label}`}>
                                <input type="checkbox"/>
                                <i className={`form-icon ${styles.custom_form_icon}`}></i> Получить квитанцию по смс
                            </label>
                        </div>
                    </span>
                </div>
                <div className={`column col-6 ${styles.service_list_wrapper}`}>
                    <span> Задолженность на: дата из бд</span>
                    <ul className="service-list">
                        <li className="service-item">Услуга холодная вода <span>1049.32</span></li>
                        <li className="service-item">Услуга водоотведения <span>1196.98</span></li>
                        <li className="service-item">Услуга холодная вода <span>1049.32</span></li>
                        <li className="service-item">Услуга водоотведения <span>1196.98</span></li>
                        <li className="service-item">Услуга холодная вода <span>1049.32</span></li>
                        <li className="service-item">Услуга водоотведения <span>1196.98</span></li>
                    </ul>
                    <span className="total">Итого: сумма цены всех услуг руб</span>
                </div>
            </div>
            <div className={`divider ${styles.receipt_form_divider}`}></div>
            <div className={styles.receipt_form_footer}>
                <span>- Информация по состоянию расчёта обновляется с течением нескольких дней</span>
                <button className="btn btn-primary">Оплатить и передать показания</button>
            </div>
            <span className={styles.receipt_form_warning}>Отправляя заявку вы соглашаетесь на обработку своих персональных данных</span>
        </form>
    </div>
);
}
export default Receipt
