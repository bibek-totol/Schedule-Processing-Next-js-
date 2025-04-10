import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const token = await getToken({ req });

  const isAdminUser = token?.role === "admin";
  const isEmployeeUser = token?.role === "employee";
  console.log("User role from token:", token?.role);


  const path = req.nextUrl.pathname;

   const isAdminRoute = path.startsWith("/panel"); 
  const isEmployeeRoute = path.startsWith("/employeepanel"); 

  
  // if (isAdminRoute && !isAdminUser) {
  //   const callbackUrl = encodeURIComponent(path);
  //   return NextResponse.redirect(
  //     new URL(`/login?callbackUrl=${callbackUrl}`, req.url)
  //   );
  // }

  
  if (isEmployeeRoute && !isEmployeeUser) {
    const callbackUrl = encodeURIComponent(path);
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${callbackUrl}`, req.url)
    );
  }

  return NextResponse.next();
};
