// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center">
//       <h1 className="text-4xl font-bold">Welcome to the Dashboard!</h1>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [color, setColor] = useState("bg-red-500");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setColor("bg-white");
    }, 30000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`min-h-screen ${color} flex items-center justify-center transition-colors duration-30000`}
    >
      <h1 className="text-4xl font-bold text-gray-900">WidadApp</h1>
    </div>
  );
};

export default Dashboard;
