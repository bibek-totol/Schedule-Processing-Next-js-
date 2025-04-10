"use client"
import { useSession, signOut, } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const page = () => {
    const userPassword = useState(123456) ; 

    const { data: session , update} = useSession();
    console.log("the current session", session);
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

    const handleUpdate = async e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const updatedUsername = form.get("name") || session.user.name;
        const updatedPhotoURL = form.get("photo") || session.user.image;
        const userEmail = session.user.email

        // console.log(updatedUsername, updatedPhotoURL, userEmail );

        const userInfo = {updatedUsername, updatedPhotoURL , userEmail}
        console.log(userInfo);
        
        try {
            const res = await fetch("../api/update-user", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo),
            });

            console.log(res);

            await update() ; 
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <main className="mt-12 w-11/12 md:w-8/12 mx-auto">
            <div className="lg:my-20 md:w-10/12 lg:w-8/12 mx-auto border-2 border-teal-500/70 rounded-t-3xl">
                <div className="bg-gradient-to-r from-teal-500 to-blue-300 py-4 rounded-t-3xl">
                    <div className="container mx-auto border-2 border-teal-300 p-[2px] w-40 lg:w-56 rounded-full">
                        <img className="w-40 h-40 md:w-56 md:h-56 rounded-[50%]"
                            src={session?.user?.image ? session?.user?.image : "https://i.ibb.co.com/3z773GB/avatar.png"} alt="" />
                    </div>
                </div>
                <div className='bg-gradient-to-br from-gray-200 to-teal-200'>
                    <div className="mb-2 space-y-2">
                        <div className="ml-2">
                            <h3 className="text-lg md:text-xl"> <span className="font-medium md:font-semibold text-teal-500"> User Name
                                {/* : </span> {user.displayName ? user.displayName : user.email.split("@")[0]}</h3> */}
                                : </span> {session?.user?.name}</h3>
                        </div>
                        <div className="ml-2">
                            <h3 className="text-lg md:text-xl"> <span className="font-medium md:font-semibold text-teal-500"> email
                                : </span> {session?.user?.email} </h3>
                        </div>
                        <div className="ml-2 form-control mt-6 mb-2">
                            <button onClick={handleDeleteUser}
                                className="btn rounded-md bg-gradient-to-r from-red-800 to-red-400 hover:bg-red-900 text-white">Delete Profile</button>
                        </div>
                        <hr className="border border-teal-500" />
                    </div>
                    <form onSubmit={handleUpdate}
                        className="card-body">
                        <div className="form-control flex flex-col">
                            <label className="label ml-2 mb-1">
                                <span className="label-text">User Name </span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered ml-2" />
                        </div>
                        <div className="form-control flex flex-col">
                            <label className="label ml-2 mb-1">
                                <span className="label-text">Photo URL </span>
                            </label>
                            <input type="text" placeholder="photo URL" name="photo" className="input input-bordered ml-2" />
                        </div>
                        <div className='flex gap-4'>
                            <div className="form-control mt-6">
                                <button className="btn rounded-md bg-gradient-to-r from-teal-400 to-blue-200 border-teal-300">
                                    <span className="bg-gradient-to-r from-gray-800 to-stone-700 bg-clip-text text-transparent font-semibold">
                                        Update
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default page;