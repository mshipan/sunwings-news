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

  const lastFiveNews = posts?.slice(0, 5);
  const popularNews = posts?.filter((post) => post.isPopular === true);

  const tabList = [
    { label: "সর্বশেষ সংবাদ", value: "" },
    { label: "আলোচিত সংবাদ", value: "" },
  ];
  return (
    <div className="grow text-white flex flex-col md:flex-row gap-6 container mx-auto">
      <div className="md:w-2/3">
        <div className="w-full md:max-w-[30rem] lg:max-w-[41rem] xl:max-w-[38rem] 2xl:max-w-[54rem]">
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
            className="mySwiper w-full"
          >
            {lastFiveNews?.map((post) => (
              <SwiperSlide key={post?._id}>
                <div className="relative h-fit">
                  <div className="h-[30rem]">
                    <img
                      src={post?.postThumbnail}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  <div className="absolute bottom-0 bg-black  w-full py-4 px-2">
                    <Link to={`/posts/${post?._id}`}>
                      <h1 className="text-white text-xl hover:text-orange-300 hover:underline">
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

          <div className="max-h-[300px] md:max-h-[400px] lg:max-h-[430px] xl:max-h-[425px] 2xl:max-h-[420px] overflow-y-scroll">
            <TabPanel className={"space-y-2"}>
              {posts?.map((post, i) => (
                <SmallNewsCard post={post} key={i} />
              ))}
            </TabPanel>
            <TabPanel>
              {popularNews?.map((post, i) => (
                <SmallNewsCard post={post} key={i} />
              ))}
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Banner;
