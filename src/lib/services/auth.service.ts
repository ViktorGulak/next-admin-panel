import prisma from "../db/prisma"
import {sign} from 'jsonwebtoken';
import { Role } from '@prisma/client';

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
    let jwt: string = "";
    const employee = await prisma.employee.findFirst({
      where: {
        login,
        password // В реальном проекте пароль должен быть хеширован!
      }
    })
    if(employee) {
      jwt = this.generateJwt(employee);
      return {employee, jwt}
    }
    else{
      return false;
    }
  }

  generateJwt(data: Omit<Employee, 'password'>) {
    return sign(
      data,
      process.env.JWT_KEY!,
      { expiresIn: "8h" }
    );
  }
}

export const authService = new AuthService()