// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useGetPostsQuery } from "../../redux/features/allApis/postApi/postApi";
import CategoryTitle from "../shared/CategoryTitle";
const Gallery = () => {
  const { data: posts } = useGetPostsQuery({});
  const newArray = posts?.slice(0, 5);
  return (
    <div>
      <CategoryTitle title="ফটোগ্যালারী" />
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-3/4 mx-auto my-2"
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
