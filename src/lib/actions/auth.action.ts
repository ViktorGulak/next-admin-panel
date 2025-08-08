"use server"

import { redirect } from "next/navigation"
import { authService } from "@/lib/services/auth.service"

async function loginEmployee(formData: FormData) {
    "use server"

    const login = formData.get("login")?.toString()
    const password = formData.get("password")?.toString()

    if (!login || !password) return

    const employee = await authService.login(login, password)

    if (employee) {
        // Успешная авторизация
        redirect(`/adminpanel/profile/${employee.id}`) 
    } else {
        // Ошибка авторизации
        console.log("Ошибка авторизации")
        console.log(employee)
    }
}

export default loginEmployee