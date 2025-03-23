import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ClientLayout from "./ClientLayout"; // Import the client component
import NextAuthProvider from "@/Providers/NextAuthProvider";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
          {/* Wrap children with ClientLayout */}
      
        <NextAuthProvider>
        <Providers>
          <Navbar />
          <ClientLayout>{children}</ClientLayout>
          <Footer />
        </Providers>
        </NextAuthProvider> 

      </body>
    </html >

  );
}