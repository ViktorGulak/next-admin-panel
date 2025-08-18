"use server"

import { redirect } from "next/navigation"
import { authService } from "@/lib/services/auth.service"

async function loginEmployee(formData: FormData) {
    "use server"

    const login = formData.get("login")?.toString()
    const password = formData.get("password")?.toString()

    if (!login || !password) return

    const authEmployee = await authService.login(login, password)

    if (authEmployee) {
        // Успешная авторизация
        redirect(`/adminpanel/profile/${authEmployee.employee.id}`)
    } else {
        // Ошибка авторизации
        console.log("Ошибка авторизации")
        console.log(authEmployee)
    }
}

export default loginEmployee