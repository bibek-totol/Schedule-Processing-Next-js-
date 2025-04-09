import React from 'react'
import { FaMailBulk } from "react-icons/fa";
import { Slide, Fade } from "react-awesome-reveal";
export default function GoogleMap() {
  return (
    <div className='my-[100px]  p-5'>
      <Slide direction="right">
        <p className="text-2xl md:text-4xl lg:text-4xl font-bold text-black text-center">Our Location</p>
      </Slide>
      <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-5 mt-5">
        <Fade
          delay={200} 
          duration={1000} 
          fraction={0.2} 
        >
          <div className="p-5 rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7022256804657!2d90.40278867484706!3d23.793615787116796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7163736e453%3A0xb12cfac638de13ed!2sProgramming%20Hero!5e0!3m2!1sen!2sbd!4v1744196615808!5m2!1sen!2sbd"
              width="100%"
              className='rounded-xl'
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Fade>

        <Fade
          delay={400} 
          duration={1000} 
          fraction={0.2} 
        >
          <div className="">
            <div className="w-full h-1/2 mt-[10%] space-y-5">
              <div className="flex gap-2 md:gap-5 lg:gap-5">
                <FaMailBulk className='text-5xl md:text-5xl lg:text-5xl text-black ' />
                <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-black text-center">Subscribe to Our Newsletter</h1>
              </div>

             
              <input type="text" placeholder='Your Email' className='p-5 rounded-xl w-full border-2 border-[#30BEAD]' />
              <div className='bg-gradient-to-r from-pink-500 to-indigo-500  p-[4px] rounded-lg'>
              <button className="btn   w-full text-black text-xl p-8 rounded-md">Subscribe</button>
              </div>
            </div>
          </div>
        </Fade>

      </div>

    </div>
  )
}
