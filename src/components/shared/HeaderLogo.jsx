import HomeLogo1 from "../../assets/logo1.png";
import { useGetAllLogoQuery } from "../../redux/features/allApis/logoApi/logoApi";

import Advertisement from "./Advertisement";

const LogoSection = () => {
  const { data: allLogos } = useGetAllLogoQuery();

  const selectedLogo = allLogos
    ? allLogos.find((logo) => logo.isSelected === true)
    : null;

  return (
    <div className="container mx-auto py-4">
      <div className="flex justify-between gap-3">
        <div className="w-4/12 rounded hidden md:block">
          {selectedLogo ? (
            <img src={selectedLogo.logo} alt="Logo" className="w-full h-28" />
          ) : (
            <img src={HomeLogo1} alt="" className="w-full h-28" />
          )}
        </div>
        <div className="w-full md:w-8/12 rounded">
          <Advertisement />
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
