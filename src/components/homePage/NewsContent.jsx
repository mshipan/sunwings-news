import customImg from "../../assets/HomeBanner1.png";

import homeSliderImg from "../../assets/1.png";
import { FaFacebookSquare, FaShare, FaTwitterSquare } from "react-icons/fa";
import SmallNewsCard from "../shared/SmallNewsCard";
const NewsContent = () => {
  return (
    <div>
      <div className="flex-col lg:flex-row flex items-center gap-4 py-4">
        <div className="">
          <img src={customImg} alt="" />
        </div>
        <div className="">
          <img src={customImg} alt="" />
        </div>
      </div>

      <div className="flex gap-5 xl:flex-row flex-col">
        {/* home left site */}
        <div className="">
          <div className="bg-gray-300 text-black font-semibold border-l-4 border-orange-500 my-4">
            <p className="text-base ml-1 p-2">জাতীয়</p>
          </div>
          <div className="grow text-white flex flex-col md:flex-row gap-6">
            <div className="grow">
              <img src={homeSliderImg} alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <SmallNewsCard />
              <SmallNewsCard />
              <SmallNewsCard />
              <SmallNewsCard />
            </div>
          </div>
        </div>

        {/* home right site */}
        <div className="flex-none xl:w-80 w-full text-white">
          <div className="bg-gray-300 text-black font-semibold border-l-4 border-orange-500 my-4">
            <p className="text-base ml-1 p-2">জাতীয়</p>
          </div>
          <div className="grid gap-4 lg:max-xl:grid-cols-2 md:max-lg:grid-cols-2">
            <SmallNewsCard />
            <SmallNewsCard />
            <SmallNewsCard />
            <SmallNewsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
