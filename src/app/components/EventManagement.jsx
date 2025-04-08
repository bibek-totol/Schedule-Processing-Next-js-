import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { ContextProvider } from "../AuthProviders/AuthProvider";

const EventManagement = () => {
  const {
    data: events = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axios.get("/api/events");
      console.log(res.data.events);
      return res.data.events;
    },
  });

  const { editevents, deleteevents } = useContext(ContextProvider);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        {/* <h2 className="text-xl font-bold text-blue-900">Recent Orders</h2> */}
        <h2 className="text-xl font-bold text-blue-900">Recent Events</h2>
        <a href="#" className="text-blue-900 hover:underline">
          View All
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="text-left py-2 px-4">Event Title</th>
              <th className="text-left py-2 px-4">Starting Time</th>
              <th className="text-left py-2 px-4">Ending Time</th>

              <th className="text-left py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4">{event.title}</td>
                <td className="py-2 px-4">{event.start}</td>
                <td className="py-2 px-4">{event.end}</td>

                <td className="py-2 px-4">
                  <div className="flex gap-2">
                    <button
                      className="btn btn-success"
                      onClick={() => editevents(event)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-error"
                      onClick={() => deleteevents(event._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventManagement;
