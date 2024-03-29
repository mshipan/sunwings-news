import { useState } from "react";
import Banner240x32 from "../../../components/dashboard/media/advertisment/Banner240x32";
import Banner250x250 from "../../../components/dashboard/media/advertisment/Banner250x250";
import Banner1600x250 from "../../../components/dashboard/media/advertisment/Banner1600x250";
import AdvertisementCollection from "../../../components/dashboard/media/advertisment/AdvertisementCollection";
import { useGetAllAdvertisementQuery } from "../../../redux/features/allApis/advertisementApi/advertisementApi";
import BannerJatioTopLeft from "../../../components/dashboard/media/advertisment/BannerJatioTopLeft";
import BannerJatioTopRight from "../../../components/dashboard/media/advertisment/BannerJatioTopRight";
import BannerBinodonTopLeft from "../../../components/dashboard/media/advertisment/BannerBinodonTopLeft";
import BannerBinodonTopRight from "../../../components/dashboard/media/advertisment/BannerBinodonTopRight";
import BannerVIdeoTopLeft from "../../../components/dashboard/media/advertisment/BannerVIdeoTopLeft";
import BannerVideoTopRight from "../../../components/dashboard/media/advertisment/BannerVideoTopRight";
import BannerVideoBottomLeft from "../../../components/dashboard/media/advertisment/BannerVideoBottomLeft";
import BannerVideoBottomRight from "../../../components/dashboard/media/advertisment/BannerVideoBottomRight";
import { Helmet } from "react-helmet-async";

const Advertisment = () => {
  const [selectedPosition, setSelectedPosition] = useState("");
  const { data: allAdvert } = useGetAllAdvertisementQuery();

  const handleChange = (event) => {
    setSelectedPosition(event.target.value);
  };

  const filteredAdBesideTopLogo = allAdvert?.filter(
    (ad) => ad.position === "beside_top_logo"
  );

  const filteredAdBesideNewsSliderTopRightCorner = allAdvert?.filter(
    (ad) => ad.position === "beside_news_slider_top_right_corner"
  );

  const filteredAdJatioCategoryTopLeft = allAdvert?.filter(
    (ad) => ad.position === "jatio_category_top_left"
  );

  const filteredAdJatioCategoryTopRight = allAdvert?.filter(
    (ad) => ad.position === "jatio_category_top_right"
  );

  const filteredAdCenterHomePage = allAdvert?.filter(
    (ad) => ad.position === "center_home_page"
  );

  const filteredAdBinodonCategoryTopLeft = allAdvert?.filter(
    (ad) => ad.position === "binodon_category_top_left"
  );

  const filteredAdBinodonCategoryTopRight = allAdvert?.filter(
    (ad) => ad.position === "binodon_category_top_right"
  );

  const filteredAdVideoTopLeft = allAdvert?.filter(
    (ad) => ad.position === "video_section_top_left"
  );

  const filteredAdVideoTopRight = allAdvert?.filter(
    (ad) => ad.position === "video_section_top_right"
  );

  const filteredAdVideoBottomLeft = allAdvert?.filter(
    (ad) => ad.position === "video_section_bottom_left"
  );

  const filteredAdVideoBottomRight = allAdvert?.filter(
    (ad) => ad.position === "video_section_bottom_right"
  );

  return (
    <div>
      <Helmet>
        <title>Sunwings | Advertisement</title>
      </Helmet>
      <h1 className="text-black text-2xl mb-10">Customize Advertisement</h1>

      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-black text-2xl mb-2">Advertisement Position:</h1>
          <select
            name=""
            id=""
            onChange={handleChange}
            value={selectedPosition}
            className="bg-white border border-gray-500 px-3 py-2 text-black w-full md:w-1/2"
          >
            <option value="">Select Position...</option>
            <option value="beside_top_logo"> Beside Top Logo</option>
            <option value="beside_news_slider_top_right_corner">
              Beside News Slider Top Right Corner
            </option>
            <option value="jatio_category_top_left">
              Jatio Category Top Left
            </option>
            <option value="jatio_category_top_right">
              Jatio Category Top Right
            </option>
            <option value="center_home_page">Center of Home Page</option>
            <option value="binodon_category_top_left">
              Binodon Category Top Left
            </option>
            <option value="binodon_category_top_right">
              Binodon Category Top Right
            </option>
            <option value="video_section_top_left">
              Video Section Top Left
            </option>
            <option value="video_section_top_right">
              Video Section Top Right
            </option>
            <option value="video_section_bottom_left">
              Video Section Bottom Left
            </option>
            <option value="video_section_bottom_right">
              Video Section Bottom Right
            </option>
          </select>
        </div>

        {selectedPosition === "beside_top_logo" && (
          <div className="flex flex-col gap-4">
            <Banner240x32 />{" "}
            <h1 className="text-black text-2xl mb-5">
              Ad 240 X 32 Collections
            </h1>
            {filteredAdBesideTopLogo.length ? (
              <AdvertisementCollection data={filteredAdBesideTopLogo} />
            ) : (
              <p className="text-xl text-black">No data available</p>
            )}
          </div>
        )}

        {selectedPosition === "beside_news_slider_top_right_corner" && (
          <div className="flex flex-col gap-4">
            <Banner250x250 />
            <h1 className="text-black text-2xl mb-5">
              Ad 250 X 250 Collections
            </h1>
            {filteredAdBesideNewsSliderTopRightCorner.length ? (
              <AdvertisementCollection
                data={filteredAdBesideNewsSliderTopRightCorner}
              />
            ) : (
              <p className="text-xl text-black">No data available</p>
            )}
          </div>
        )}

        {selectedPosition === "jatio_category_top_left" && (
          <div className="flex flex-col gap-4">
            <BannerJatioTopLeft />
            <h1 className="text-black text-2xl mb-5">
              Ad Jatio Category Top Left Collections
            </h1>
            {filteredAdJatioCategoryTopLeft.length ? (
              <AdvertisementCollection data={filteredAdJatioCategoryTopLeft} />
            ) : (
              <p className="text-xl text-black">No data available</p>
            )}
          </div>
        )}

        {selectedPosition === "jatio_category_top_right" && (
          <div className="flex flex-col gap-4">
            <BannerJatioTopRight />
            <h1 className="text-black text-2xl mb-5">
              Ad Jatio Category Top Right Collections
            </h1>
            {filteredAdJatioCategoryTopRight.length ? (
              <AdvertisementCollection data={filteredAdJatioCategoryTopRight} />
            ) : (
              <p className="text-xl text-black">No data available</p>
            )}
          </div>
        )}

        {selectedPosition === "center_home_page" && (
          <div className="flex flex-col gap-4">
            <Banner1600x250 />
            <h1 className="text-black text-2xl mb-5">
              Ad Center of Home Page Collections
            </h1>
            {filteredAdCenterHomePage.length ? (
              <AdvertisementCollection data={filteredAdCenterHomePage} />
            ) : (
              <p className="text-xl text-black">No data available</p>
            )}
          </div>
        )}

        {selectedPosition === "binodon_category_top_left" && (
          <div className="flex flex-col gap-4">
            <BannerBinodonTopLeft />
            <h1 className="text-black text-2xl mb-5">
              Ad Binodon Category Top Left Collections
            </h1>
            {filteredAdBinodonCategoryTopLeft.length ? (
              <AdvertisementCollection
                data={filteredAdBinodonCategoryTopLeft}
              />
            ) : (
              <p className="text-xl text-black">No data available</p>
            )}
          </div>
        )}

        {selectedPosition === "binodon_category_top_right" && (
          <div className="flex flex-col gap-4">
            <BannerBinodonTopRight />
            <h1 className="text-black text-2xl mb-5">
              Ad Binodon Category Top Right Collections
            </h1>
            {filteredAdBinodonCategoryTopRight.length ? (
              <AdvertisementCollection
                data={filteredAdBinodonCategoryTopRight}
              />
            ) : (
              <p className="text-xl text-black">No data available</p>
            )}
          </div>
        )}

        {selectedPosition === "video_section_top_left" && (
          <div className="flex flex-col gap-4">
            <BannerVIdeoTopLeft />
            <h1 className="text-black text-2xl mb-5">
              Ad Video Section Top Left Collections
            </h1>
            {filteredAdVideoTopLeft.length ? (
              <AdvertisementCollection data={filteredAdVideoTopLeft} />
            ) : (
              <p className="text-xl text-black">No data available</p>
            )}
          </div>
        )}

        {selectedPosition === "video_section_top_right" && (
          <div className="flex flex-col gap-4">
            <BannerVideoTopRight />
            <h1 className="text-black text-2xl mb-5">
              Ad Video Section Top Right Collections
            </h1>
            {filteredAdVideoTopRight.length ? (
              <AdvertisementCollection data={filteredAdVideoTopRight} />
            ) : (
              <p className="text-xl text-black">No data available</p>
            )}
          </div>
        )}

        {selectedPosition === "video_section_bottom_left" && (
          <div className="flex flex-col gap-4">
            <BannerVideoBottomLeft />
            <h1 className="text-black text-2xl mb-5">
              Ad Video Section Bottom Left Collections
            </h1>
            {filteredAdVideoBottomLeft.length ? (
              <AdvertisementCollection data={filteredAdVideoBottomLeft} />
            ) : (
              <p className="text-xl text-black">No data available</p>
            )}
          </div>
        )}

        {selectedPosition === "video_section_bottom_right" && (
          <div className="flex flex-col gap-4">
            <BannerVideoBottomRight />
            <h1 className="text-black text-2xl mb-5">
              Ad Video Section Bottom Right Collections
            </h1>
            {filteredAdVideoBottomRight.length ? (
              <AdvertisementCollection data={filteredAdVideoBottomRight} />
            ) : (
              <p className="text-xl text-black">No data available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Advertisment;
