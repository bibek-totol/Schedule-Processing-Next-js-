import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function RecentGraph() {
  const { data: tasks = [], isLoading, error, refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get("/api/tasks");
      return res.data.tasks;
    },
  });

  
  const priorityCounts = tasks.reduce(
    (acc, task) => {
      acc[task.priority] = (acc[task.priority] || 0) + 1;
      return acc;
    },
    { High: 0, Medium: 0, Low: 0 }
  );

  
  const chartData = {
    labels: ["High", "Medium", "Low"],
    datasets: [
      {
        label: "Count",
        data: [priorityCounts.High, priorityCounts.Medium, priorityCounts.Low],
        backgroundColor: [
          "rgba(43, 63, 229, 0.8)", 
          "rgba(250, 192, 19, 0.8)", 
          "rgba(253, 135, 135, 0.8)", 
        ],
        borderColor: [
          "rgba(43, 63, 229, 1)",
          "rgba(250, 192, 19, 1)",
          "rgba(253, 135, 135, 1)",
        ],
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-blue-900 mb-4">
        Task Priority Distribution
      </h3>

      <div className="dataCard categoryCard">
        <Doughnut data={chartData} options={{ responsive: true }} />
      </div>
    </div>
  );
}
