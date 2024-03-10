import { Link } from "react-router-dom";


const FooterCopyright = () => {
  return (
    <div className="container py-6 px-2 mx-auto bg-slate-800">
      <ul className="flex justify-between items-center text-center gap-2 text-gray-300 flex-col md:flex-row">
        <li>© All rights reserved © Sunwings Tours & Travels</li>
        <li>NewsScript Developed BY <Link className="underline hover:text-gray-400">sunwingsairfly.com/</Link></li>
      </ul>
    </div>
  );
};

export default FooterCopyright;