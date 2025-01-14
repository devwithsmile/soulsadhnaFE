import { NextResponse } from "next/server";
import { verifyAuth } from "@/utils/auth";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Public paths that don't require authentication
  const publicPaths = [
    "/",
    "/login",
    "/register",
    "/about",
    "/classes",
    "/pricing",
  ];
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // Get the token from the cookies
  const token = request.cookies.get("token")?.value;

  // If there's no token and we're not on a public path, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // Verify the token and get user data
    const verifiedToken = await verifyAuth(token);

    // Check for admin routes
    if (pathname.startsWith("/admin") && verifiedToken.role !== "admin") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    // If token is invalid, clear it and redirect to login
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("token");
    return response;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
