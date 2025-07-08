"use client"; // Mark this as a client component

import { usePathname } from "next/navigation";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import { Suspense } from "react";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  
  const hideNavbarFooterRoutes = ["/panel/home", "/panel/events", "/panel/eventmanagement", "/panel/addtasks", "/employeepanel/home", "/employeepanel/events", "/employeepanel/eventmanagement", "/employeepanel/addtasks",
  "/panel/profile", "/employeepanel/profile"];
  const hideFooterRoutes = ["/ai-assistant"];

  const hideNavbarFooter = hideNavbarFooterRoutes.includes(pathname);
  const hideFooter = hideFooterRoutes.includes(pathname);

  return (
    <>
      {(!hideNavbarFooter || hideFooter) && <Navbar />}

   <Suspense fallback={<div className="flex justify-center items-center text-3xl">Loading...</div>}>
      {children}
    </Suspense>

      {!hideNavbarFooter && !hideFooter && <Footer />}
    </>
  );
}
