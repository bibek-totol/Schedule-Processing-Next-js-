"use client";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'




export const ContextProvider = createContext();

const AuthProvider = ({ children }) => {

 
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
          // refetch(); 
          Swal.fire("Success", "Task added successfully", "success");
      
          
          e.target.reset();
        } catch (err) {
          console.error("Error adding task:", err);
          alert("Failed to add task. Please try again.");
        }
      };
    

  
   
  
  


  return (
    <ContextProvider.Provider
      value={{
        addTask
       
        
      
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default AuthProvider;
