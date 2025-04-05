

import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function Calendar() {
  const { register, handleSubmit, reset } = useForm();
  const [events, setEvents] = useState([]);


  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/events");
      if (Array.isArray(response.data.events)) {
      setEvents(response.data.events);
    } else {
      setEvents([]); 
    }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  
  const onSubmit = async (data) => {
  try {
    console.log(data);
    const response = await axios.post("/api/events", data);

    
    setEvents((prevEvents) => (Array.isArray(prevEvents) ? [...prevEvents, response.data.event] : [response.data.event]));
    Swal.fire({
      
      icon: "success",
      title: "Event added successfully",
      showConfirmButton: false,
      timer: 1200

    })

    reset();
  } catch (error) {
    console.error("Error adding event:", error);
  }
};


  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-12">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-4">
        Event Calendar
      </h2>

      {/* Event Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-300 p-4 rounded-lg shadow-md mb-6 border border-blue-900">
        <div className="mb-3">
          <label className="block font-medium">Event Name</label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div className="mb-3">
          <label className="block font-medium">Start Date</label>
          <input
            type="datetime-local"
            {...register("start", { required: true })}
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div className="mb-3">
          <label className="block font-medium">End Date</label>
          <input
            type="datetime-local"
            {...register("end", { required: true })}
            className="w-full border p-2 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add Event
        </button>
      </form>

      
      <div className="bg-gray-200 p-4 rounded-lg shadow-lg border border-blue-900">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          height="auto"
        />
      </div>
    </div>
  );
}
