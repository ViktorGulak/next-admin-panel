import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
  
  const token = request.cookies.get('token')?.value;
  // Если нет токена - редирект на логин
  if (!token) {
    console.log("Токен не обнаружен")
    return NextResponse.redirect(new URL('/adminpanel', request.url));
  }
  // Проверяем валидность JWT
  try {
    const secret = new TextEncoder().encode(process.env.JWT_KEY!);
    const { payload } = await jwtVerify(token, secret, { algorithms: ['HS256'] });
    return NextResponse.next();
  } 
  catch (err) {
    // Если токен невалидный - чистим куку и редирект
    console.log("Невалидный токен", err)
    const response = NextResponse.redirect(new URL('/adminpanel', request.url));
    response.cookies.delete('token');
    return response;
  }
}

// Конфиг для матчинга путей
export const config = {
  matcher: [
    '/adminpanel/:path+',
  ],
};