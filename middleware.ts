import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from "next/server";
import { routing } from './navigation';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    // 1. Run the standard translation middleware first
    const response = intlMiddleware(request);

    // 2. Check for Admin Security AFTER translation is handled
    // We check the path to see if they are trying to access /admin
    const { pathname } = request.nextUrl;

    // Check if path contains '/admin' (e.g. /en/admin, /ar/admin)
    // AND ensure they are not already on the login page
    const isAdminPath = pathname.includes('/admin');
    const isLoginPage = pathname.includes('/login');

    if (isAdminPath && !isLoginPage) {
        const adminSession = request.cookies.get("admin_session");

        if (!adminSession) {
            // User is not logged in. Redirect them to login.
            // We assume the first part of the path is the locale (e.g. 'en', 'ar')
            const locale = pathname.split('/')[1] || 'en';
            return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
        }
    }

    return response;
}

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(ar|en|tr|it)/:path*']
};
