"use client"
import { useSession, signOut, } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { ContextProvider } from '../AuthProviders/AuthProvider';
import { UserIcon, MailIcon, Trash2Icon } from "lucide-react";

const Profile = () => {
     

    const { data: session } = useSession();
    // const{name,email,image} = session?.user || {};
    console.log("the current session", session);
    // console.log(name,email,image);
    // const {users}= useContext(ContextProvider);
    // const currentUser = users.find((user) => user?.email === session?.user?.email);
    
    const router = useRouter();

    const handleDeleteUser = async () => {
        Swal.fire({
            title: "Are you sure, You want to delete your account?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch("../api/delete-user", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ email: session?.user?.email }),
                    });

                    const data = await res.json();

                    if (res.ok) {
                        await Swal.fire({
                            title: "Deleted!",
                            text: "Your account has been deleted.",
                            icon: "success",
                        });

                        // Optional: sign out if using NextAuth
                        await signOut({ callbackUrl: "/" });

                        router.push("/");
                    } else {
                        Swal.fire("Error", data.message || "Failed to delete account.", "error");
                    }
                }
                catch (error) {
                    console.error("Delete error:", error);
                    Swal.fire("Error", "Something went wrong.", "error");
                }
            }
        });
    }

    // const handleUpdate = async (name,email,image) => {
        
    
    
    //     const { value: formValues } = await Swal.fire({
    //         title: "Edit Profile",
    //         html: `

    //         <div class="flex flex-col space-y-4">
    //             <input id="swal-name" type="text" class="swal2-input" placeholder="Task Name" value="${name || ""}">
    //             <input id="swal-email" type="email" class="swal2-input" placeholder="Task Description" value="${email || ""}">
    //             <input id="swal-image" type="url" class="swal2-input" value="${image || ""}">
                


               
    //         </div>
    //         `,
    //         focusConfirm: false,
    //         showCancelButton: true,
    //         confirmButtonText: "Update Profile",
    //         preConfirm: () => {
    //             return {
    //                 name: document.getElementById("swal-name").value,
    //                 email: document.getElementById("swal-email").value,
    //                 image: document.getElementById("swal-image").value,
                    
    //             };
    //         }
    //     });
    
    //     if (!formValues) return; 
    
    //     try {
    //         console.log(formValues);
            
    //         const result = await axios.patch(`/api/profileupdate/${email}`, formValues);
    
    //         console.log(result.data);
    //         refetch();
          
    //         Swal.fire("Success!", "Task updated successfully", "success");
            
    //     } catch (err) {
    //         console.error("Error editing task:", err);
    //         Swal.fire("Error!", "Something went wrong while updating the task.", "error");
    //     }
    // };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white p-6">
        
      
        
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
      <img className='w-32 h-32 rounded-full mx-auto' src={session?.user?.image}/>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">My Profile</h1>

        {/* Username */}
        <div className="flex items-center space-x-4 border-b pb-4 mb-4">
          <div className="p-2 bg-indigo-100 rounded-full">
            <UserIcon className="h-6 w-6 text-indigo-500" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Username</p>
            <p className="text-lg font-semibold text-gray-800">{session?.user?.name}</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-4 border-b pb-4 mb-4">
          <div className="p-2 bg-green-100 rounded-full">
            <MailIcon className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg font-semibold text-gray-800">{session?.user?.email}</p>
          </div>
        </div>

        {/* Delete Button */}
        <div className="text-center">
          <button
            onClick={handleDeleteUser}
            className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300"
          >
            <Trash2Icon className="h-5 w-5" />
            Delete Account
          </button>
        </div>
      </div>
    </div>
    );
};

export default Profile;