import { Link } from "react-router-dom";
import { useGetFooterQuery } from "../../redux/features/allApis/footerApi/footerApi";

const FooterCopyright = () => {
  const { data: allFooters } = useGetFooterQuery();
  const singleFooter = allFooters?.[0];

  const currentYear = new Date().getFullYear();
  return (
    <div className="container py-6 px-2 mx-auto bg-slate-800">
      <div className="text-center flex flex-row gap-1 justify-center">
        <span>© {currentYear} Copyright:</span>
        <Link className="font-semibold" to={singleFooter?.copyrightLink}>
          {singleFooter?.copyrightText}
        </Link>
      </div>
    </div>
  );
};

export default FooterCopyright;
