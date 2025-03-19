"use client";
import React from 'react';
import { Slide } from 'react-awesome-reveal';

export default function Benefits() {
  const benefits = [
    {
      title: 'Save Time',
      desc: 'Automate your scheduling and focus on what matters.',
    },
    {
      title: 'Collaborate',
      desc: 'Manage team schedules with ease.',
    },
    {
      title: 'Stay Flexible',
      desc: 'Edit and adapt on the go.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Slide direction="down" triggerOnce>
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        </Slide>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Slide
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'} // Alternate left/right
              delay={index * 200} // Staggered effect: 0ms, 200ms, 400ms
              triggerOnce
            >
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </section>
  );
}