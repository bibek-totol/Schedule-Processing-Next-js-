"use client";
import Image from 'next/image';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function Feature() {
  const features = [
    {
      icon: '/feature/calender.png',
      title: 'Schedule Management',
      desc: 'Easily create and manage your schedules with smart time-slot suggestions.',
    },
    {
      icon: '/feature/check.png',
      title: 'Task Prioritization',
      desc: 'Stay on top of your work with prioritized tasks and deadlines.',
    },
    {
      icon: '/feature/flexible-schedule.png',
      title: 'Calendar Sync',
      desc: 'Seamlessly integrate with Google Calendar for a unified view.',
    },
    {
      icon: '/feature/al.png',
      title: 'Reminders',
      desc: 'Never miss a beat with customizable notifications.',
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <Fade direction="down" triggerOnce>
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {features.map((feature, index) => (
    <Fade
      key={index}
      direction="up"
      delay={index * 100}
      duration={1000}
    >
      
      <div className="p-[4px] rounded-lg bg-gradient-to-r from-pink-500 to-indigo-500 h-full">
        
        <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 h-full ">
          <div className="w-12 h-12 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center">
            <Image
              src={feature.icon}
              width={32}
              height={32}
              alt={feature.title}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.desc}</p>
        </div>
      </div>
    </Fade>
  ))}
</div>

      </div>
    </section>
  );
}
