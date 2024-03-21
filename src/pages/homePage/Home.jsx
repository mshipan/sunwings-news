import card from "../../assets/home-slider.jpg";
import { Link } from "react-router-dom";
import NewsContent from "../../components/homePage/NewsContent";
import fullImg from "../../assets/2.png";
import { CiVideoOn } from "react-icons/ci";
import Banner from "../../components/homePage/Banner";
import Aside from "../../components/homePage/Aside";
import Advertisement from "../../components/shared/Advertisement";
import MiddleCategorySec from "../../components/homePage/MiddleCategorySec";
import AllNews from "../../components/homePage/AllNews";
import EntertainmentSection from "../../components/homePage/EntertainmentSection";
import { useGetAllAdvertisementQuery } from "../../redux/features/allApis/advertisementApi/advertisementApi";
import Gallery from "../../components/homePage/Gallery";
import { Helmet } from "react-helmet-async";
import { useGetPostsQuery } from "../../redux/features/allApis/postApi/postApi";
import CategorizedNews from "../../components/homePage/CategorizedNews";

const Home = () => {
  const { data: allAds } = useGetAllAdvertisementQuery();
  const { data: nationalNews, isLoading: nationalLoading } = useGetPostsQuery({
    category: "সারাদেশ",
  });

  const adCenterOfHomePage = allAds
    ? allAds.find(
        (ad) => ad.isSelected === true && ad.position === "center_home_page"
      )
    : null;

  const adJatioCategoryTopLeft = allAds
    ? allAds.find(
        (ad) =>
          ad.isSelected === true && ad.position === "jatio_category_top_left"
      )
    : null;

  const adJatioCategoryTopRight = allAds
    ? allAds.find(
        (ad) =>
          ad.isSelected === true && ad.position === "jatio_category_top_right"
      )
    : null;

  const adBinodonCategoryTopLeft = allAds
    ? allAds.find(
        (ad) =>
          ad.isSelected === true && ad.position === "binodon_category_top_left"
      )
    : null;

  const adBinodonCategoryTopRight = allAds
    ? allAds.find(
        (ad) =>
          ad.isSelected === true && ad.position === "binodon_category_top_right"
      )
    : null;

  const adVideoSectionTopLeft = allAds
    ? allAds.find(
        (ad) =>
          ad.isSelected === true && ad.position === "video_section_top_left"
      )
    : null;

  const adVideoSectionTopRight = allAds
    ? allAds.find(
        (ad) =>
          ad.isSelected === true && ad.position === "video_section_top_right"
      )
    : null;

  const adVideoSectionBottomLeft = allAds
    ? allAds.find(
        (ad) =>
          ad.isSelected === true && ad.position === "video_section_bottom_left"
      )
    : null;

  const adVideoSectionBottomRight = allAds
    ? allAds.find(
        (ad) =>
          ad.isSelected === true && ad.position === "video_section_bottom_right"
      )
    : null;
  return (
    <div className="container mx-auto px-2">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="flex gap-5 xl:flex-row flex-col">
        {/* home left site */}
        <div>
          {/* banner section */}
          <Banner />
          {/* all posts section  */}
          <AllNews />
        </div>
        {/* home right site */}
        <Aside />
      </div>
      <div className="flex-col lg:flex-row flex items-center gap-4 py-4">
        <Advertisement selectedAd={adJatioCategoryTopLeft} />
        <Advertisement selectedAd={adJatioCategoryTopRight} />
      </div>
      <NewsContent />

      <div className="py-4">
        {adCenterOfHomePage ? (
          <img
            src={adCenterOfHomePage?.banner}
            alt="AdvertiseMent"
            className="w-full h-28"
          />
        ) : (
          <img src={fullImg} alt="Advertisement big" className="w-full h-28" />
        )}
      </div>
      {/* middle category section */}
      <MiddleCategorySec />

      <div className="flex-col lg:flex-row flex items-center gap-4 py-4">
        <Advertisement selectedAd={adBinodonCategoryTopLeft} />
        <Advertisement selectedAd={adBinodonCategoryTopRight} />
      </div>

      <EntertainmentSection />

      <div className="flex-col lg:flex-row flex items-center gap-4 py-4">
        <Advertisement selectedAd={adVideoSectionTopLeft} />
        <Advertisement selectedAd={adVideoSectionTopRight} />
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

      {/* <NewsContent /> */}

      <div className="flex-col lg:flex-row flex items-center gap-4 py-4">
        <Advertisement selectedAd={adVideoSectionBottomLeft} />
        <Advertisement selectedAd={adVideoSectionBottomRight} />
      </div>

      <div className="flex flex-row gap-3">
        <div className="w-2/3">
          <Gallery />
        </div>
        <div className="w-1/3">
          <CategorizedNews
            secTitle={"সারাদেশ"}
            news={nationalNews}
            loading={nationalLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
