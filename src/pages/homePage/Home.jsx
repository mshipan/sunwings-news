import { MdAccessTime } from 'react-icons/md';
import homeSliderImg from '../../assets/1.png';
import card from '../../assets/home-slider.jpg';
import cardFacebook from '../../assets/facebook.jpg';
import twitter from '../../assets/twitter.jpg';
import customImg from '../../assets/HomeBanner1.png';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaShare } from "react-icons/fa";

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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic eos repudiandae tenetur in perspiciatis ut fugiat, rem sequi inventore libero odit ipsum omnis facilis repellat dicta rerum a ea!</p>
            </div>
          </div>
          <div className="py-6 grid grid-cols-3 gap-6">
            <div className="bg-slate-100">
              <img src={card} alt="" />
              <div className="p-2">
                <h3 className='text-base font-medium'>শুরু হয়েছে শীতের মৌসুম, শীতের ফুলে রঙিন প্রকৃতি</h3>
                <p className='flex items-center border-l-2 border-orange-500 gap-1 mt-2'><MdAccessTime className='text-orange-500 ml-2'/><span>১ বছর আগে</span></p>
              </div>
            </div>
            <div className="bg-slate-100">
              <img src={card} alt="" />
              <div className="p-2">
                <h3 className='text-base font-medium'>শুরু হয়েছে শীতের মৌসুম, শীতের ফুলে রঙিন প্রকৃতি</h3>
                <p className='flex items-center border-l-2 border-orange-500 gap-1 mt-2'><MdAccessTime className='text-orange-500 ml-2'/><span>১ বছর আগে</span></p>
              </div>
            </div>
            <div className="bg-slate-100">
              <img src={card} alt="" />
              <div className="p-2">
                <h3 className='text-base font-medium'>শুরু হয়েছে শীতের মৌসুম, শীতের ফুলে রঙিন প্রকৃতি</h3>
                <p className='flex items-center border-l-2 border-orange-500 gap-1 mt-2'><MdAccessTime className='text-orange-500 ml-2'/><span>১ বছর আগে</span></p>
              </div>
            </div>
            <div className="bg-slate-100">
              <img src={card} alt="" />
              <div className="p-2">
                <h3 className='text-base font-medium'>শুরু হয়েছে শীতের মৌসুম, শীতের ফুলে রঙিন প্রকৃতি</h3>
                <p className='flex items-center border-l-2 border-orange-500 gap-1 mt-2'><MdAccessTime className='text-orange-500 ml-2'/><span>১ বছর আগে</span></p>
              </div>
            </div>
            <div className="bg-slate-100">
              <img src={card} alt="" />
              <div className="p-2">
                <h3 className='text-base font-medium'>শুরু হয়েছে শীতের মৌসুম, শীতের ফুলে রঙিন প্রকৃতি</h3>
                <p className='flex items-center border-l-2 border-orange-500 gap-1 mt-2'><MdAccessTime className='text-orange-500 ml-2'/><span>১ বছর আগে</span></p>
              </div>
            </div>
            <div className="bg-slate-100">
              <img src={card} alt="" />
              <div className="p-2">
                <h3 className='text-base font-medium'>শুরু হয়েছে শীতের মৌসুম, শীতের ফুলে রঙিন প্রকৃতি</h3>
                <p className='flex items-center border-l-2 border-orange-500 gap-1 mt-2'><MdAccessTime className='text-orange-500 ml-2'/><span>১ বছর আগে</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* home right site */}
        <div className="flex-none xl:w-72 h-60 text-white flex justify-between xl:flex-col gap-4">

          <p className='bg-slate-500 p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic eos repudiandae tenetur in perspiciatis ut fugiat, rem sequi inventore libero odit ipsum omnis facilis repellat dicta rerum a ea!</p>
          
          {/* ফেসবুকে আমরা */}
          <div className="space-y-4">
            <div className="bg-gray-300 text-black font-semibold border-l-4 border-orange-500">
              <p className='text-base ml-1 p-2'>ফেসবুকে আমরা</p>
            </div>
            <div className="relative group">
              <div className="">
                {/* <img src={cardFacebook} alt="" /> */}
                <img src={twitter} alt="" />
              </div>
              <div className="absolute w-full top-0 pl-2 bg-white/30 backdrop-blur-sm">
                <Link to='https://www.facebook.com/sunwingtourstravels/' target='_blank' className='flex items-center gap-2 p-1'>
                  <img className='size-10 rounded-full' src={card} alt="" />
                  <h3 className='cursor-pointer text-black text-base font-semibold hover:underline'>Sunwing Tours  & Travels</h3>
                </Link>
              </div>
              <div className="absolute flex justify-around w-full bottom-0 group-hover:bottom-4 transition-all ease-in-out duration-500">
                <Link className='bg-white/30 backdrop-blur-sm flex items-center py-1 px-2 gap-1 font-semibold'>
                  <FaFacebookSquare className='text-blue-800' />
                  <span className='text-black'>Facebook Page</span>
                </Link>
                <Link className='bg-white/30 backdrop-blur-sm flex items-center py-1 px-2 text-black gap-1 font-semibold'>
                  <FaShare />
                  <span>share</span>
                </Link>
              </div>
            </div>
          </div>

          {/* টুইটারে আমরা */}
          <div className="space-y-4">
            <div className="bg-gray-300 text-black font-semibold border-l-4 border-orange-500">
              <p className='text-base ml-1 p-2'>টুইটারে আমরা</p>
            </div>
            <div className="relative group">
              {/* <div className=""> */}
                <img className='' src={twitter} alt="" />
              {/* </div> */}
              <div className="absolute w-full top-0 pl-2 bg-white/30 backdrop-blur-sm">
                <Link to='https://www.facebook.com/sunwingtourstravels/' target='_blank' className='flex items-center gap-2 p-1'>
                  <img className='size-10 rounded-full' src={card} alt="" />
                  <h3 className='cursor-pointer text-black text-base font-semibold hover:underline'>@Sunwing Tours  & Travels</h3>
                </Link>
              </div>
              <div className="absolute flex justify-around w-full bottom-0 group-hover:bottom-4 transition-all ease-in-out duration-500">
                <Link className='bg-white/30 backdrop-blur-sm flex items-center py-1 px-2 gap-1 font-semibold'>
                  <span className='text-black font-semibold'>Follow</span>
                </Link>
                <Link className='bg-white/30 backdrop-blur-sm flex items-center py-1 px-2 text-black gap-1 font-semibold'>
                  <FaShare />
                  <span>share</span>
                </Link>
              </div>
            </div>
          </div>

          {/* পুরাতন সংবাদ */}
          <div className="">
            <div className="bg-gray-300 text-black font-semibold border-l-4 border-orange-500">
              <p className='text-base ml-1 p-2'>পুরাতন সংবাদ</p>
            </div>
            <div className="">
              <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs text-black p-2 border border-gray-500 my-4" />
              <button className='w-full bg-orange-500 p-2 text-center hover:bg-orange-400'>খুজুন</button>
            </div>
          </div>

        </div>
      </div>
      {/* <div className="flex items-center max-w-[49%] gap-6 py-6">
        <img src={customImg} alt="" />
        <img src={customImg} alt="" />
      </div>
      <div className="flex gap-5">
        <div className="">
          <div className="grow">
          <div className="bg-gray-300 text-black font-semibold border-l-4 border-orange-500 my-4">
            <p className='text-base ml-1 p-2'>জাতীয়</p>
          </div>
          <div className="flex gap-4">
            <div className="grow">
              <img src={homeSliderImg} alt="" />
            </div>
            <div className="flex-none w-72 p-4 bg-yellow-300">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic eos repudiandae tenetur in perspiciatis ut fugiat, rem sequi inventore libero odit ipsum omnis facilis repellat dicta rerum a ea!</p>
            </div>
          </div>
          </div>
        </div>
        <div className="flex-none w-72 h-60 text-white">
          <div className="bg-gray-300 text-black font-semibold border-l-4 border-orange-500 my-4">
            <p className='text-base ml-1 p-2'>রাজনীতি</p>
          </div>
          <p className='bg-slate-500 p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic eos repudiandae tenetur in perspiciatis ut fugiat, rem sequi inventore libero odit ipsum omnis facilis repellat dicta rerum a ea!</p>
        </div>
      </div> */}
    </div>
  );
};

export default Home;