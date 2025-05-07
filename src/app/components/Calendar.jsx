

import React, { useState, useEffect, use } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from "axios";
import { set, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";
import { FaMicrophone } from "react-icons/fa";
import { useVoiceToText } from "react-speakup";
import { MdClear } from "react-icons/md";


export default function Calendar() {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [events, setEvents] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const { startListening, stopListening, reset: resetTranscript, transcript } = useVoiceToText();
  

 
  
  console.log( transcript);

  useEffect(() => {
    if (!isListening && transcript) {
      setValue("title", transcript);
    }
  }, [isListening, transcript, setValue]);
  




  




  const { data: session, status } = useSession();
  console.log(session?.user?.name, status);





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
    const now = new Date();
    const start = new Date(data.start);
    const end = new Date(data.end);
    console.log(start, end);
    console.log(now);

    if (start < now || end < now || start > end) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Start and end date must be in the future and start date must be before end date",
        showConfirmButton: false,
        timer: 1500,
      });
     
      
      return; 
      
    }
   
    try {



     
      

      
  
      const response = await axios.post("/api/events", data);
  
      setEvents((prevEvents) =>
        Array.isArray(prevEvents)
          ? [...prevEvents, response.data.event]
          : [response.data.event]
      );
  
      Swal.fire({
        icon: "success",
        title: "Event added successfully",
        showConfirmButton: false,
        timer: 1200,
      });
  
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

      
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-300 p-4 rounded-lg shadow-md mb-6 border border-blue-900">
        
        

      <div className="mb-3">
  <label className="block font-medium">Event Creator</label>
  <input
    type="text"
    {...register("creator", { required: true })}
    className="w-full border p-2 rounded-md"
    defaultValue={session?.user?.name || ""}
    readOnly
  />
</div>
        
       


        <div className="mb-3 relative">
  <label className="block font-medium">Event Name</label>
  <input
    type="text"
    {...register("title", { required: true })}
    className="w-full border p-2 rounded-md pr-10"
    placeholder="Enter event name"

    
  />
 <FaMicrophone
  className={`absolute right-3 top-9 text-xl cursor-pointer ${
    isListening ? "text-red-500 animate-pulse" : "text-gray-700"
  }`}
  onClick={() => {
    if (isListening) {
      stopListening();
     
    } else {
     
      startListening();
    
      

    }
    setIsListening(!isListening);
  }}
  title={isListening ? "Listening..." : "Click to speak"}
/>

<MdClear
  className="absolute right-10 top-9 text-xl cursor-pointer text-gray-700"
  onClick={() => {
    resetTranscript();
    setValue("title", "");
  }}
  title="Clear"
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
