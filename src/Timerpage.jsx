import React from "react";
import { Link } from "react-router-dom";

function TimerPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-500">
      <h1 className="text-white text-4xl mb-8">Set Time</h1>
      <input
        type="text"
        placeholder="00:00"
        className="text-center border-2 border-white rounded-lg px-4 py-2 mb-4 w-40"
      />
      <Link
        to="/color-change"
        className="bg-white text-red-500 px-4 py-2 rounded-lg"
      >
        Start
      </Link>
    </div>
  );
}

export default TimerPage;
