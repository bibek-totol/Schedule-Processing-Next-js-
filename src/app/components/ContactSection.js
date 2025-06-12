'use client';
import { FaPhone, FaUser, FaEnvelope, FaPen, FaComment } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="w-full">
      
      <div className="relative bg-[#101828] text-white text-center py-16 bg-cover bg-center" style={{ backgroundImage: "url('/solar-bg.jpg')" }}>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">Contact Us</h1>
        <p className="text-sm mt-2">Your valuable ideas will always help us to grow</p>
      </div>

      
      <div className="bg-gradient-to-r from-blue-100 to-purple-200 py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Instant Free<br />Quote Now</h2>
            
            <p className="text-gray-600 mb-6">
              Please contact us if you have any query. Just let us know
            </p>
            <div className="flex items-center gap-3 text-black font-semibold">
              <div className="bg-green-900 text-white rounded-full p-3">
                <FaPhone />
              </div>
              <span>+880123456789</span>
            </div>
          </div>

    
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg space-y-4">
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaUser className="mr-3 text-gray-500" />
              <input type="text" placeholder="Name" className="w-full outline-none bg-transparent" />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaPhone className="mr-3 text-gray-500" />
              <input type="tel" placeholder="Phone" className="w-full outline-none bg-transparent" />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaEnvelope className="mr-3 text-gray-500" />
              <input type="email" placeholder="Email Address" className="w-full outline-none bg-transparent" />
            </div>
            <div className="flex items-center border-b border-gray-300 py-2">
              <FaPen className="mr-3 text-gray-500" />
              <input type="text" placeholder="Subject" className="w-full outline-none bg-transparent" />
            </div>
            <div className="flex items-start border-b border-gray-300 py-2">
              <FaComment className="mr-3 text-gray-500 mt-1" />
              <textarea placeholder="How can we help you? Feel free to get in touch!" className="w-full outline-none bg-transparent resize-none" rows="3"></textarea>
            </div>
            <button className="bg-green-900 text-white rounded-full px-6 py-3 mt-4 hover:bg-green-800 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
