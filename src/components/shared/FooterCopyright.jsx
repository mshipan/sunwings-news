import { Link } from "react-router-dom";

const FooterCopyright = () => {
  return (
    <div className="container py-6 px-2 mx-auto bg-slate-800">
      <div className="text-center flex flex-row gap-1 justify-center">
        <span>© 2023 Copyright:</span>
        <Link className="font-semibold" to="https://tw-elements.com/">
          Sunwings Group
        </Link>
      </div>
    </div>
  );
};

export default FooterCopyright;
