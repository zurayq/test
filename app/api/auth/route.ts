// File: app/api/auth/login/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { password } = await req.json();
        // Fallback to "secret" if env is missing, but prefer the env var
        const adminPassword = process.env.ADMIN_PASSWORD || "secret";

        if (password === adminPassword) {
            const response = NextResponse.json({ success: true });
            // Set a secure HTTP-only cookie
            response.cookies.set("admin_session", "true", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                path: "/",
                sameSite: "strict",
                maxAge: 60 * 60 * 24 * 7, // 1 week
            });
            return response;
        } else {
            return NextResponse.json({ error: "Invalid password" }, { status: 401 });
        }
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function DELETE() {
    const response = NextResponse.json({ success: true });
    response.cookies.delete("admin_session");
    return response;
}
