import HeaderTop from "../components/shared/HeaderTop";
import HeaderLogo from "../components/shared/HeaderLogo";
import HeaderMenu from "../components/shared/HeaderMenu";
import FooterArea from "../components/shared/FooterArea";

const MainLayout = () => {
  return (
    <div className="bg-white">
      {/* header top */}
      <HeaderTop/>
      {/* header logo */}
      <HeaderLogo/>
      {/* header manu */}
      <HeaderMenu/>
      {/* footer area */}
      <FooterArea/>
    </div>
  );
};

export default MainLayout;