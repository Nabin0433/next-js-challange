import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";


export async function middleware(req, res, next) {
  const { pathname } = req.nextUrl;
  if (pathname === "/p-15/home") {
    const token = await getToken({ req, secret: process.env.JWT_SECRET });
    if (pathname.includes("/api/auth" || token)) {
      return NextResponse.next();
    }
    if (!token && pathname !== "/p-15/login") {
      return NextResponse.redirect("/p-15/login");
    }
  }
  return NextResponse.next();
}


