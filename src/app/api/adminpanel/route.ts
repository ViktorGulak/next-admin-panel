import { NextResponse } from 'next/server';
import { authService } from '@/lib/services/auth.service';

export async function POST(request: Request) {
  const { login, password } = await request.json();
  const authEmployee = await authService.login(login, password)
  if (!authEmployee) {
    return NextResponse.json(
      { error: 'Неверные данные' },
      { status: 401 }
    );
  }
  // Берём из пришедшего объекта только id
  const employeeId: Pick<typeof authEmployee.employee, 'id'> = { id: authEmployee.employee.id };
  const res = NextResponse.json(employeeId);
  res.cookies.set({
    name: 'token',
    value: authEmployee.jwt,
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 8,
  })
  return res
}