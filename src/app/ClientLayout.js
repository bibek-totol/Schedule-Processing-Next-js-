"use client"; // Mark this as a client component

import { usePathname } from "next/navigation";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

export default function ClientLayout({ children }) {
  const pathname = usePathname(); 

  
  const hideNavbarFooterRoutes = ["/panel"];

  
  const hideNavbarFooter = hideNavbarFooterRoutes.includes(pathname);

  return (
    <>
    
      {!hideNavbarFooter && <Navbar />}


      {children}

      
      {!hideNavbarFooter && <Footer />}
    </>
  );
}