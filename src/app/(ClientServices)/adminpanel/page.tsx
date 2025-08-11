import Form from 'next/form'
import React from "react";
import styles from "./page.module.scss";
import EmployeeAuthForm from "@/components/forms/employee-auth-form/employeeAuthForm"
const AdminPanelAuth = () => {
  return (
    <div className={styles.auth_form_wrapper}>
        <h3 className={styles.auth_form_title}>Авторизация в панели администратора</h3> 
        <EmployeeAuthForm/>
    </div>
);
}
export default AdminPanelAuth
