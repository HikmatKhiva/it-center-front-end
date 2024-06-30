import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the user's authentication status from a cookie or session
  const isAuthenticated = request.cookies.get("authToken") !== undefined;
  // Extract the pathname from the request URL
  const pathname  = new URL(request.url).pathname;
  console.log(pathname);
  // Check if the user is trying to access the admin page
  const isAdminPage = pathname?.startsWith("/admin");
  // If the user is not authenticated and trying to access the admin page, redirect them to the login page
  if (isAdminPage && isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // Otherwise, allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};