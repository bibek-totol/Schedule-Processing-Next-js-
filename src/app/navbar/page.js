"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Simulated auth state (replace with your actual auth implementation)
// const useAuth = () => {
//   const [user, setUser] = useState(null);
//   const signIn = () => setUser({ id: 1, name: "User" });
//   const signOut = () => setUser(null);

//   return { user, signIn, signOut };
// };

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
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
          <Link href="/" className="text-gray-900 hover:text-teal-500 transition-colors">
            Home
          </Link>
          <Link href="/panel" className="text-gray-900 hover:text-teal-500 transition-colors">
            Dashboard
          </Link>

          <Link className="text-gray-900 hover:text-teal-500 transition-colors" href="/crud">CRUD</Link>

          {
            session?.user ?

            <Link  onClick={() => signOut({ callbackUrl: '/' })}
            className="text-gray-900 hover:text-teal-500 transition-colors" href="#">Logout</Link>
              :

              <>
                <Link className="text-gray-900 hover:text-teal-500 transition-colors" href="/signin">Signup</Link>

                <Link className="text-gray-900 hover:text-teal-500 transition-colors" href="/login">Login</Link></>
          }

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

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          {/* <Link
            href={session?.user?.image}
            // onClick={}
            className="bg-teal-500 text-white hover:bg-teal-600 font-semibold py-2 px-4 rounded-lg transition"
          >
            {session?.user? "Logout" : "Get Started"}
          </Link> */}
        </div>
      </div>





      {/* Navbar Center for Desktop */}
      {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/signin">Signup</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/crud">CRUD</Link>
          </li>
        </ul>
      </div> */}

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/signin" onClick={() => setIsOpen(false)}>Signup</Link>
            </li>
            <li>
              <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
            </li>
            <li>
              <Link href="/crud" onClick={() => setIsOpen(false)}>CRUD</Link>
            </li>
            <li>
            <Link href="/panel" className="text-gray-900 hover:text-teal-500 transition-colors">
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
