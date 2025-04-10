import React, { useContext } from "react";
import { ContextProvider } from "../AuthProviders/AuthProvider";


export default function ADDTASK() {
  const { addTask,users } = useContext(ContextProvider);

const filteredUsers = users.filter((user) => user.role === "employee");
const filterAdmin = users.find((user) => user.role === "admin");

 
  return (
    <div className="min-h-screen flex items-center justify-center  p-3 mt-4">
      <div className="max-w-[1200px] w-full p-[6px] rounded-md bg-[linear-gradient(60deg,_rgba(3,50,82,1)_0%,_rgba(144,153,205,1)_52%,_rgba(42,216,214,1)_100%)]">
        <div className=" bg-white p-8 rounded-lg shadow-lg ">
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
               defaultValue={filterAdmin?.username}
                  readOnly
                />
              </div>

              {/* Your Task */}
              <div className="flex flex-col">
                <label className="font-medium mb-1">Your Task</label>

                <textarea
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:border-[#9b59b6] transition-colors"
                  placeholder="Enter your task"
                  required
                  name="task"
                ></textarea>
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

            <div className="flex flex-col mb-4">
              <label className="font-medium mb-1">Assigned Task To</label>
              <select
                name="assignedTo"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:border-[#9b59b6] transition-colors"
                required
              >
                <option value="">Select a user</option>
                {
                    filteredUsers.map((filteredUser)=>{
                        return(
                            <option key={filteredUser._id} value={filteredUser?.username}>{filteredUser.username}</option>
                        )


                    })
                }
              
              </select>
            </div>

    
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-navy-800 text-white py-2 rounded font-medium text-lg hover:bg-gradient-to-l transition-all"
              >
                ADD TASK
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
