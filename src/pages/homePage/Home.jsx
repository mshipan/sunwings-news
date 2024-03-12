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

const Home = () => {
  return (
    <div className="container mx-auto px-2">
      <div className="flex gap-5 xl:flex-row flex-col">
        {/* home left site */}
        <div className="">
          <div className="grow text-white flex flex-col md:flex-row gap-6">
            <div className="grow">
              <img src={homeSliderImg} alt="" />
            </div>
            <div className="flex-none md:w-80 p-4 bg-yellow-300 w-full ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                hic eos repudiandae tenetur in perspiciatis ut fugiat, rem sequi
                inventore libero odit ipsum omnis facilis repellat dicta rerum a
                ea!
              </p>
            </div>
          </div>
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
              <CategoryTitle />
              <div className="">
                <div className="relative group">
                  <img src={twitter} alt="" />
                  <div className="absolute top-0 w-full pl-2 bg-white/30 backdrop-blur-sm">
                    <Link
                      to="https://www.facebook.com/sunwingtourstravels/"
                      target="_blank"
                      className="flex items-center gap-2 p-1"
                    >
                      <img className="size-10 rounded-full" src={card} alt="" />
                      <h3 className="cursor-pointer text-black text-base font-semibold hover:underline">
                        Sunwing Tours & Travels
                      </h3>
                    </Link>
                  </div>
                  <div className="absolute flex justify-around w-full bottom-0 group-hover:bottom-4 transition-all ease-in-out duration-500">
                    <Link className="bg-white/30 backdrop-blur-sm flex items-center py-1 px-2 gap-1 font-semibold">
                      <FaFacebookSquare className="text-blue-800" />
                      <span className="text-black">Facebook Page</span>
                    </Link>
                    <Link className="bg-white/30 backdrop-blur-sm flex items-center py-1 px-2 text-black gap-1 font-semibold">
                      <FaShare />
                      <span>share</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* টুইটারে আমরা */}
            <div className="space-y-4">
              <CategoryTitle />
              <div className="">
                <div className="relative group">
                  <img src={twitter} alt="" />
                  <div className="absolute top-0 w-full pl-2 bg-white/30 backdrop-blur-sm">
                    <Link
                      to="https://www.facebook.com/sunwingtourstravels/"
                      target="_blank"
                      className="flex items-center gap-2 p-1"
                    >
                      <img className="size-10 rounded-full" src={card} alt="" />
                      <h3 className="cursor-pointer text-black text-base font-semibold hover:underline">
                        Sunwing Tours & Travels
                      </h3>
                    </Link>
                  </div>
                  <div className="absolute flex justify-around w-full bottom-0 group-hover:bottom-4 transition-all ease-in-out duration-500">
                    <Link className="bg-white/30 backdrop-blur-sm flex items-center py-1 px-2 gap-1 font-semibold">
                      <FaTwitterSquare className="text-blue-800" />
                      <span className="text-black">Follow</span>
                    </Link>
                    <Link className="bg-white/30 backdrop-blur-sm flex items-center py-1 px-2 text-black gap-1 font-semibold">
                      <FaShare />
                      <span>share</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* পুরাতন সংবাদ */}
            <div className="col-span-2 md:col-span-1">
              <CategoryTitle />
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
