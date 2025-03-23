import React from "react";

const RecentOrders = () => {
  const orders = [
    { name: "Star Refrigerator", price: "$1200", payment: "Paid", status: "Delivered" },
    { name: "Dell Laptop", price: "$110", payment: "Due", status: "Pending" },
    { name: "Apple Watch", price: "$1200", payment: "Paid", status: "Return" },
    { name: "Addidas Shoes", price: "$620", payment: "Due", status: "In Progress" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
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
            <th className="text-left">Name</th>
            <th className="text-left">Price</th>
            <th className="text-left">Payment</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2">{order.name}</td>
              <td className="py-2">{order.price}</td>
              <td className="py-2">{order.payment}</td>
              <td className="py-2">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;