import prisma from "../db/prisma"
class AuthService{
    async login(login: string, password: string) {
    return await prisma.employee.findFirst({
      where: {
        login,
        password // В реальном проекте пароль должен быть хеширован!
      }
    })
  }
}

export const authService = new AuthService()