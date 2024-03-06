import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { TiHomeOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center bg-black px-2">
        <ul className="flex flex-wrap cursor-pointer">
          <li className="group active">
            <Link to="#" className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100">
            <TiHomeOutline className="mr-2 text-lg" />
              <span className="text-base select-none">প্রচ্ছদ</span>
            </Link>
          </li>
          <li className="group">
            <div className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100 dropdown-toggle">
              <span className="text-base select-none mr-2">জাতীয়</span>
              <IoIosArrowDown className="ml-auto" />
            </div>
            {/* <ul className='pl-7 mt-2'>
              <li className="mb-4">
                <Link to="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 select-none">অপরাধ</Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 select-none">অর্থনীতি</Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 select-none">বিশেষ প্রতিবেদন</Link>
              </li>
            </ul> */}
          </li>
          <li className="group">
            <div className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100 dropdown-toggle">
              <span className="text-base select-none mr-2">রাজনীতি</span>
              <IoIosArrowDown className="ml-auto" />
            </div>
          </li>
          <li className="group">
            <div className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100 dropdown-toggle">
              <span className="text-base select-none mr-2">আন্তর্জাতিক</span>
              <IoIosArrowDown className="ml-auto" />
            </div>
          </li>
          <li className="group">
            <div className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100 dropdown-toggle">
              <span className="text-base select-none mr-2">খেলাধুলা</span>
              <IoIosArrowDown className="ml-auto" />
            </div>
          </li>
          <li className="group">
            <div className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100 dropdown-toggle">
              <span className="text-base select-none mr-2">বিনোদন</span>
              <IoIosArrowDown className="ml-auto" />
            </div>
          </li>
          <li className="group active">
            <Link to="#" className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100">
              <span className="text-base select-none">তথ্যপ্রযুক্তি</span>
            </Link>
          </li>
          <li className="group active">
            <Link to="#" className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100">
              <span className="text-base select-none">সারাদেশ</span>
            </Link>
          </li>
          <li className="group active">
            <Link to="#" className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100">
              <span className="text-base select-none">ক্যাম্পাস</span>
            </Link>
          </li>
          <li className="group active">
            <Link to="#" className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100">
              <span className="text-base select-none">গণমাধ্যম</span>
            </Link>
          </li>
          <li className="group">
            <div className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100 dropdown-toggle">
              <span className="text-base select-none mr-2">আরো</span>
              <IoIosArrowDown className="ml-auto" />
            </div>
          </li>
        </ul>
        <div className="">
          <FaSearch className="text-white cursor-pointer"/>
        </div>
      </div>
      <div className="flex py-5">
        <div className="bg-orange-500 text-white w-2/12 h-10 flex justify-center items-center">
          <h3 className="">সংবাদ শিরোনাম :</h3>
        </div>
        <div className="bg-gray-400 w-10/12 h-10"></div>
      </div>
    </div>
  );
};

export default HeaderLogo;