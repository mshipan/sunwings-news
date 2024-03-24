import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import {
  IoLogInOutline,
  IoLogOutOutline,
  IoTimerOutline,
} from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { useGetAllFacebookQuery } from "../../redux/features/allApis/socialMediaApi/facebookApi";
import { useGetAllInstagramQuery } from "../../redux/features/allApis/socialMediaApi/instagramApi";
import { useGetAllYoutubeQuery } from "../../redux/features/allApis/socialMediaApi/youtubeApi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useGetAllTwitterQuery } from "../../redux/features/allApis/socialMediaApi/twitterApi";
import moment from "moment";
import Calendar from "date-bengali-revised";

const HeaderTop = () => {
  const [currentTime, setCurrentTime] = useState("");
  const { logOut, user } = useContext(AuthContext);
  const { data: allFacebook } = useGetAllFacebookQuery();
  const { data: allInstagram } = useGetAllInstagramQuery();
  const { data: allYoutube } = useGetAllYoutubeQuery();
  const { data: allTwitter } = useGetAllTwitterQuery();

  const singleFacebook = allFacebook?.[0];
  const singleInstagram = allInstagram?.[0];
  const singleYoutube = allYoutube?.[0];
  const singleTwitter = allTwitter?.[0];

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logged Out!");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  const cityName = "ঢাকা";

  // Get current date and time using Moment.js
  const currentDay = moment().format("dddd");
  const currentFormattedDate = moment().format("LL");
  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = moment().format("hh:mm:ss A");
      setCurrentTime(newTime);
    }, 1000); // Update every second

    // Cleanup function to clear interval
    return () => clearInterval(interval);
  }, []);

  // Get current Bengali date
  const today = new Date();
  const cal = new Calendar();
  cal.fromDate(today);
  const currentBnDate = cal.format("dddd D MMMM, Y ");

  return (
    <div className="container mx-auto py-4 px-2 border-b border-gray-200">
      <div className="flex flex-wrap flex-col md:flex-row justify-between items-center">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="flex items-center gap-1">
            <CiLocationOn className="text-black" />
            <p className="text-black">{cityName},</p>
          </div>
          <div className="flex items-center gap-1">
            <IoTimerOutline className="text-black" />
            <p className="text-black">{currentTime},</p>
          </div>
          <div className="text-center">
            <p className="text-black flex items-center gap-1">
              <SlCalender />
              {currentDay} {currentFormattedDate} , <SlCalender />{" "}
              {currentBnDate} বঙ্গাব্দ
            </p>
          </div>
        </div>
        <div className="flex items-center md:max-lg:mx-auto mt-4 md:mt-0 gap-5">
          <Link to={singleFacebook?.link} role="button" className="">
            <span className="[&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-[#1877f2]">
              <FaFacebookF />
            </span>
          </Link>

          <Link to={singleInstagram?.link} role="button">
            <span className="[&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-[#c13584]">
              <FaInstagram />
            </span>
          </Link>

          <Link to={singleYoutube?.channelLink} role="button">
            <span className="[&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-[#ea4335]">
              <FaYoutube />
            </span>
          </Link>

          <Link to={singleTwitter?.link} role="button">
            <span className="[&>svg]:h-4 [&>svg]:w-4 [&>svg]:fill-black">
              <FaXTwitter />
            </span>
          </Link>
          {user ? (
            <IoLogOutOutline onClick={handleLogout} />
          ) : (
            <Link to="/login">
              <IoLogInOutline />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
