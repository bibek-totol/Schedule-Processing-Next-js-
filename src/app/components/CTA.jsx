"use client";
import Link from 'next/link';
import React from 'react';
import { Zoom } from 'react-awesome-reveal';

export default function CTA() {
  return (
    <section className="py-16 bg-teal-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <Zoom triggerOnce>
          <h2 className="text-3xl font-bold mb-6">
            Ready to Take Control of Your Schedule?
          </h2>
        </Zoom>
        <Zoom delay={200} triggerOnce>
          <Link href="/signin">
            <button className="bg-white text-teal-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition">
              Sign Up Free
            </button>
          </Link>
        </Zoom>
        <Zoom delay={400} triggerOnce>
          <p className="mt-4 text-sm">No credit card required.</p>
        </Zoom>
      </div>
    </section>
  );
}