"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Simulated auth state (replace with your actual auth implementation)
const useAuth = () => {
  // This is just for demo - in reality, this would come from your auth provider
  const [user, setUser] = useState(null); // null = not signed in, object = signed in
  
  const signIn = () => setUser({ id: 1, name: "User" });
  const signOut = () => setUser(null);
  
  return { user, signIn, signOut };
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth(); // Get auth state

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
            href="/dashboard"
            className="text-gray-900 hover:text-teal-500 transition-colors"
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 focus:outline-none"
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
          <Link
            href={user?.id ? "/signout" : "/signin"} // Optional chaining with user?.id
            onClick={user?.id ? signOut : null} // Trigger signOut if user exists
            className="bg-teal-500 text-white hover:bg-teal-600 font-semibold py-2 px-4 rounded-lg transition"
          >
            {user?.id ? "Logout" : "Get Started"}
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-900 hover:text-teal-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href={user?.id ? "/signout" : "/signin"} // Optional chaining here too
              onClick={() => {
                if (user?.id) signOut();
                setIsOpen(false);
              }}
              className="bg-teal-500 text-white hover:bg-teal-600 font-semibold py-2 px-4 rounded-lg text-center transition"
            >
              {user?.id ? "Logout" : "Get Started"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
