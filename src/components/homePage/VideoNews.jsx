import { CiVideoOn } from "react-icons/ci";
import card from "../../assets/home-slider.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

const VideoNews = () => {
  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  };
  return (
    <div className="bg-gray-500 text-gray-200 flex gap-4 flex-col md:flex-col lg:flex-row">
      <div className="p-10 bg-gray-700 flex flex-col items-center md:items-start w-full md:w-full lg:w-1/2">
        <div className="text-white font-semibold mb-4">
          <div className="flex items-center gap-2">
            <div className="relative h-6 w-6 flex items-center justify-center">
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></div>

              <CiVideoOn className="text-lg" />
            </div>
            <span>ভিডিও লিড</span>
          </div>
        </div>
        <img className="w-full" src={card} alt="" />
      </div>
      <div className="p-6 w-full md:w-full lg:w-1/2">
        <Tabs>
          <TabList className="flex gap-4 font-medium text-xs md:text-base">
            <Tab className="border p-2 bg-orange-500 hover:bg-red-500 cursor-pointer">
              ভিডিও নিউজ
            </Tab>
            <Tab className="border p-2 bg-orange-500 hover:bg-red-500 cursor-pointer">
              ভিডিও বিনোদন
            </Tab>
            <Tab className="border p-2 bg-orange-500 hover:bg-red-500 cursor-pointer">
              ভিডিও টকশো
            </Tab>
          </TabList>

          <TabPanel className="mt-5">
            <div className="max-w-3xl">
              <Swiper
                breakpoints={breakpoints}
                spaceBetween={30}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                loop={true}
                modules={[Autoplay, FreeMode, Navigation, Pagination]}
                className="mySwiper h-72 lg:h-60 xl:h-80 2xl:h-96"
              >
                <SwiperSlide>
                  <img src={card} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="max-w-3xl">
              <Swiper
                breakpoints={breakpoints}
                spaceBetween={30}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                loop={true}
                modules={[Autoplay, FreeMode, Navigation, Pagination]}
                className="mySwiper h-72 lg:h-60 xl:h-80 2xl:h-96"
              >
                <SwiperSlide>
                  <img src={card} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="max-w-3xl">
              <Swiper
                breakpoints={breakpoints}
                spaceBetween={30}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                loop={true}
                modules={[Autoplay, FreeMode, Navigation, Pagination]}
                className="mySwiper h-72 lg:h-60 xl:h-80 2xl:h-96"
              >
                <SwiperSlide>
                  <img src={card} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={card} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default VideoNews;
