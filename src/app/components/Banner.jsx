import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Banner() {
    return (
        <section className="h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 to-blue-900 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Master Your Time with Ease
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Plan, track, and succeed with smart scheduling and task management.
                </p>
                <div className="space-x-4">
                    <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg transition">
                        Get Started
                    </button>
                    <Link href={'/login'} className="border border-blue-900 hover:bg-blue-900 hover:text-white text-white font-semibold py-2 px-6 rounded-lg transition">
                        Log In
                    </Link>
                </div>
            </div>
            {/* Visual Placeholder */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                    <Image 
                        src={'/banner/hero.jpg'} 
                        width={384} 
                        height={384} 
                        alt="hero" 
                        className="object-cover rounded-full shadow-lg"
                        priority
                    />
                </div>
            </div>
        </div>
    </section>
    )
}
