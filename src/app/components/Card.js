import React from "react";

const Card = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-3xl font-bold text-blue-900">{value}</div>
          <div className="text-gray-500">{title}</div>
        </div>
        <ion-icon name={icon} className="text-4xl text-gray-500"></ion-icon>
      </div>
    </div>
  );
};

export default Card;