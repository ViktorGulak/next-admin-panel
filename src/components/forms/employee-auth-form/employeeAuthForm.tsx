'use client'
import Form from 'next/form'
import React from "react";
import styles from "./employeeAuthForm.module.scss";
import { useAuthorizedEmployeeStore } from "@/lib/store/authorized-employee-store";
import { useRouter } from 'next/navigation';

const EmployeeAuthForm = () => {

  const { setEmployeeId } = useAuthorizedEmployeeStore();
  const router = useRouter();

  const authSubmit = async (formData: FormData) => {
    const login = formData.get('login')?.toString();
    const password = formData.get('password')?.toString();
    
    if (!login || !password) {
      alert("Заполните все поля для авторизации");
      return;
    }
    try {
      const response = await fetch('/api/adminpanel', {
        method: 'POST',
        body: JSON.stringify({ login, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const {id} = await response.json();
        setEmployeeId(id); // Сохраняем id авторизованного в Zustand
        router.push(`/adminpanel/profile/${id}`);
      } else {
        console.error('Ошибка авторизации');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <Form action={authSubmit} className={styles.auth_form}>
        <div className="form-group">
            <label className="form-label" htmlFor="input-login">Логин</label>
            <input name="login" className="form-input" type="text"
              id="input-login" placeholder="Ваш логин"/>
            <label className="form-label" htmlFor="input-password">Пароль</label>
            <input name="password" className="form-input" type="password" autoComplete='on'
              id="input-password" placeholder="Ваш пароль"/>
            <button className="btn btn-primary" type="submit">Войти</button>   
        </div>
    </Form>
);
}
export default EmployeeAuthForm
