import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Topbar = ({ toggleSidebar }) => {
  return (
    <div className="bg-white p-4 shadow-md flex justify-between items-center">
      <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
      <GiHamburgerMenu />
      </button>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here"
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none"
          />
          <ion-icon
            name="search-outline"
            className="absolute left-3 top-2 text-gray-500"
          ></ion-icon>
        </div>

        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src="/images/Screenshot_4.png"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;