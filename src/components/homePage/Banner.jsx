import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useGetPostsQuery } from "../../redux/features/allApis/postApi/postApi";

import { Link } from "react-router-dom";
import SmallNewsCard from "../shared/SmallNewsCard";

const Banner = () => {
  const { data: posts } = useGetPostsQuery({});

  const tabList = [
    { label: "সর্বশেষ সংবাদ", value: "" },
    { label: "আলোচিত সংবাদ", value: "" },
  ];
  return (
    <div className="grow text-white flex flex-col md:flex-row gap-6">
      <div className="md:w-2/3">
        <div className="w-full md:max-w-[30rem] lg:max-w-2xl xl:max-w-[38rem] 2xl:max-w-[54rem]">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={false}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {posts?.map((post) => (
              <SwiperSlide key={post?._id}>
                <div className="relative">
                  <div>
                    <img src={post?.postThumbnail} alt="" className="w-full" />
                  </div>
                  <div className="absolute bottom-0 bg-gray-500 bg-opacity-35 w-full py-5 px-2">
                    <Link to={`/posts/${post?._id}`}>
                      <h1 className="text-black text-xl hover:text-blue-600 hover:underline">
                        {post?.postTitle}
                      </h1>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="md:w-1/3 text-black text-sm md:text-lg">
        {/* need to change the selected border radius */}
        <Tabs
          defaultFocus={false}
          selectedTabClassName="bg-[#022831] text-white border-[#046279] rounded-none"
        >
          <TabList
            className={
              "flex flex-row justify-center items-center text-[#022831] bg-[#ddd] text-[17px]"
            }
          >
            {tabList.map((tab, i) => (
              <Tab
                className="p-[10px] w-full flex items-center justify-center border-t-[3px] border-solid border-[#022940] rounded-none cursor-pointer"
                key={i}
              >
                {tab.label}
              </Tab>
            ))}
          </TabList>

          <div className="max-h-[300px] md:max-h-[195px] lg:max-h-[333px] xl:max-h-[295px] 2xl:max-h-[420px] overflow-y-scroll">
            <TabPanel className={"space-y-2"}>
              {posts?.map((post, i) => (
                <SmallNewsCard post={post} key={i} />
              ))}
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Banner;
