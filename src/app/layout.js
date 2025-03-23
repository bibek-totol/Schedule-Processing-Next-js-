import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import { Providers } from "./providers";
import NextAuthProvider from "@/Providers/NextAuthProvider";

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
        <NextAuthProvider>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        </NextAuthProvider> 
      </body>
    </html >
  );
}
