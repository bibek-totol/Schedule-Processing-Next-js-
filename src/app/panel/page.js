


"use client"
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Card from "../components/Card";
import RecentOrders from "../components/RecentOrders";
import RecentCustomers from "../components/RecentCustomers";



const Panel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-20" : "ml-64"
        }`}
      >
        {/* Topbar */}
        <Topbar toggleSidebar={toggleSidebar} />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          <Card title="Total Tasks" value="1,504" icon="eye-outline" />
          <Card title="Priority Tasks" value="80" icon="cart-outline" />
          <Card title="Total Team Members" value="284" icon="chatbubbles-outline" />
          <Card title="Earning" value="$7,842" icon="cash-outline" />
        </div>

        {/* Recent Orders and Customers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          <RecentOrders />
          <RecentCustomers />
        </div>
      </div>
    </div>
  );
};

export default Panel;