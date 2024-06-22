import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(0);
  const [gmtTime, setGmtTime] = useState("");
  const [message, setMessage] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  useEffect(() => {
    const updateGmtTime = () => {
      setGmtTime(new Date().toISOString().substr(11, 8));
    };

    const intervalId = setInterval(() => {
      updateGmtTime(); // Update GMT time every second

      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return 0;
        }
      });

      // Check if GMT time matches the set time
      const setHoursInt = parseInt(hours, 10);
      const setMinutesInt = parseInt(minutes, 10);
      const gmtHours = parseInt(gmtTime.substr(0, 2), 10);
      const gmtMinutes = parseInt(gmtTime.substr(3, 2), 10);

      if (
        !isNaN(setHoursInt) &&
        !isNaN(setMinutesInt) &&
        gmtHours === setHoursInt &&
        gmtMinutes === setMinutesInt
      ) {
        setMessage("Done.");
        handleSignIn();
      } else {
        setMessage("");
      }
    }, 1000);

    // Initialize GMT time immediately
    updateGmtTime();

    return () => clearInterval(intervalId);
  }, [gmtTime, hours, minutes]);

  const handleSignIn = () => {
    // Here you can add your authentication logic
    navigate("/dashboard");
  };

  const handleHoursChange = (e) => {
    setHours(e.target.value);
  };

  const handleMinutesChange = (e) => {
    setMinutes(e.target.value);
  };

  const handleSetTime = (e) => {
    e.preventDefault();
    setTimer(0); // Reset timer to zero
    setHours("");
    setMinutes("");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <h1>W.A.C-APP/v.0.0.1</h1>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <form
              onSubmit={handleSetTime}
              className="w-full max-w-xs flex flex-col items-center"
            >
              <div className="flex space-x-4">
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Hours"
                  value={hours}
                  onChange={handleHoursChange}
                />
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Minutes"
                  value={minutes}
                  onChange={handleMinutesChange}
                />
              </div>
            </form>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <div className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-red-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-4">
                  <div className="bg-white p-2 rounded-full">{gmtTime}</div>
                  <span className="ml-4">Current GMT</span>
                </div>
                {message && (
                  <div className="mt-4 text-lg font-semibold text-green-600">
                    {message}
                  </div>
                )}
              </div>
              <br />
              <div className="mx-auto max-w-xs">
                <img
                  src="Logo_Wydad_Athletic_Club.png"
                  alt="Logo Wydad Athletic Club"
                  className="mx-8"
                />
                <br />

                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by Cartesian Kinetics
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Terms of Service
                  </a>
                  and its
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://drive.google.com/uc?export=view&id=1KZ_Ub_2lZ0dHbKV0fAIhxVhiQA183RCz')",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
