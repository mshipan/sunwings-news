import { Link } from "react-router-dom";


const FooterArea = () => {
  return (
    <div className="container mx-auto py-4 px-2 bg-slate-700">
      <div className="border-b border-gray-600">
        <ul className="flex justify-center flex-wrap cursor-pointer py-6">
          <li className="group active">
            <Link to="#" className="flex items-center py-2 px-4 border border-transparent hover:border hover:border-green-200 text-gray-300 hover:text-gray-100">
              <span className="text-base select-none">আমাদের সম্পর্কে</span>
            </Link>
          </li>
          <li className="group active">
            <Link to="#" className="flex items-center py-2 px-4 border border-transparent hover:border hover:border-green-200 text-gray-300 hover:text-gray-100">
              <span className="text-base select-none">সাইটম্যাপ</span>
            </Link>
          </li>
          <li className="group active">
            <Link to="#" className="flex items-center py-2 px-4 border border-transparent hover:border hover:border-gray-200 text-gray-300 hover:text-gray-100">
              <span className="text-base select-none">আরএসএস</span>
            </Link>
          </li>
          <li className="group active">
            <Link to="#" className="flex items-center py-2 px-4 border border-transparent hover:border hover:border-gray-200 text-gray-300 hover:text-gray-100">
              <span className="text-base select-none"> ভিডিও গ্যালারী </span>
            </Link>
          </li>
          <li className="group active">
            <Link to="#" className="flex items-center py-2 px-4 border border-transparent hover:border hover:border-gray-200 text-gray-300 hover:text-gray-100">
              <span className="text-base select-none"> ফটোগ্যালারী </span>
            </Link>
          </li>
          <li className="group active">
            <Link to="#" className="flex items-center py-2 px-4 border border-transparent hover:border hover:border-gray-200 text-gray-300 hover:text-gray-100">
              <span className="text-base select-none"> আমাদের পরিবার </span>
            </Link>
          </li>
          <li className="group active">
            <Link to="#" className="flex items-center py-2 px-4 border border-transparent hover:border hover:border-gray-200 text-gray-300 hover:text-gray-100">
              <span className="text-base select-none"> সকল নিউজ </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-evenly gap-6 mt-12 flex-col md:flex-row">
        <div className="">
          <h2 className="border-b-2 border-orange-500 text-lg text-gray-100">সম্পাদকীয়</h2>
          <ul className="mt-4">
            <li className="text-gray-300 hover:text-gray-100 py-1">সম্পাদক ও প্রকাশক : আব্দুল হাসিম চৌধুরী</li>
            <li className="text-gray-300 hover:text-gray-100 py-1">নির্বাহী সম্পাদক : আবু রায়হান</li>
            <li className="text-gray-300 hover:text-gray-100 py-1">বার্তা সম্পাদক : আবু হুরায়রা চৌধুরী</li>
          </ul>
        </div>
        <div className="">
          <h2 className="border-b-2 border-orange-500 text-lg text-gray-100">অফিস</h2>
          <ul className="mt-4">
            <li className="text-gray-300 hover:text-gray-100 py-1">অফিস : মিরপুর, ঢাকা, বাংলাদেশ-১২১৬</li>
            <li className="text-gray-300 hover:text-gray-100 py-1">ইমেইল : vismodeb2000@gamil.com</li>
            <li className="text-gray-300 hover:text-gray-100 py-1">মোবাইল : 01737351549</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterArea;