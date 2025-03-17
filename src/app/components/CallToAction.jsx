import Link from 'next/link'
import React from 'react'

export default function CallToAction() {
  return (
    <section className="py-16 bg-teal-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Take Control of Your Schedule?
            </h2>
            <Link href={'/signin'} className="bg-white text-teal-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition">
              Sign Up Free
            </Link>
            <p className="mt-4 text-sm">No credit card required.</p>
          </div>
        </section>
  )
}

