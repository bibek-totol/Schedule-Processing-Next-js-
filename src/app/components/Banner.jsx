import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Zoom } from 'react-awesome-reveal';


export default function Banner() {
  return (
    <section className="h-screen flex items-center justify-center  text-black md:text-white mt-10">
    <div className="container mx-auto md:px-4 flex flex-col md:flex-row items-center text-black">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl md:text-5xl font-bold mb-4">
                Master Your Time with Ease
            </h1>
            <p className="text-lg md:text-xl mb-6">

            <TypeAnimation
  sequence={[
    
    'Plan with smart scheduling and task management.',
    1000,
    'Track with smart scheduling and task management.',
    1000,
    'Succeed with smart scheduling and task management.',
    1000,
    
  ]}
  speed={50}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>


            
            </p>
            <div className="space-x-4">
               
                <Link href={'/login'} className="inline-flex items-center justify-center px-6 py-5 min-w-[140px] md:min-w-[196px] text-white text-[15px] md:text-[20px] font-sans whitespace-nowrap rounded-lg shadow-[0_15px_30px_-5px_rgba(151,65,252,0.2)] bg-[linear-gradient(144deg,#AF40FF,#5B42F3_50%,#00DDEB)] focus:outline-none hover:outline-none active:outline-none transition-all">
                    Log In
                </Link>
                

            </div>
        </div>
        {/* Visual Placeholder */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <Zoom  cascade duration={1000}>
            <div className="relative w-72 h-72 md:w-96 md:h-96">
                <Image 
                    src={'/banner/banner.jpg'} 
                    width={384} 
                    height={384} 
                    alt="hero" 
                    className="object-cover rounded-full shadow-lg"
                    priority
                />
            </div>
            </Zoom>
        </div>
    </div>
</section>
  )
}
