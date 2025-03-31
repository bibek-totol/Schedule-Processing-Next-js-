import axios from 'axios';
import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const GoogleLogin = () => {

    const { data: session } = useSession(); 
    const email = session?.user?.email || "";
    const image = session?.user?.image || "";
    const name = session?.user?.name || "";



    const handleSubmit = async () => { 
        signIn("google", { callbackUrl: "/" });

        const res = await fetch("/api/google_db", {
            method: "POST",
            body: JSON.stringify({ email,image,name }),
          });

    }
    

    return (
        <div className='mt-4'>
            <button onClick={handleSubmit}
            className='btn btn-outline btn-success mb-4'> <span className='text'><FaGoogle /></span>  Login With Google</button>
        </div>
    );
};

export default GoogleLogin;
