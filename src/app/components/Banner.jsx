"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

// Split text into characters and animate each one
const AnimatedText = ({ text, tag: Tag = 'h1', className }) => {
  const letters = text.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }, // Delay between each letter
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <Tag className={className}>
      <motion.span variants={containerVariants} initial="hidden" animate="visible">
        {letters.map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default function Banner() {
  const imageVariants = {
    hidden: { opacity: 0, rotateY: 180 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 to-navy-800 text-black md:text-white">
      <div className="container mx-auto md:px-4 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <AnimatedText
            text="Master Your Time with Ease"
            tag="h1"
            className="text-2xl md:text-5xl font-bold mb-4"
          />
          <AnimatedText
            text="Plan, track, and succeed with smart scheduling and task management."
            tag="p"
            className="text-lg md:text-xl mb-6"
          />
          <div className="space-x-4">
            <Link href="/login">
              <motion.button
                className="border border-blue-900 hover:bg-blue-900 hover:text-white text-white font-semibold py-2 px-6 rounded-lg transition"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Log In
              </motion.button>
            </Link>
          </div>
        </div>
        {/* Visual Placeholder */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <motion.div
            className="relative w-72 h-72 md:w-96 md:h-96"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/banner/banner.jpg"
              width={384}
              height={384}
              alt="hero"
              className="object-cover rounded-full shadow-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}