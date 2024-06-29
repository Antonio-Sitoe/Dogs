import { NextResponse, type NextRequest } from "next/server";
// import verifyToken from '@/functions/verify-token';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;
  const authenticated = !!token;
  // const authenticated = token ? await verifyToken(token) : false;

  if (!authenticated && req.nextUrl.pathname.startsWith("/conta")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (authenticated && req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/conta", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/conta/:path*", "/login/:path*"],
};
