import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const token = await getToken({ req });

  const path = req.nextUrl.pathname;

  const isAdminRoute = path.startsWith("/panel");
  const isEmployeeRoute = path.startsWith("/employeepanel");


 
  const role =await token?.role;
  console.log(role);


  const isLoginPage = path === "/login" || path === "/signin";

  
  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/logout", req.url));
  }


  if ((isAdminRoute || isEmployeeRoute) && !token) {
    const callbackUrl = encodeURIComponent(path);
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${callbackUrl}`, req.url)
    );
  }

  

  // Only redirect if user has token but wrong role
  if (isAdminRoute && role && role !== "admin") {
    const callbackUrl = encodeURIComponent(path);
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${callbackUrl}`, req.url)
    );
  }

  if (isEmployeeRoute && role && role !== "employee") {
    const callbackUrl = encodeURIComponent(path);
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${callbackUrl}`, req.url)
    );
  }

  return NextResponse.next();
};
