'use client'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import Swal from 'sweetalert2';
import { ContextProvider } from "../AuthProviders/AuthProvider";


export default function CRUD() {
  const {addTask} = useContext(ContextProvider);
   


  //   const { data: items=[], isLoading, error,refetch } = useQuery({
  //     queryKey: ["items"],
  //     queryFn: async () => {
  //         const res = await axios.get('/api/addtask');
  //         return res.data.tasks;
  //     },
  // });

  

    
  


   
  

    return (

      <>



        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 to-navy-800 p-5 mt-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-2xl font-medium mb-4 relative">
          ADD YOUR TASK
          <span className="absolute left-0 bottom-0 h-1 w-8 bg-gradient-to-r from-[#71b7e6] to-[#9b59b6] rounded"></span>
        </h1>

        {/* Form */}
        <form onSubmit={addTask}>
          {/* User Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 mb-6">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:border-[#9b59b6] transition-colors"
                name="name"
                required
              />
            </div>

           

            

            {/* Your Task */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Your Task</label>
              

              <textarea className="p-2 border border-gray-300 rounded focus:outline-none focus:border-[#9b59b6] transition-colors" placeholder="Enter your task" required
              name="task"></textarea>
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Date</label>
              <input
                type="date"
                placeholder="Enter your date"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:border-[#9b59b6] transition-colors"
                required
                name="date"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium mb-1">Time</label>
              <input
                type="time"
                placeholder="Enter your time"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:border-[#9b59b6] transition-colors"
                required
                name="time"
              />
            </div>

            
          </div>

          {/* Gender Selection */}
          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">Priority</h2>
            <div className="flex space-x-4">
              {/* Male */}
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="priority"
                  className="form-radio h-4 w-4 text-[#9b59b6] focus:ring-[#9b59b6]"
                  value={"High"}
                />
                <span>High</span>
              </label>

              {/* Female */}
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="priority"
                  className="form-radio h-4 w-4 text-[#9b59b6] focus:ring-[#9b59b6]"
                  value={"Medium"}
                />
                <span>Medium</span>
              </label>

              {/* Prefer not to say */}
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="priority"
                  className="form-radio h-4 w-4 text-[#9b59b6] focus:ring-[#9b59b6]"
                  value={"Low"}
                />
                <span>Low</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-navy-800 text-white py-2 rounded font-medium text-lg hover:bg-gradient-to-l transition-all"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
 


        </>
    );
}
