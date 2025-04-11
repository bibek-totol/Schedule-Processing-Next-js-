import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ClientLayout from "./ClientLayout"; // Import the client component
import NextAuthProvider from "@/Providers/NextAuthProvider";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import { Prov } from "./prov";
import AuthProvider from "./AuthProviders/AuthProvider";
// import { Cakra } from "./cakra";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Schedule Management",
  description: "Schedule Processing Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
          {/* Wrap children with ClientLayout */}

          

          <Prov>
          <AuthProvider> 
        <NextAuthProvider>
      
        {/* <Cakra> */}
    
          {/* <Navbar /> */}
         
          <ClientLayout>{children}</ClientLayout>
          
          {/* <Footer /> */}
          {/* </Cakra> */}
      
         
          </NextAuthProvider>
          </AuthProvider>
          </Prov>
       
      
      
             

       

      </body>
    </html>

  );
}