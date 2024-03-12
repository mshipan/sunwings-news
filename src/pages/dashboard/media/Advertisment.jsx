import { useState } from "react";
import Banner240x32 from "../../../components/dashboard/media/advertisment/Banner240x32";
import Banner250x250 from "../../../components/dashboard/media/advertisment/Banner250x250";
import Banner1600x250 from "../../../components/dashboard/media/advertisment/Banner1600x250";
import AdvertisementCollection from "../../../components/dashboard/media/advertisment/AdvertisementCollection";
import { useGetAllAdvertisementQuery } from "../../../redux/features/allApis/advertisementApi/advertisementApi";

const Advertisment = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const { data: allAdvert } = useGetAllAdvertisementQuery();

  const handleChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const filteredAd240x32 = allAdvert?.filter((ad) => ad.size === "240x32");

  const filteredAd250x250 = allAdvert?.filter((ad) => ad.size === "250x250");

  const filteredAd1600x250 = allAdvert?.filter((ad) => ad.size === "1600x250");

  return (
    <div>
      <h1 className="text-black text-2xl mb-10">Customize Advertisement</h1>

      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-black text-2xl mb-2">Advertisement Size:</h1>
          <select
            name=""
            id=""
            onChange={handleChange}
            value={selectedSize}
            className="bg-white border border-gray-500 px-3 py-2 text-black w-full md:w-1/2"
          >
            <option value="">Select Size</option>
            <option value="240x32">Advertisement 240x32</option>
            <option value="250x250">Advertisement 250x250</option>
            <option value="1600x250">Advertisement 1600x250</option>
          </select>
        </div>

        {selectedSize === "240x32" && (
          <div className="flex flex-col gap-4">
            <Banner240x32 />{" "}
            <h1 className="text-black text-2xl mb-5">
              Ad 240 X 32 Collections
            </h1>
            {filteredAd240x32.length ? (
              <AdvertisementCollection data={filteredAd240x32} />
            ) : (
              <p className="text-xl text-black">No data available</p>
            )}
          </div>
        )}
        {selectedSize === "250x250" && (
          <div className="flex flex-col gap-4">
            <Banner250x250 />
            <h1 className="text-black text-2xl mb-5">
              Ad 250 X 250 Collections
            </h1>
            {filteredAd250x250.length ? (
              <AdvertisementCollection data={filteredAd250x250} />
            ) : (
              <p className="text-xl text-black">No data available</p>
            )}
          </div>
        )}
        {selectedSize === "1600x250" && (
          <div className="flex flex-col gap-4">
            <Banner1600x250 />
            <h1 className="text-black text-2xl mb-5">
              Ad 1600 X 250 Collections
            </h1>
            {filteredAd1600x250.length ? (
              <AdvertisementCollection data={filteredAd1600x250} />
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
