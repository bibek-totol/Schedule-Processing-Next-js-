"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Register() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const username = form.get("name");
    const photoURL = form.get("photo");
    const password = form.get("password");
    // console.log(email, password, photoURL, username);


   

      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ username, email, password, photoURL }),
      });

      if (res.ok) {
        Swal.fire(
          "Registered Successfully",
          "You can now login",
          "success"

        )

        router.push("/");
       
      
      }
      
      else{

        console.log(res);

        Swal.fire(
          "Error",
          "Something went wrong",
          "error"

        )

      }
    

   

    }

   

    // console.log(res);

   

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
            <h2 className="text-2xl text-white mb-5">Register</h2>

            {/* Name Input */}
            <div className="relative my-4">
              <input
                type="text"
                name="name"
                required
                // value={formData.name}
                // onChange={handleInputChange}
                className="w-full h-10 bg-transparent border-b-2 border-gray-300 text-white outline-none peer"
              />
              <label className="absolute left-0 top-1/2 -translate-y-1/2 text-white pointer-events-none transition-all duration-150 ease-in-out peer-focus:-top-4 peer-focus:text-sm peer-valid:-top-4 peer-valid:text-sm">
                Name
              </label>
            </div>

            {/* Email Input */}
            <div className="relative my-4">
              <input
                type="email" // Changed to email type for better validation
                name="email"
                required
                // value={formData.email}
                // onChange={handleInputChange}
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
                // value={formData.password}
                // onChange={handleInputChange}
                className="w-full h-10 bg-transparent border-b-2 border-gray-300 text-white outline-none peer"
              />
              <label className="absolute left-0 top-1/2 -translate-y-1/2 text-white pointer-events-none transition-all duration-150 ease-in-out peer-focus:-top-4 peer-focus:text-sm peer-valid:-top-4 peer-valid:text-sm">
                Enter your password
              </label>
            </div>

            <div className="relative my-4">
              <input
                type="url"
                name="photo"
                required
                // value={formData.photo}
                // onChange={handleInputChange}
                className="w-full h-10 bg-transparent border-b-2 border-gray-300 text-white outline-none peer"
              />
              <label className="absolute left-0 top-1/2 -translate-y-1/2 text-white pointer-events-none transition-all duration-150 ease-in-out peer-focus:-top-4 peer-focus:text-sm peer-valid:-top-4 peer-valid:text-sm">
                Enter your image url
              </label>
            </div>

            {/* Submit Button */}
            <button className="btn btn-outline btn-success mb-4">
              Register
            </button>

            {/* Login Link */}
            <p className="text-white text-sm">
              Forget Password?{" "}
              <Link href="/resetemail" className="text-teal-300 hover:text-teal-400">
                Reset
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
