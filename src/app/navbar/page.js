"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const Navbar =  () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();


  console.log(session);

  console.log(session?.user);
  console.log(session?.user?.image);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
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
            className="text-gray-900 hover:text-teal-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/panel"
            className="text-gray-900 hover:text-teal-500 transition-colors"
          >
            Dashboard
          </Link>

          <Link href="/ai-assistant" className="text-gray-900 hover:text-teal-500 transition-colors">
          AI-Assistant
          </Link>
        

        
          <Link
            className="text-gray-900 hover:text-teal-500 transition-colors"
            href="/crud"
          >
            CRUD
          </Link>


          <Link
            className="text-gray-900 hover:text-teal-500 transition-colors"
            href="/calendar-ev"
          >
            Events
          </Link>

          


          

          {session?.user ? (
            <Link
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-gray-900 hover:text-teal-500 transition-colors"
              href="#"
            >
              Logout
            </Link>
            
          ) : (
            <>
              <Link
                className="text-gray-900 hover:text-teal-500 transition-colors"
                href="/signin"
              >
                Signup
              </Link>

              <Link
                className="text-gray-900 hover:text-teal-500 transition-colors"
                href="/login"
              >
                Login
              </Link>
            </>
          )}

          
        </div>

        <div className="flex items-end"> 
        <div className="">
          <img
            className="rounded-full w-10 h-10"
            src={session?.user?.image} />
        </div>

        <div>
          <h4 className="font-semibold">{session?.user?.name}</h4>
        </div>

        </div>

       

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 focus:outline-none "
          >
            <svg
              className="h-6 w-6"
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
        <div className="md:hidden bg-white shadow-md">
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/signin" onClick={() => setIsOpen(false)}>
                Signup
              </Link>
            </li>
            <li>
              <Link href="/login" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            </li>
            <li>
              <Link href="/crud" onClick={() => setIsOpen(false)}>
                CRUD
              </Link>
            </li>
            <li>
              <Link
                href="/panel"
                className="text-gray-900 hover:text-teal-500 transition-colors"
              >
                Dashboard
              </Link>
            </li>
          </ul>


          
        </div>

        
      )}


     
    </nav>
  );
};

export default Navbar;
