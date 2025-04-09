"use client";
import axios from "axios";
import { useState } from "react";
export default function ResetEmail() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
    
        const res = await axios.post("/api/request-reset", { email });
        setMessage(res.data.message);
        console.log(res.data.message);
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Enter Your Email
        </h2>

        <input
          type="email"
          required
          placeholder="you@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />

        <button
          type="submit"
          className="w-full bg-purple-500 text-white font-semibold py-3 rounded-xl hover:bg-purple-600 transition-all"
        >
          Submit
        </button>
        {message && <p className="text-center text-sm text-green-600">{message}</p>}
      
      </form>
    </div>
  )
}
