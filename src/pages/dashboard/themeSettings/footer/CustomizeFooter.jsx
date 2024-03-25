import { Helmet } from "react-helmet-async";
import FooterContent from "./FooterContent";
import FooterTheme from "./FooterTheme";

const CustomizeFooter = () => {
  return (
    <div>
      <Helmet>
        <title>Sunwings | Customize Footer</title>
      </Helmet>
      <div className="mb-4">
        <h1 className="text-black text-2xl">Customize Footer</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-1/2">
          <FooterContent />
        </div>
        <div className="w-1/2">
          <FooterTheme />
        </div>
      </div>
    </div>
  );
};

export default CustomizeFooter;
