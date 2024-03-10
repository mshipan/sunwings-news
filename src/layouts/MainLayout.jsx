import HeaderTop from "../components/shared/HeaderTop";
import HeaderLogo from "../components/shared/HeaderLogo";
import HeaderMenu from "../components/shared/HeaderMenu";
import FooterArea from "../components/shared/FooterArea";
import FooterCopyright from "../components/shared/FooterCopyright";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-white">
      {/* header top */}
      <HeaderTop />
      {/* header logo */}
      <HeaderLogo/>
      {/* header manu */}
      <HeaderMenu/>
      {/* outlet */}
      <Outlet/>
      {/* footer area */}
      <FooterArea/>
      {/* footer copyright */}
      <FooterCopyright/>
      <HeaderLogo />
      {/* header menu */}
      <HeaderMenu />
      {/* footer area */}
      <FooterArea />
    </div>
  );
};

export default MainLayout;
