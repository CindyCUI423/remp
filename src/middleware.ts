import {NextRequest, NextResponse} from "next/server";


export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;

    const { pathname } = request.nextUrl;

    if (token || pathname.startsWith("/login") || pathname.startsWith("/api")) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/login', request.url));

}

export const config = {
    matcher: ["/((?!_next|static|favicon.ico|api|login|icons).*)"],
}