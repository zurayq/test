import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const adminSession = request.cookies.get("admin_session");
    const isLoginPage = request.nextUrl.pathname === "/login";

    // Protect /admin routes
    if (request.nextUrl.pathname.startsWith("/admin")) {
        if (!adminSession) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    // Redirect /login to /admin if already logged in
    if (isLoginPage && adminSession) {
        return NextResponse.redirect(new URL("/admin", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/login"],
};
