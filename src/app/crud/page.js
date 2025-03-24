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

  

    
  


    const deleteTask = async (id) => {
      try{
        const response = await axios.delete(`/api/manipulate/${id}`);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) =>{
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your task has been deleted.",
              icon: "success"
            });
          
            refetch();
            console.log(response);
          }
        });
     
      }
      catch(err){
        console.error("Error deleting task:", err);
      }
    }


    const editTask = async (id, task) => {
      const { value: newTask } = await Swal.fire({
          input: "text",
          inputLabel: "Edit Your Task",
          inputPlaceholder: "Edit task...",
          inputValue: task || "Enter task here...",
          showCancelButton: true,
          confirmButtonText: "Done",
          color: "#ff0000",
          
          
      });
  
      if (!newTask) return; 
      if (newTask) {
        Swal.fire(newTask);
      }
  
      try {
          const result = await axios.patch(`/api/manipulate/${id}`, { task: newTask });
          console.log(result.data);
          refetch(); 
      } catch (err) {
          console.error("Error editing task:", err);
      }
  };
  

    return (

      <>
        {/* <div className="flex flex-col items-center min-h-screen mt-10 gap-8 p-10">
            <p>Task Management Application</p>

            <form className="flex gap-x-4 w-[400px]" onSubmit={addTask}>
                <input type="text" placeholder="Add task" name="task" className="input input-primary " />
                <button type="submit" className="btn btn-primary">Add</button>
            </form>


            <div className="grid grid-cols-2 gap-4">
            {items.length > 0 ? items.map((task) => (
            <div key={task._id}  className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">Most Popular</span>
    <div className="flex justify-between">
    <h2 className="text-3xl font-bold">{task.task}</h2>
      <button className="btn btn-success" onClick={() => editTask(task._id,task.task)}>Edit</button>
      <button className="btn btn-error" onClick={() => deleteTask(task._id)}>Delete</button>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>High-resolution image generation</span>
      </li>
      
    </ul>
    
  </div>
  </div>
)) : <div>
<span className="loading loading-bars loading-xl"></span>
<span className="loading loading-bars loading-xl"></span>
<span className="loading loading-bars loading-xl"></span>
<span className="loading loading-bars loading-xl"></span>
<span className="loading loading-bars loading-xl"></span>
</div>}
</div>




        </div> */}




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
