"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";


const Navbar =  () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  let home="home";
  const pathname = usePathname();


  


  const handleSignOut = () => {
    signOut({ callbackUrl: "/" })
    Swal.fire(
      {
        icon: "success",
        title: "Success",
        text: "You have signed out successfully",
        showConfirmButton: false,

      }
    )
  };


  return (
    <nav className="fixed top-0 w-full bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/1.jpeg"
              alt="SchedulePro Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>
          <span className="ml-2 text-xl font-bold text-teal-500 hidden md:block">
            SchedulePro
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className={`text-white hover:text-blue-500 transition-colors ${pathname === "/" ? "bg-teal-500 px-2 py-2 rounded-md " : " px-2 py-2"}`}
          >
            Home
          </Link>

          {
           ( session?.user?.role === "admin") ? (
              <Link
            href={`/panel/home`}
            className={`text-white hover:text-blue-500 transition-colors ${pathname === "/panel/home" ? "bg-teal-500 px-3 py-2 rounded-md " : "px-2 py-2"}`}
          >
            Dashboard
          </Link>
            ):(
              <Link
            href={`/employeepanel/home`}
            className={`text-white hover:text-blue-500 transition-colors ${pathname === "/employeepanel/home" ? "bg-teal-500 px-3 py-2 rounded-md " : "px-2 py-2"}`}
          >
            Dashboard
          </Link>
            )
          }
          

          <Link href="/ai-assistant" className={`text-white hover:text-blue-500 transition-colors ${pathname === "/ai-assistant" ? "bg-teal-500 px-3 py-2 rounded-md " : "px-2 py-2"}`}>
          AI-Assistant
          </Link>
        

        
          

         

          


          

          {session?.user ? (
            
           <>
            

            <Link
              onClick={handleSignOut}
              className="text-white hover:text-blue-500 transition-colors px-2 py-2"
              href="#"
            >
              Logout
            </Link>
           </>
            
          ) : (
            <>
              <Link
                className={`text-white hover:text-blue-500 transition-colors ${pathname === "/signin" ? "bg-teal-500 px-3 py-2 rounded-md " : "px-2 py-2"}`}
                href="/signin"
              >
                Signup
              </Link>

              <Link
                className={`text-white hover:text-blue-500 transition-colors ${pathname === "/login" ? "bg-teal-500 px-3 py-2 rounded-md " : "px-2 py-2"}`}
                href="/login"
              >
                Login
              </Link>
            </>
          )}

          
        </div>

        <div className="flex items-center gap-3"> 
        <div className="">
          <img
            className="rounded-full w-10 h-10"
            src={session?.user?.image} />
        </div>

        <div>
          <h4 className="font-semibold text-white">{session?.user?.name}</h4>
        </div>

        </div>

       

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 focus:outline-none "
          >
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

       
      </div>

     
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 shadow-md">
          <ul className="menu menu-sm dropdown-content bg-blue-900 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li>
              <Link className={`text-white hover:text-blue-500 transition-colors ${pathname === "/" ? "bg-teal-500 px-3 py-2 rounded-md " : "px-2 py-2"}`} href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>


            {
              !session?.user ? (
                <>
                <li>
              <Link className={`text-white hover:text-blue-500 transition-colors ${pathname === "/signin" ? "bg-teal-500 px-3 py-2 rounded-md " : "px-2 py-2"}`} href="/signin" onClick={() => setIsOpen(false)}>
                Signup
              </Link>
            </li>
            <li>
              <Link
              className={`text-white hover:text-blue-500 transition-colors ${pathname === "/login" ? "bg-teal-500 px-3 py-2 rounded-md " : "px-2 py-2"}`} href="/login" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            </li>
                </>
              ):(
                <>
                  <li>
                  <Link
              onClick={handleSignOut}
              className="text-white hover:text-blue-500 transition-colors px-2 py-2"
              href="#"
            >
              Logout
            </Link>
                  </li>

                  
                </>
              )
            }
            
           
            <li>
              <Link
                href="/panel"
                className={`text-white hover:text-blue-500 transition-colors ${pathname === "/panel" ? "bg-teal-500 px-3 py-2 rounded-md " : "px-2 py-2"}`}
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                href="/ai-assistant"
                className={`text-white hover:text-blue-500 transition-colors ${pathname === "/ai-assistant" ? "bg-teal-500 px-3 py-2 rounded-md " : "px-2 py-2"}`}
              >
                AI-Assistant
              </Link>
            </li>


            
          </ul>


          
        </div>

        
      )}


     
    </nav>
  );
};

export default Navbar;
