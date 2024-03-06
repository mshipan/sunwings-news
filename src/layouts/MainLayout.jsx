import HeaderTop from "../components/shared/HeaderTop";
import HeaderLogo from "../components/shared/HeaderLogo";
import HeaderMenu from "../components/shared/HeaderMenu";

const MainLayout = () => {
  return (
    <div className="">
      {/* header top */}
      <HeaderTop/>
      {/* header logo */}
      <HeaderLogo/>
      {/* header manu */}
      <HeaderMenu/>
    </div>
  );
};

export default MainLayout;