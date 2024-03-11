import LogoCollection from "../../../components/dashboard/media/customizeLogo/LogoCollection";
import UploadLogo from "../../../components/dashboard/media/customizeLogo/UploadLogo";

const CustomizeLogo = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-black text-2xl mb-5">Customize logo</h1>
      <div className="flex flex-col gap-5">
        <UploadLogo />
        <h1 className="text-black text-2xl mb-5">Logo Collections</h1>
        <LogoCollection />
      </div>
    </div>
  );
};

export default CustomizeLogo;
