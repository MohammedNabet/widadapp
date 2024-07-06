import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [color, setColor] = useState("bg-red-500");

  useEffect(() => {
    const updateColor = () => {
      const now = new Date();
      const secondsSinceMidnight =
        now.getUTCHours() * 3600 +
        now.getUTCMinutes() * 60 +
        now.getUTCSeconds();
      const interval = Math.floor(secondsSinceMidnight / 15) % 2;

      setColor(interval === 0 ? "bg-red-500" : "bg-white");
    };

    const startColorChange = () => {
      // Initial color update
      updateColor();

      // Calculate time until the next 15-second interval
      const now = new Date();
      const secondsToNextInterval = 15 - (now.getUTCSeconds() % 15);
      const timeoutId = setTimeout(() => {
        updateColor();
        // Set up the interval to run every 15 seconds
        const intervalId = setInterval(updateColor, 15000);

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
      }, secondsToNextInterval * 1000);

      // Clean up timeout on component unmount
      return () => clearTimeout(timeoutId);
    };

    startColorChange();

    // Set timeout to reset color change logic after 1 day (24 hours)
    const oneDayTimeoutId = setTimeout(() => {
      startColorChange();
    }, 24 * 60 * 60 * 1000);

    // Clean up all timeouts and intervals on component unmount
    return () => {
      clearTimeout(oneDayTimeoutId);
    };
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
