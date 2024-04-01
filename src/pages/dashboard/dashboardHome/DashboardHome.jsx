import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoMdListBox } from "react-icons/io";
import "./DashboardHome.css";
import watchBg from "../../../assets/watchBg.jpg";
import moment from "moment";

const DashboardHome = () => {
  // State to hold current time
  const [currentTime, setCurrentTime] = useState("");
  const [time, setTime] = useState(new Date());

  const currentDay = moment().format("dddd");
  const currentFormattedDate = moment().format("LL");
  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = moment().format("hh:mm A");
      setCurrentTime(newTime);
    }, 1000); // Update every second

    // Cleanup function to clear interval
    return () => clearInterval(interval);
  }, []);

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calculate rotation for clock hands
  const secondsRotation = time.getSeconds() * 6;
  const minutesRotation = time.getMinutes() * 6 + time.getSeconds() / 10;
  const hoursRotation =
    (time.getHours() % 12) * 30 +
    time.getMinutes() / 2 +
    time.getSeconds() / 120;
  return (
    <div>
      <Helmet>
        <title>Sunwings | Dashboard Home</title>
      </Helmet>
      <div className="flex flex-row mb-4 w-full items-center justify-between">
        <h1 className="text-black text-lg md:text-xl">Dashboard Home</h1>
        <h1 className="text-black text-base md:text-lg ">Welcome Back!</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-10">
        <div className="flex flex-row items-center justify-between border border-orange-600 p-4 ">
          <div>
            <h1 className="text-2xl">0</h1>
            <p className="text-base">All Posts</p>
          </div>
          <IoMdListBox className="text-4xl" />
        </div>

        <div className="flex flex-row items-center justify-between border border-orange-600 p-4 ">
          <div>
            <h1 className="text-2xl">0</h1>
            <p className="text-base">All Comments</p>
          </div>
          <IoMdListBox className="text-4xl" />
        </div>

        <div className="flex flex-row items-center justify-between border border-orange-600 p-4 ">
          <div>
            <h1 className="text-2xl">0</h1>
            <p className="text-base">All Categories</p>
          </div>
          <IoMdListBox className="text-4xl" />
        </div>
      </div>
      <div>
        <div className="bg-black p-3 w-full md:w-2/5 h-56">
          <div className="relative border-2 border-gray-300 w-full h-full flex items-center justify-center">
            <img
              src={watchBg}
              alt="watch bg"
              className="w-fit h-full absolute top-0 left-0"
            />
            <h1 className=" absolute top-2 right-2 text-white text-sm md:text-lg font-thin font-sans leading-3">
              {currentDay}
            </h1>
            <div className="absolute bottom-2 left-2 flex flex-col ">
              <h1 className="text-white text-sm md:text-base leading-3 font-sans">
                {currentTime}
              </h1>
              <h1 className="text-white text-xs font-mono leading-3">
                {currentFormattedDate}
              </h1>
            </div>
            <div>
              <div className="clock-container">
                <div className="clock-face">
                  {/* Hour hand */}
                  <div
                    className="hand hour-hand"
                    style={{ transform: `rotate(${hoursRotation}deg)` }}
                  ></div>
                  {/* Minute hand */}
                  <div
                    className="hand minute-hand"
                    style={{ transform: `rotate(${minutesRotation}deg)` }}
                  ></div>
                  {/* Second hand */}
                  <div
                    className="hand second-hand"
                    style={{ transform: `rotate(${secondsRotation}deg)` }}
                  ></div>
                  <div>
                    {[...Array(12).keys()].map((num) => (
                      <div
                        key={num}
                        className="number"
                        style={{
                          transform: `rotate(${num * 30}deg)`,
                          position: "absolute",
                          top: "14%",
                          left: "50%",
                          width: "1px",
                          height: "79px",
                          //   backgroundColor: "#333",
                          marginLeft: "-0.5px",
                          marginTop: "-20px",
                          transformOrigin: "bottom center",
                        }}
                      >
                        {num === 0 ? 12 : num}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DashboardHome;
