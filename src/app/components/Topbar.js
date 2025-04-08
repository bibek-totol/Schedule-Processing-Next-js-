import { useSession } from "next-auth/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Topbar = ({ toggleSidebar }) => {
  const { data: session } = useSession();

  return (
    <div className="bg-white p-4 shadow-md flex justify-between md:justify-end items-center">
      <button
        onClick={toggleSidebar}
        className="text-2xl block md:hidden focus:outline-none"
      >
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

        <div>
          <span className="hidden md:block">
            {session?.user?.name}({session?.user?.email})
          </span>
        </div>

        <div className="w-10 h-10 rounded-full overflow-hidden ">
          <img
            src={session?.user?.image}
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
