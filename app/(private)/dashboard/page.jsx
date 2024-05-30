import React from "react";

const Dashboard = () => {
  return (
    <div className='w-full h-full mx-auto'>
      {/* Bread crumb */}
      <div className='flex items-center'>
        <h1
          className="font-varino text-lg  text-center"
          style={{
            background: "linear-gradient(to bottom, #00A7E1, #0081AD)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Dashboard
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
