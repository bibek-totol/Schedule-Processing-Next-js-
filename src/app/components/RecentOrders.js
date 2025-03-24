import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const RecentOrders = () => {
    const { data: tasks=[], isLoading, error,refetch } = useQuery({
      queryKey: ["tasks"],
      queryFn: async () => {
          const res = await axios.get('/api/addtask');
          console.log(res.data.tasks);
          return res.data.tasks;
      },
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        {/* <h2 className="text-xl font-bold text-blue-900">Recent Orders</h2> */}
        <h2 className="text-xl font-bold text-blue-900">Recent Tasks</h2>
        <a href="#" className="text-blue-900 hover:underline">
          View All
        </a>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left py-2">Name</th>
            <th className="text-left py-2">Task</th>
            <th className="text-left py-2 ">Date</th>
            <th className="text-left py-2">Time</th>
            <th className="text-left py-2">Priority</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2">{task.name}</td>
              <td className="py-2">{task.task}</td>
              <td className="py-2">{task.date}</td>
              <td className="py-2">{task.time}</td>
              <td className="py-2">{task.priority}</td>
              {/* <td className="py-2">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    order.status === "Delivered"
                      ? "bg-green-200 text-green-800"
                      : order.status === "Pending"
                      ? "bg-yellow-200 text-yellow-800"
                      : order.status === "Return"
                      ? "bg-red-200 text-red-800"
                      : "bg-blue-200 text-blue-800"
                  }`}
                >
                  {order.status}
                </span>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;