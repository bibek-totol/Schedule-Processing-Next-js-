"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { createContext } from "react";
import Swal from 'sweetalert2'




export const ContextProvider = createContext();

const AuthProvider = ({ children }) => {




  const { data: tasks=[], isLoading, error,refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
        const res = await axios.get('/api/addtask');
        console.log(res.data.tasks);
        return res.data.tasks;
    },
});
 
    const addTask = async (e) => {
        e.preventDefault();
      
      
        const name = e.target.name.value;
        const task = e.target.task.value;
        const date = e.target.date.value;
        const time = e.target.time.value;
        const priority = e.target.priority.value;
      
        
        if (!name || !task || !date || !time || !priority) {
          Swal.fire("Error", "Please fill in all the fields", "error");
          return;
        }
      
        try {

            console.log(name, task, date, time, priority);
          
          const result = await axios.post("/api/addtask", {
            name,
            task,
            date,
            time,
            priority,
          });
      
          console.log(result.status);
          refetch();
          
          Swal.fire("Success", "Task added successfully", "success");
      
          
          e.target.reset();
        } catch (err) {
          console.error("Error adding task:", err);
          alert("Failed to add task. Please try again.");
        }
      };



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
  
  
      const editTask = async (task) => {
        const { _id, name, task: taskText, date, time, priority } = task;
    
    
        const { value: formValues } = await Swal.fire({
            title: "Edit Task",
            html: `

            <div class="flex flex-col space-y-4">
                <input id="swal-name" class="swal2-input" placeholder="Task Name" value="${name || ""}">
                <input id="swal-task" class="swal2-input" placeholder="Task Description" value="${taskText || ""}">
                <input id="swal-date" type="date" class="swal2-input" value="${date || ""}">
                <input id="swal-time" type="time" class="swal2-input" value="${time || ""}">


                <span class="border border-teal-500 ">
                <select id="swal-priority" class="swal2-input ">
                    <option value="High" ${priority === "High" ? "selected" : ""}>High</option>
                    <option value="Medium" ${priority === "Medium" ? "selected" : ""}>Medium</option>
                    <option value="Low" ${priority === "Low" ? "selected" : ""}>Low</option>
                </select>
                </span>
            </div>
            `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: "Update",
            preConfirm: () => {
                return {
                    name: document.getElementById("swal-name").value,
                    task: document.getElementById("swal-task").value,
                    date: document.getElementById("swal-date").value,
                    time: document.getElementById("swal-time").value,
                    priority: document.getElementById("swal-priority").value,
                };
            }
        });
    
        if (!formValues) return; 
    
        try {
            console.log(formValues);
            
            const result = await axios.patch(`/api/manipulate/${_id}`, formValues);
    
            console.log(result.data);
            refetch();
          
            Swal.fire("Success!", "Task updated successfully", "success");
            
        } catch (err) {
            console.error("Error editing task:", err);
            Swal.fire("Error!", "Something went wrong while updating the task.", "error");
        }
    };
    
  


  return (
    <ContextProvider.Provider
      value={{
        addTask,
        editTask,
        deleteTask
        

       
        
      
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default AuthProvider;
