import React from "react";

const RecentCustomers = () => {
  const customers = [
    { name: "Fahim", country: "Bangladesh", image: "https://via.placeholder.com/40" },
    { name: "Uzzal", country: "India", image: "https://via.placeholder.com/40" },
    { name: "Bibek", country: "Bangladesh", image: "https://via.placeholder.com/40" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* <h2 className="text-xl font-bold text-blue-900 mb-6">Recent Customers</h2> */}
      <h2 className="text-xl font-bold text-blue-900 mb-6">Recent Team Members</h2>

      <table className="w-full">
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2">
                <div className="flex items-center space-x-4">
                  <img
                    src={customer.image}
                    alt={customer.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{customer.name}</h4>
                    <span className="text-sm text-gray-500">{customer.country}</span>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentCustomers;