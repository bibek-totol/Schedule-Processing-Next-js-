import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const RecentCustomers = () => {
  const { data: users=[], isLoading, error,refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
        const res = await axios.get('/api/users');
        console.log(res.data.users);
        return res.data.users;
    },
});
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* <h2 className="text-xl font-bold text-blue-900 mb-6">Recent Customers</h2> */}
      <h2 className="text-xl font-bold text-blue-900 mb-6">Recent Team Members</h2>

      <table className="w-full">
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2">
                <div className="flex items-center space-x-4">
                  <img
                    src={user.photoURL}
                    alt={user.username}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{user.username}</h4>
                    <span className="text-sm text-gray-500">{user.email}</span>
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