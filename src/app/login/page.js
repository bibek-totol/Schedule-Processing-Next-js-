import React from 'react';
import Image from 'next/image';

export default function Login() {
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
          <form className="flex flex-col">
            <h2 className="text-2xl text-white mb-5">Login</h2>

            {/* Email Input */}
            <div className="relative my-4">
              <input
                type="text"
                name="email"
                required
                className="w-full h-10 bg-transparent border-b-2 border-gray-300 text-white outline-none"
              />
              <label className="absolute left-0 top-1/2 -translate-y-1/2 text-white pointer-events-none transition-all duration-150 ease-in-out">
                Enter your email
              </label>
            </div>

            {/* Password Input */}
            <div className="relative my-4">
              <input
                type="password"
                name="password"
                required
                className="w-full h-10 bg-transparent border-b-2 border-gray-300 text-white outline-none"
              />
              <label className="absolute left-0 top-1/2 -translate-y-1/2 text-white pointer-events-none transition-all duration-150 ease-in-out">
                Enter your password
              </label>
            </div>

            {/* Submit Button */}
            <button className="btn btn-outline btn-success">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}