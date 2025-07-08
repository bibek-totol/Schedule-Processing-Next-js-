import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ClientLayout from "./ClientLayout"; 
import NextAuthProvider from "@/Providers/NextAuthProvider";
import { Prov } from "./prov";
import AuthProvider from "./AuthProviders/AuthProvider";



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
      
         
          <ClientLayout>{children}</ClientLayout>
          
         
         
          </NextAuthProvider>
          </AuthProvider>
          </Prov>
       
      
      
             

       

      </body>
    </html>

  );
}