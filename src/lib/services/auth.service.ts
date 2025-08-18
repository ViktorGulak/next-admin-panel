import prisma from "../db/prisma"
import { SignJWT } from 'jose'
import { Role } from '@prisma/client'

type Employee = {
  id: number;
  surname: string;
  name: string;
  patronymic: string;
  position: string;
  phone: string;
  email: string;
  login: string;
  password: string;
  role: Role;
  photo: string | null;
  branchId: number;
}
class AuthService{
  async login(login: string, password: string) {
    const employee = await prisma.employee.findFirst({
      where: {
        login,
        password // В реальном проекте пароль должен быть хеширован!
      }
    })
    if(employee) {
      let jwt: string = await this.generateJwt(employee);
      return {employee, jwt}
    }
    else{
      return false;
    }
  }

  private async generateJwt(employee: Employee) {
    const { password, ...payload } = employee; // Физически удаляем password
    const secret = new TextEncoder().encode(process.env.JWT_KEY!);
    
    return new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('8h')
      .sign(secret);
  }
}

export const authService = new AuthService()