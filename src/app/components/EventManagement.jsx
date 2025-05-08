import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React,{useRef} from "react";
import Swal from "sweetalert2";
import Loader from "./Loader";
import { IoMdPrint } from "react-icons/io";

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
      return res.data.events;
    },
  });

  const editevents = async (event) => {
    const { _id, creator, title, start, end } = event;

    const { value: formValues } = await Swal.fire({
      title: "Edit Event",
      html: `
        <div class="flex flex-col space-y-4">
          <input id="swal-creator" class="swal2-input" placeholder="Event Creator" value="${creator || ""}">
          <input id="swal-title" class="swal2-input" placeholder="Event Title" value="${title || ""}">
          <input id="swal-start" type="datetime-local" class="swal2-input" value="${start || ""}">
          <input id="swal-end" type="datetime-local" class="swal2-input" value="${end || ""}">
        </div>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Update",
      preConfirm: () => {
        return {
          creator: document.getElementById("swal-creator").value,
          title: document.getElementById("swal-title").value,
          start: document.getElementById("swal-start").value,
          end: document.getElementById("swal-end").value,
        };
      },
    });

    if (!formValues) return;

    try {
      await axios.patch(`/api/manipulateevent/${_id}`, formValues);
      refetch();
      Swal.fire("Success!", "Event updated successfully", "success");
    } catch (err) {
      console.error("Error editing event:", err);
      Swal.fire("Error!", "Something went wrong while updating the event.", "error");
    }
  };

  const deleteevents = async (id) => {
    try {
      const response = await axios.delete(`/api/manipulateevent/${id}`);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your event has been deleted.", "success");
          refetch();
        }
      });
    } catch (err) {
      console.error("Error deleting event:", err);
    }
  };

  

  
  

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-blue-900">Recent Events</h2>
        <button
          onClick={()=> window.print()}
          className="text-blue-900 hover:underline flex items-center gap-2"
        >
          <IoMdPrint className="text-2xl" />
          Print
        </button>
      </div>


    

      <div className="overflow-x-auto print-area"  >
        <table className="w-full table-auto">
          <thead>
            <tr>

            <th className="text-left py-2 px-4">Serial No</th>
              <th className="text-left py-2 px-4">Event Creator</th>
              <th className="text-left py-2 px-4">Event Title</th>
              <th className="text-left py-2 px-4">Starting Time</th>
              <th className="text-left py-2 px-4">Ending Time</th>
              <th className="text-left py-2 px-4 no-print">Actions</th>
            </tr>
          </thead>
          <tbody>
            {!events.length && (
              <tr>
                <td colSpan="5" className="text-center py-2 px-4">
                  No events found <Loader />
                </td>
              </tr>
            )}
            {events.map((event, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4">{index + 1}</td>

                <td className="py-2 px-4">{event.creator}</td>
                <td className="py-2 px-4">{event.title}</td>
                <td className="py-2 px-4">{event.start}</td>
                <td className="py-2 px-4">{event.end}</td>
                <td className="py-2 px-4 ">
                  <div className="flex gap-2 no-print">
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
