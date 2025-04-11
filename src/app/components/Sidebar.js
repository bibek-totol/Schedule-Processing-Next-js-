import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import {
  FiHome,
  FiUsers,
  FiMessageSquare,
  FiHelpCircle,
  FiSettings,
  FiLock
} from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscSignOut } from "react-icons/vsc";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";







const Sidebar = ({ isSidebarOpen,toggleSidebar }) => {

  const { data: session, status } = useSession();
  const role = session?.user?.role;
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "You have signed out successfully",
      showConfirmButton: false,
    });
  };

  return (
    <div
      className={`fixed z-30 h-full transition-all md:translate-x-0 duration-300 ${
         isSidebarOpen ? "translate-x-0" : "-translate-x-full"
       } md:w-64 w-64 bg-blue-900 text-white`}
     
    >
      <div className="p-6">
        <div className="flex items-center space-x-2">
        <button
             onClick={toggleSidebar}
             className="text-2xl block md:hidden focus:outline-none"
           >
             <GiHamburgerMenu />
           </button>
           <Link href="/" className="btn">
          <span className="text-xl font-bold">Schedule Pro</span>
          </Link>
        </div>
      </div>

      <ul className="mt-6">
        {[
          {
            /* { icon: <FiHome className="text-xl" />, title: "Dashboard" }, 
         { icon: <FiUsers className="text-xl" />, title: "Customers" },
          { icon: <FiMessageSquare className="text-xl" />, title: "Messages" },
          { icon: <FiHelpCircle className="text-xl" />, title: "Help" },
          { icon: <FiSettings className="text-xl" />, title: "Settings" },
          { icon: <FiLock className="text-xl" />, title: "Password" }, */
          },
        ].map((item, index) => (
          <li
            key={index}
            className="hover:bg-white hover:text-blue-900 rounded-l-full transition-all duration-200"
          >
            <a href="#" className="flex items-center p-4 space-x-2">
              {item.icon}
              {!isSidebarOpen && <span>{item.title}</span>}
            </a>
          </li>
        ))}


        {
          role === "admin" ?(
            <>
            <li
          className="hover:bg-white hover:text-blue-900 rounded-l-full transition-all duration-200 cursor-pointer"
          
        >
          <Link href="/panel/home">
            <div className="flex items-center p-4 space-x-2">
              <FiHome className="text-xl" />
              <span>Admin Dashboard</span>
         

            </div>
          </Link>

        

          
        </li>




        <li
          className="hover:bg-white hover:text-blue-900 rounded-l-full transition-all duration-200 cursor-pointer"
      
        >
          <Link href="/panel/addtasks">
            <div className="flex items-center p-4 space-x-2">
              <FiUsers  className="text-xl" />
              <span>ADD TASKS</span>
            </div>
          </Link>
        </li>
            
            

            

        <li
          className="hover:bg-white hover:text-blue-900 rounded-l-full transition-all duration-200 cursor-pointer"
      
        >
          <Link href="/panel/events">
            <div className="flex items-center p-4 space-x-2">
              <FiMessageSquare className="text-xl" />
              <span>Events</span>
            
            </div>
          </Link>

        </li>

        <li
          className="hover:bg-white hover:text-blue-900 rounded-l-full transition-all duration-200 cursor-pointer"
          
        >
          <Link href="/panel/eventmanagement">
            <div className="flex items-center p-4 space-x-2">
              <FiHelpCircle className="text-xl" />
              <span>Event Management</span>
            </div>
          </Link>
        </li>

        


        <li
          className="hover:bg-white hover:text-blue-900 rounded-l-full transition-all duration-200 cursor-pointer"
          
        >

          <Link href='/panel/profile'>
            <div className="flex items-center p-4 space-x-2">
              <FaRegUser className="text-xl" />
              {!isSidebarOpen && <span>Profile</span>}
            </div>
          </Link>
        </li>






        <li
          className="hover:bg-white hover:text-blue-900 rounded-l-full transition-all duration-200 cursor-pointer"
          onClick={handleSignOut}
        >
          <div className="flex items-center p-4 space-x-2">
            <VscSignOut className="text-xl" />
            <span>Sign Out</span>
          </div>
        </li>
            </>
          ):(
            <>
            <li
          className="hover:bg-white hover:text-blue-900 rounded-l-full transition-all duration-200 cursor-pointer"
          
        >
          <Link href="/employeepanel/home">
            <div className="flex items-center p-4 space-x-2">
              <FiHome className="text-xl" />
              <span>Employee Dashboard</span>
            </div>
          </Link>
        </li>


        <li
          className="hover:bg-white hover:text-blue-900 rounded-l-full transition-all duration-200 cursor-pointer"
          onClick={handleSignOut}
        >
          <div className="flex items-center p-4 space-x-2">
            <VscSignOut className="text-xl" />
            <span>Sign Out</span>
          </div>
        </li>



        <li
          className="hover:bg-white hover:text-blue-900 rounded-l-full transition-all duration-200 cursor-pointer"
          
        >

          <Link href='/employeepanel/profile'>
            <div className="flex items-center p-4 space-x-2">
              <FaRegUser className="text-xl" />
              {!isSidebarOpen && <span>Profile</span>}
            </div>
          </Link>
        </li>


            </>
          )
        }

        

      </ul>
    </div>
  );
};

export default Sidebar;
