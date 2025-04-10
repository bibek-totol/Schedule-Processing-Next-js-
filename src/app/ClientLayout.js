"use client"; // Mark this as a client component

import { usePathname } from "next/navigation";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  
  const hideNavbarFooterRoutes = ["/panel/home", "/panel/events", "/panel/eventmanagement", "/panel/addtasks", "/employeepanel/home", "/employeepanel/events", "/employeepanel/eventmanagement", "/employeepanel/addtasks"];
  const hideFooterRoutes = ["/ai-assistant"];

  const hideNavbarFooter = hideNavbarFooterRoutes.includes(pathname);
  const hideFooter = hideFooterRoutes.includes(pathname);

  return (
    <>
      {(!hideNavbarFooter || hideFooter) && <Navbar />}

      {children}

      {!hideNavbarFooter && !hideFooter && <Footer />}
    </>
  );
}
