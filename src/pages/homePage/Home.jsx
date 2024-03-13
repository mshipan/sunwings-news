import homeSliderImg from "../../assets/1.png";
import card from "../../assets/home-slider.jpg";
import twitter from "../../assets/twitter.jpg";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaShare, FaTwitterSquare } from "react-icons/fa";
import NewsCard from "../../components/homePage/NewsCard";
import NewsContent from "../../components/homePage/NewsContent";
import fullImg from "../../assets/2.png";
import CategorizedNews from "../../components/homePage/CategorizedNews";
import Advertisment from "../../components/shared/Advertisment";
import CategoryTitle from "../../components/shared/CategoryTitle";
import { CiVideoOn } from "react-icons/ci";
import Banner from "../../components/homePage/Banner";
import SocialShare from "../../components/shared/SocialShare";

const Home = () => {
  return (
    <div className="container mx-auto px-2">
      <div className="flex gap-5 xl:flex-row flex-col">
        {/* home left site */}
        <Banner />

        {/* home right site */}
        <div className="flex-none xl:w-72 text-white">
          <div className="grid grid-cols-2 md:grid-cols-1 lg:max-xl:grid-cols-4 md:max-lg:grid-cols-4 content-between gap-4">
            <p className="bg-slate-500 p-4 col-span-2 md:col-span-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic
              eos repudiandae tenetur in perspiciatis ut fugiat, rem sequi
              inventore libero odit ipsum omnis facilis repellat dicta rerum a
              ea!
            </p>

            {/* ফেসবুকে আমরা */}
            <div className="space-y-4">
              <CategoryTitle title="ফেসবুকে আমরা" />
              <SocialShare
                title="Sunwing Tours & Travels"
                socialUrl="https://www.facebook.com/sunwingtourstravels"
                cardImage={twitter}
                icon={FaFacebookSquare}
                profileImage={card}
              />
            </div>

            {/* টুইটারে আমরা */}
            <div className="space-y-4">
              <CategoryTitle title="টুইটারে আমরা" />
              <SocialShare
                title="Sunwing Tours & Travels"
                socialUrl="https://www.facebook.com/sunwingtourstravels"
                cardImage={twitter}
                icon={FaTwitterSquare}
                profileImage={card}
              />
            </div>

            {/* পুরাতন সংবাদ */}
            <div className="col-span-2 md:col-span-1">
              <CategoryTitle title="পুরাতন সংবাদ" />
              <div className="">
                <input
                  type="date"
                  placeholder="Type here"
                  className="bg-white input input-bordered w-full text-black p-2 border border-gray-500 my-4"
                />
                <button className="w-full bg-orange-500 p-2 text-center hover:bg-orange-400">
                  খুজুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewsContent />

      <div className="py-4">
        <img src={fullImg} alt="" />
      </div>

      <div className="grid gap-4 grid-cols-1 md:max-lg:grid-cols-2 lg:grid-cols-3">
        <CategorizedNews />
        <CategorizedNews />
        <CategorizedNews />
      </div>

      <div className="flex-col lg:flex-row flex items-center gap-4 py-4">
        <Advertisment />
        <Advertisment />
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
        <Advertisment />
        <Advertisment />
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
        <Advertisment />
        <Advertisment />
      </div>

      <div className="flex gap-4 flex-col md:flex-row mb-10">
        <div className="md:w-5/6 w-full">
          <CategoryTitle />
          <img src={homeSliderImg} alt="" />
        </div>
        <div className="">
          <CategorizedNews />
        </div>
      </div>
    </div>
  );
};

export default Home;
