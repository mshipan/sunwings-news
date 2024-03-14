import homeSliderImg from "../../assets/1.png";
import card from "../../assets/home-slider.jpg";
import { Link } from "react-router-dom";
import NewsCard from "../../components/homePage/NewsCard";
import NewsContent from "../../components/homePage/NewsContent";
import fullImg from "../../assets/2.png";
import CategorizedNews from "../../components/homePage/CategorizedNews";
import CategoryTitle from "../../components/shared/CategoryTitle";
import { CiVideoOn } from "react-icons/ci";
import Banner from "../../components/homePage/Banner";
import Aside from "../../components/homePage/Aside";
import Advertisement from "../../components/shared/Advertisement";
import MiddleCategorySec from "../../components/homePage/MiddleCategorySec";

const Home = () => {
  return (
    <div className="container mx-auto px-2">
      <div className="flex gap-5 xl:flex-row flex-col">
        {/* home left site */}
        <div>
          {/* banner section */}
          <Banner />
          {/* all posts section  */}
          <div className="py-6 grid grid-cols-2 md:grid-cols-3  gap-6">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
        {/* home right site */}
        <Aside />
      </div>
      <div className="flex-col lg:flex-row flex items-center gap-4 py-4">
        <Advertisement />
        <Advertisement />
      </div>
      <NewsContent />

      <div className="py-4">
        <img src={fullImg} alt="" />
      </div>
      {/* middle category section */}
      <MiddleCategorySec />

      <div className="flex-col lg:flex-row flex items-center gap-4 py-4">
        <Advertisement />
        <Advertisement />
      </div>

      <div className="">
        <CategoryTitle />
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex gap-4 flex-row md:flex-col">
            <NewsCard />
            <NewsCard />
          </div>
          <div className="md:w-5/6 w-full">
            <img src={homeSliderImg} alt="" />
            <h2 className="text-black font-semibold text-xl py-4">
              ‘সিন্দাবাদ-আলাদীনের মতো কাজল রেখাও দর্শকমনে স্থান করে নেবে’
            </h2>
            <p className="text-black">
              এটা একটা ডেমো নিউজ। এটা একটা ডেমো নিউজ। এটা একটা ডেমো নিউজ। এটা
              একটা ডেমো নিউজ। এটা একটা ডেমো নিউজ। এটা একটা ডেমো নিউজ। এটা একটা
              ডেমো নিউজ। এটা একটা ডেমো নিউজ। এটা একটা ডেমো নিউজ। এটা একটা ডেমো
              নিউজ। এটা একটা ডেমো নিউজ। এটা একটা ডেমো নিউজ। এটা একটা ডেমো নিউজ।
              এটা একটা ডেমো নিউজ। এটা একটা ডেমো নিউজ।
            </p>
          </div>
          <div className="flex gap-4 flex-row md:flex-col">
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>

      <div className="flex-col lg:flex-row flex items-center gap-4 py-4">
        <Advertisement />
        <Advertisement />
      </div>

      <div className="bg-gray-500 text-gray-200 flex gap-4 flex-col md:flex-row">
        <div className="p-10 bg-gray-700 w-full">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2 cursor-pointer">
            <CiVideoOn className="text-lg" />
            <span>ভিডিও লিড</span>
          </h2>
          <img className="w-96 cursor-pointer" src={card} alt="" />
        </div>
        <div className=" p-6">
          <ul className="flex gap-4 font-medium text-xs md:text-base">
            <li className="border p-2 bg-orange-500 hover:bg-red-500 cursor-pointer">
              <Link>ভিডিও নিউজ</Link>
            </li>
            <li className="border p-2 bg-gray-500 hover:bg-red-500 cursor-pointer">
              <Link>ভিডিও বিনোদন</Link>
            </li>
            <li className="border p-2 bg-gray-500 hover:bg-red-500 cursor-pointer">
              <Link>ভিডিও টকশো</Link>
            </li>
          </ul>
          <div className="flex gap-3 mt-4">
            <div className="w-1/2">
              <img src={card} alt="" />
            </div>
            <div className="w-1/2">
              <img src={card} alt="" />
            </div>
          </div>
        </div>
      </div>

      <NewsContent />

      <div className="flex-col lg:flex-row flex items-center gap-4 py-4">
        <Advertisement />
        <Advertisement />
      </div>

      <div className="flex gap-4 flex-col md:flex-row mb-10">
        <div className="md:w-5/6 w-full">
          <CategoryTitle />
          <img src={homeSliderImg} alt="" />
        </div>
        <div className="">
          {/* <CategorizedNews /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
