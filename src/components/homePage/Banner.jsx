import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useGetPostsQuery } from "../../redux/features/allApis/postApi/postApi";

const Banner = () => {
  const { data: allPosts } = useGetPostsQuery({});
  console.log("all", allPosts);
  return (
    <div className="grow text-white flex flex-col md:flex-row gap-6">
      <div className="">
        <div className="w-full md:max-w-[25rem] lg:max-w-2xl xl:max-w-[38rem] 2xl:max-w-[54rem]">
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
            {allPosts?.map((post) => (
              <SwiperSlide key={post?._id}>
                <div className="relative">
                  <div>
                    <img src={post?.postThumbnail} alt="" className="w-full" />
                  </div>
                  <div className="absolute bottom-0 bg-gray-500 bg-opacity-35 w-full">
                    <h1 className="text-black text-xl">{post?.postTitle}</h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex-none md:w-80 p-4 bg-yellow-300 w-full ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic eos
          repudiandae tenetur in perspiciatis ut fugiat, rem sequi inventore
          libero odit ipsum omnis facilis repellat dicta rerum a ea!
        </p>
      </div>
    </div>
  );
};

export default Banner;
