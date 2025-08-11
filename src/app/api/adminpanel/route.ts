import { NextResponse } from 'next/server';
import { authService } from '@/lib/services/auth.service';

export async function POST(request: Request) {
  const { login, password } = await request.json();
  
  const employee = await authService.login(login, password)

  if (!employee) {
    return NextResponse.json(
      { error: 'Неверные данные' },
      { status: 401 }
    );
  }

  // Берём из пришедшего объекта только id
  const employeeId: Pick<typeof employee, 'id'> = { id: employee.id };
  return NextResponse.json(employeeId);
}