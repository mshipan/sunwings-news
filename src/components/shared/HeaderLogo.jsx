import HomeLogo1 from "../../assets/logo1.png";
import { useGetAllAdvertisementQuery } from "../../redux/features/allApis/advertisementApi/advertisementApi";
import { useGetAllLogoQuery } from "../../redux/features/allApis/logoApi/logoApi";

import Advertisement from "./Advertisement";

const LogoSection = () => {
  const { data: allLogos } = useGetAllLogoQuery();
  const { data: allAds } = useGetAllAdvertisementQuery();

  const selectedLogo = allLogos
    ? allLogos.find((logo) => logo.isSelected === true)
    : null;

  const adBesideTopLogo = allAds
    ? allAds.find(
        (ad) => ad.isSelected === true && ad.position === "beside_top_logo"
      )
    : null;

  return (
    <div className="container mx-auto py-5">
      <div className="flex justify-between gap-3">
        <div className="w-4/12 rounded hidden md:block">
          {selectedLogo ? (
            <img src={selectedLogo.logo} alt="Logo" className="w-full h-28" />
          ) : (
            <img src={HomeLogo1} alt="" className="w-full h-28" />
          )}
        </div>
        <div className="w-full md:w-8/12 rounded">
          <Advertisement selectedAd={adBesideTopLogo} />
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
