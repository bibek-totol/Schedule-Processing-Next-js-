import React from 'react';
import { Zoom } from 'react-awesome-reveal';

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#E2E0FF]">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-teal-500 mb-16">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-12">
          <Zoom cascade duration={700}>
            <div className="text-center flex-1 p-6 bg-white rounded-xl shadow-2xl transition-all duration-300">
              <div className="bg-teal-500 text-white text-4xl font-bold rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                01
              </div>
              <h3 className="text-2xl font-semibold text-teal-500 mb-4">
                Sign Up
              </h3>
              <p className="text-lg text-gray-600">
                Create your account in seconds.
              </p>
            </div>

            <div className="text-center flex-1 p-6 bg-white rounded-xl shadow-2xl transition-all duration-300">
              <div className="bg-teal-500 text-white text-4xl font-bold rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                02
              </div>
              <h3 className="text-2xl font-semibold text-teal-500 mb-4">
                Plan
              </h3>
              <p className="text-lg text-gray-600">
                Add tasks and schedules effortlessly.
              </p>
            </div>

            <div className="text-center flex-1 p-6 bg-white rounded-xl shadow-2xl transition-all duration-300">
              <div className="bg-teal-500 text-white text-4xl font-bold rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                03
              </div>
              <h3 className="text-2xl font-semibold text-teal-500 mb-4">
                Succeed
              </h3>
              <p className="text-lg text-gray-600">
                Stay organized and productive.
              </p>
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
}
