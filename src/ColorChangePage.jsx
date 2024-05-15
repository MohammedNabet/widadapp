import React, { useState, useEffect } from "react";

const ColorChangingPage = () => {
  const [color, setColor] = useState("bg-red-500");

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prevColor) =>
        prevColor === "bg-red-500" ? "bg-white" : "bg-red-500"
      );
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex justify-center items-center h-screen ${color}`}>
      <div className="container mx-auto">
        <h2 className="text-2xl mb-4">Color Changing Page</h2>
        <div>{color === "bg-red-500" ? "Red" : "White"}</div>
      </div>
    </div>
  );
};

export default ColorChangingPage;
