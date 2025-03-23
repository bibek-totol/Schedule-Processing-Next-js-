import React from "react";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`fixed h-screen w-64 bg-blue-900 text-white transition-all duration-300 ${
        isSidebarOpen ? "w-20" : "w-64"
      }`}
    >
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <ion-icon name="logo-apple" className="text-2xl"></ion-icon>
          {!isSidebarOpen && <span className="text-xl font-bold">Brand Name</span>}
        </div>
      </div>

      <ul className="mt-6">
        {[
          { icon: "home-outline", title: "Dashboard" },
          { icon: "people-outline", title: "Customers" },
          { icon: "chatbubble-outline", title: "Messages" },
          { icon: "help-outline", title: "Help" },
          { icon: "settings-outline", title: "Settings" },
          { icon: "lock-closed-outline", title: "Password" },
          { icon: "log-out-outline", title: "Sign Out" },
        ].map((item, index) => (
          <li
            key={index}
            className="hover:bg-white hover:text-blue-900 rounded-l-full transition-all duration-200"
          >
            <a href="#" className="flex items-center p-4 space-x-2">
              <ion-icon name={item.icon} className="text-xl"></ion-icon>
              {!isSidebarOpen && <span>{item.title}</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;