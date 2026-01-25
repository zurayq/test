import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from "next/server";
import { routing } from './navigation';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    // 1. Run translation FIRST to load English text
    const response = intlMiddleware(request);

    // 2. Security Check (Admin Panel)
    const { pathname } = request.nextUrl;
    const isAdminPath = pathname.includes('/admin');
    const isLoginPage = pathname.includes('/login');

    if (isAdminPath && !isLoginPage) {
        const adminSession = request.cookies.get("admin_session");
        if (!adminSession) {
            const locale = pathname.match(/^\/([a-z]{2})/)?.[1] || 'en';
            return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
        }
    }

    return response;
}

export const config = {
    // FIX: This matcher catches everything, preventing "Hero.title" bugs
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
