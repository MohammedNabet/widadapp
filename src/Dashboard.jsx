import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [color, setColor] = useState("bg-red-500");

  useEffect(() => {
    const updateColor = () => {
      // Get the current time in GMT
      const now = new Date();
      const gmtSeconds = now.getUTCMinutes() * 60 + now.getUTCSeconds();

      // Determine the color based on the 15-second interval
      const interval = Math.floor(gmtSeconds / 15) % 2; // 0 or 1

      // Set the color based on the interval
      setColor(interval === 0 ? "bg-red-500" : "bg-white");
    };

    // Initial color update
    updateColor();

    // Set up an interval to update the color every second
    const intervalId = setInterval(updateColor, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`min-h-screen ${color} flex items-center justify-center transition-colors duration-[1000ms]`}
    >
      <h1 className="text-4xl font-bold text-gray-900">E-Ultras Winners</h1>
    </div>
  );
};

export default Dashboard;
