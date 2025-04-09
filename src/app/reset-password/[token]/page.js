"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { signOut } from "next-auth/react";

export default function ResetPassword({ params }) {
  const router = useRouter();
  const { token } = params;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {

        const res = await axios.post("/api/reset-password", {
        token,
        password,
      });
      const data = res.data;
    
      console.log(data);

      setMessage(data.message);
      console.log(res.status);

      

      if (res.status == 200) {
       
            // await signOut();
           router.push("/login");
           

        
      
      }
    } catch (err) {
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-indigo-200 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Reset Your Password
        </h2>

        <input
          type="password"
          required
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

        <input
          type="password"
          required
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white font-semibold py-3 rounded-xl hover:bg-indigo-600 transition-all"
        >
          Update Password
        </button>

        {message && <p className="text-center text-sm text-red-600">{message}</p>}
      </form>
    </div>
  );
}
