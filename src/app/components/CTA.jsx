import Link from 'next/link'
import React from 'react'

export default function CTA() {
  return (
    <section className="py-16  text-black">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Ready to Take Control of Your Schedule?
      </h2>
      <Link href={'/signin'}>
      <button className="inline-flex items-center justify-center px-6 py-5 min-w-[140px] md:min-w-[196px] text-white text-[15px] md:text-[20px] font-sans whitespace-nowrap rounded-lg shadow-[0_15px_30px_-5px_rgba(151,65,252,0.2)] bg-[linear-gradient(144deg,#AF40FF,#5B42F3_50%,#00DDEB)] focus:outline-none hover:outline-none active:outline-none transition-all">
        Sign Up Free
      </button>
      </Link>
      <p className="mt-4 text-sm text-teal-500 font-bold">No credit card required.</p>



      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Save Time</h3>
                <p className="text-gray-600">
                  Automate your scheduling and focus on what matters.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Collaborate</h3>
                <p className="text-gray-600">
                  Manage team schedules with ease.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Stay Flexible</h3>
                <p className="text-gray-600">
                  Edit and adapt on the go.
                </p>
              </div>
            </div>


    </div>
  </section>
  )
}
