
import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'ar', 'tr', 'it'],

    // Used when no locale matches
    defaultLocale: 'en'
});

export default function middleware(request: NextRequest) {
    const adminSession = request.cookies.get("admin_session");
    const isLoginPage = request.nextUrl.pathname.includes("/login"); // Check includes because of locale prefix

    // Check if it's an admin route
    // Note: next-intl might rewrite the URL, so we check the pathname
    // The pathname usually includes /en/admin or /ar/admin etc.
    const isInfoPath = request.nextUrl.pathname.includes("/admin");

    if (isInfoPath) {
        if (!adminSession) {
            // We need to preserve the locale if possible, or default to login
            // Simple approach: redirect to /login (which will be handled by intlMiddleware to /en/login etc)
            // Ideally we find the locale from the path
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    if (isLoginPage && adminSession) {
        return NextResponse.redirect(new URL("/admin", request.url));
    }

    return intlMiddleware(request);
}

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(ar|en|tr|it)/:path*']
};
