import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";

const Topbar = ({ toggleSidebar }) => {
  const { data: session } = useSession();
  const role = session?.user?.role;
  const name = session?.user?.name;

  const {
    data: tasks = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get("/api/addtask");
      return res.data.tasks;
    },
    enabled: !!role && !!name,
    
  });

  const filteredTask = tasks.filter((task) => task.assignedTo === session?.user?.name);

  return (
    <div className="bg-white p-4 shadow-md flex justify-between md:justify-end items-center">
      <button
        onClick={toggleSidebar}
        className="text-2xl block md:hidden focus:outline-none"
      >
        <GiHamburgerMenu />
      </button>

      <div className="flex items-center space-x-4">
        {/* <div className="relative">
          <input
            type="text"
            placeholder="Search here"
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none"
          />
          <ion-icon
            name="search-outline"
            className="absolute left-3 top-2 text-gray-500"
          ></ion-icon>
        </div> */}




        {
          role === "employee" && (
            <div>
        <details className="dropdown ">
  <summary className="btn m-1"><IoIosNotifications className="text-3xl text-accent" />{filteredTask.length}</summary>
  <ul className="menu dropdown-content bg-gray-100 rounded-box z-1 w-40 lg:w-96  p-4 shadow-sm">
  {
    filteredTask.map((task) => (
      <li key={task._id} className="my-2 bg-gray-300 rounded-lg p-2">

      <a>{task.task} assigned to {task.assignedTo} by {task.name}</a>
      </li>
    ))

  }
    
  </ul>
</details>
        </div>
          )
        }

        

        <div>
          <span className="hidden md:block">
            {session?.user?.name}({session?.user?.email})
          </span>
        </div>

        <div className="w-10 h-10 rounded-full overflow-hidden ">
          <img
            src={session?.user?.image}
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
