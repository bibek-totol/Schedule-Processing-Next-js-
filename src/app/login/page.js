"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import GoogleLogin from './socialLogin/GoogleLogin';

export default function Login() {
  
  const router = useRouter() ; 

  const handleSubmit = async e => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);

    const res = await signIn("credentials", { email, password, redirect : false });
    // console.log(res);

    if (res.ok) {

      router.push("/");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully Logged In",
        showConfirmButton: false,
        timer: 1500
      });

    }

    else {

      console.log("Login failed", res.error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "UnKnown User",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  return (
    <div className="flex-1 relative min-h-[calc(100vh-4rem)]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg12.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Form Container */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-[400px] rounded-lg p-8 text-center border border-white/50 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <h2 className="text-2xl text-white mb-5">Login</h2>

            {/* Email Input */}
            <div className="relative my-4">
              <input
                type="email" // Changed to email type
                name="email"
                required
                className="w-full h-10 bg-transparent border-b-2 border-gray-300 text-white outline-none peer"
              />
              <label className="absolute left-0 top-1/2 -translate-y-1/2 text-white pointer-events-none transition-all duration-150 ease-in-out peer-focus:-top-4 peer-focus:text-sm peer-valid:-top-4 peer-valid:text-sm">
                Enter your email
              </label>
            </div>

            {/* Password Input */}
            <div className="relative my-4">
              <input
                type="password"
                name="password"
                required
                className="w-full h-10 bg-transparent border-b-2 border-gray-300 text-white outline-none peer"
              />
              <label className="absolute left-0 top-1/2 -translate-y-1/2 text-white pointer-events-none transition-all duration-150 ease-in-out peer-focus:-top-4 peer-focus:text-sm peer-valid:-top-4 peer-valid:text-sm">
                Enter your password
              </label>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className="btn btn-outline btn-success mb-4">

              Login
            </button>

            {/* Register Link */}
            <p className="text-white text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/signin" className="text-teal-300 hover:text-teal-400">
                Register
              </Link>
            </p>
          </form>
          <GoogleLogin></GoogleLogin>
        </div>
      </div>
    </div>
  );
}