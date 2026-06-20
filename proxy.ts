// Save as: proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 🔥 Renamed from middleware to proxy for Next.js 16 compliance
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lowerPath = pathname.toLowerCase();

  // 1. 🏪 CUSTOMER HUB PROTECTION
  if (lowerPath.startsWith('/home')) {
    const userCookie = request.cookies.get('pharmhub_user_session');
    if (!userCookie) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // 2. 🛡️ ADMIN HUB PROTECTION
  if (lowerPath.startsWith('/admin/dashboard')) {
    const adminCookie = request.cookies.get('pharmhub_admin_session');
    if (!adminCookie) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

// 3. Configure exactly which routes this proxy intercepts
export const config = {
  matcher: [
    '/home/:path*', 
    '/HOME/:path*', 
    '/admin/dashboard/:path*', 
    '/ADMIN/DASHBOARD/:path*'
  ],
};