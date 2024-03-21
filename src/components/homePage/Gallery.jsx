// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";
// import required modules
import {
  FreeMode,
  Thumbs,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import { useGetPostsQuery } from "../../redux/features/allApis/postApi/postApi";
import CategoryTitle from "../shared/CategoryTitle";
import { useState } from "react";
const Gallery = () => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { data: posts } = useGetPostsQuery({});
  console.log(posts);
  const newArray = posts?.slice(0, 5);
  return (
    <div>
      <CategoryTitle title="ফটোগ্যালারী" />
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        // thumbs={{ swiper: thumbsSwiper }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Thumbs, Autoplay, Pagination, Navigation]}
        className="mySwiper w-full mx-auto my-2"
      >
        {newArray?.map((item, i) => (
          <SwiperSlide key={i}>
            <img src={item?.postThumbnail} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {newArray?.map((item, i) => (
          <SwiperSlide key={i}>
            <img src={item?.postThumbnail} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
