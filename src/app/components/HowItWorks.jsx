"use client";
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Sign Up',
      desc: 'Create your account in seconds.',
    },
    {
      number: '02',
      title: 'Plan',
      desc: 'Add tasks and schedules effortlessly.',
    },
    {
      number: '03',
      title: 'Succeed',
      desc: 'Stay organized and productive.',
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Fade direction="down" triggerOnce>
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        </Fade>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {steps.map((step, index) => (
            <Fade
              key={index}
              direction="up"
              delay={index * 200} // Staggered effect: 200ms delay per step
              triggerOnce
            >
              <div className="text-center flex-1 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
                <div className="text-teal-500 text-4xl font-bold mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}