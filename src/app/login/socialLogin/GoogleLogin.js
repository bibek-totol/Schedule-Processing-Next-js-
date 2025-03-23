import { signIn } from 'next-auth/react';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const GoogleLogin = () => {
    
    const handleGoogleLogin = async () => {
        const result = await signIn("google" , {redirect : false}) ;
        console.log(result);
    }

    return (
        <div className='mt-4'>
            <button onClick={ () => handleGoogleLogin }
            className='btn btn-outline btn-success mb-4'> <span className='text'><FaGoogle /></span>  Login With Google</button>
        </div>
    );
};

export default GoogleLogin;