
"use client";
import { useEffect } from "react";
import { signOut } from "next-auth/react";
import Swal from "sweetalert2";


export default function LogoutPage() {
  useEffect(() => {
   signOut({ callbackUrl: "/" }); 
    Swal.fire({
        
      icon: "success",
      title: "Success",
      text: "You have signed out successfully",
      showConfirmButton: false,
        
      
    })
  }, []);

  return(
    <>
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Signing out...</h2>
        <p className="text-gray-600">
          Please wait while you are being signed out.
        </p>
      </div>
    </div>
  </>
  ) 
}
