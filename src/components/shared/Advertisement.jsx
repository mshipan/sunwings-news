import customImg from "../../assets/HomeBanner1.png";
import { useGetAllAdvertisementQuery } from "../../redux/features/allApis/advertisementApi/advertisementApi";

const Advertisement = () => {
  const { data: allAds } = useGetAllAdvertisementQuery();

  const selectedAd = allAds
    ? allAds.find((ad) => ad.isSelected === true && ad.size === "240x32")
    : null;
  return (
    <div>
      {selectedAd ? (
        <img
          src={selectedAd.banner}
          alt="AdvertiseMent"
          className="w-full h-28"
        />
      ) : (
        <img src={customImg} alt="" className="w-full h-28" />
      )}
    </div>
  );
};

export default Advertisement;
