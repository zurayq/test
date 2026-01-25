import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from "next/server";
import { routing } from './navigation';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    // 1. Run translation FIRST
    const response = intlMiddleware(request);

    // 2. Admin Security Check
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
    // THIS IS THE FIX: Catches all paths so translation always loads
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
