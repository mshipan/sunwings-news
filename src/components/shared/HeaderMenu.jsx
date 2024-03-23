import { IoIosArrowDown } from "react-icons/io";
import { TiHomeOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { singleCategory } from "../../api/fetch";
import { useState } from "react";
import Headline from "../homePage/Headline";
import Marquee from "react-fast-marquee";
import { useGetAllLogoQuery } from "../../redux/features/allApis/logoApi/logoApi";
import { MdMenu } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";

const HeaderLogo = () => {
  const [subCategoryItems, setSubcategoryItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: allLogos } = useGetAllLogoQuery();

  const selectedLogo = allLogos
    ? allLogos.find((logo) => logo.isSelected === true)
    : null;
  // console.log(subCategoryItems);
  const handleNavItems = (value) => {
    setActiveCategory(value);
    singleCategory(value)
      .then((data) => {
        setSubcategoryItems(data);
      })
      .catch();
  };

  const navItems = (
    <>
      <li className="group active">
        <Link
          to="/"
          className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100"
        >
          <TiHomeOutline className="mr-2 text-lg" />
          <span className="text-base select-none">প্রচ্ছদ</span>
        </Link>
      </li>
      <li
        onMouseEnter={() => handleNavItems("জাতীয়")}
        onMouseLeave={() => setActiveCategory(null)}
        className="group relative"
      >
        <div className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100 dropdown-toggle">
          <span className="text-base select-none mr-2">জাতীয়</span>
          <IoIosArrowDown className="ml-auto" />
        </div>
        {activeCategory === "জাতীয়" && subCategoryItems.length > 0 && (
          <ul className="absolute top-full left-0 bg-gray-800 text-gray-300 rounded-sm py-1 px-2 z-50">
            {subCategoryItems?.map((item, i) => (
              <Link to={`/sub-category/${item.subCategoryName}`} key={i}>
                {" "}
                <li className="py-2 px-3">{item.subCategoryName}</li>
              </Link>
            ))}
          </ul>
        )}
      </li>
      <li
        onMouseEnter={() => handleNavItems("রাজনীতি")}
        onMouseLeave={() => setActiveCategory(null)}
        className="group relative"
      >
        <div className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100 dropdown-toggle">
          <span className="text-base select-none mr-2">রাজনীতি</span>
          <IoIosArrowDown className="ml-auto" />
        </div>
        {activeCategory === "রাজনীতি" && subCategoryItems.length > 0 && (
          <ul className="absolute top-full left-0 bg-gray-800 text-gray-300 rounded-sm py-1 px-2 z-50">
            {subCategoryItems?.map((item, i) => (
              <Link to={`/sub-category/${item.subCategoryName}`} key={i}>
                {" "}
                <li className="py-2 px-3 z-10">{item.subCategoryName}</li>
              </Link>
            ))}
          </ul>
        )}
      </li>
      <li
        onMouseEnter={() => handleNavItems("আন্তর্জাতিক")}
        onMouseLeave={() => setActiveCategory(null)}
        className="group relative"
      >
        <div className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100 dropdown-toggle">
          <span className="text-base select-none mr-2">আন্তর্জাতিক</span>
          <IoIosArrowDown className="ml-auto" />
        </div>
        {activeCategory === "আন্তর্জাতিক" && subCategoryItems.length > 0 && (
          <ul className="absolute top-full left-0 bg-gray-800 text-gray-300 rounded-sm py-1 px-2 z-50">
            {subCategoryItems?.map((item, i) => (
              <Link to={`/sub-category/${item.subCategoryName}`} key={i}>
                {" "}
                <li className="py-2 px-3">{item.subCategoryName}</li>
              </Link>
            ))}
          </ul>
        )}
      </li>
      <li
        onMouseEnter={() => handleNavItems("খেলাধুলা")}
        onMouseLeave={() => setActiveCategory(null)}
        className="group relative"
      >
        <div className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100 dropdown-toggle">
          <span className="text-base select-none mr-2">খেলাধুলা</span>
          <IoIosArrowDown className="ml-auto" />
        </div>
        {activeCategory === "খেলাধুলা" && subCategoryItems.length > 0 && (
          <ul className="absolute top-full left-0 bg-gray-800 text-gray-300 rounded-sm py-1 px-2 z-50">
            {subCategoryItems?.map((item, i) => (
              <Link to={`/sub-category/${item.subCategoryName}`} key={i}>
                {" "}
                <li className="py-2 px-3">{item.subCategoryName}</li>
              </Link>
            ))}
          </ul>
        )}
      </li>
      <li
        onMouseEnter={() => handleNavItems("বিনোদন")}
        onMouseLeave={() => setActiveCategory(null)}
        className="group relative"
      >
        <div className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100 dropdown-toggle">
          <span className="text-base select-none mr-2">বিনোদন</span>
          <IoIosArrowDown className="ml-auto" />
        </div>
        {activeCategory === "বিনোদন" && subCategoryItems.length > 0 && (
          <ul className="absolute top-full left-0 bg-gray-800 text-gray-300 rounded-sm py-1 px-2 z-50">
            {subCategoryItems?.map((item, i) => (
              <Link to={`/sub-category/${item.subCategoryName}`} key={i}>
                {" "}
                <li className="py-2 px-3">{item.subCategoryName}</li>
              </Link>
            ))}
          </ul>
        )}
      </li>
      <li
        onMouseEnter={() => handleNavItems("তথ্যপ্রযুক্তি")}
        onMouseLeave={() => setActiveCategory(null)}
        className="group relative"
      >
        <div className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100 dropdown-toggle">
          <span className="text-base select-none mr-2">তথ্যপ্রযুক্তি</span>
          <IoIosArrowDown className="ml-auto" />
        </div>
        {activeCategory === "তথ্যপ্রযুক্তি" && subCategoryItems.length > 0 && (
          <ul className="absolute top-full left-0 bg-gray-800 text-gray-300 rounded-sm py-1 px-2 z-50">
            {subCategoryItems?.map((item, i) => (
              <Link to={`/sub-category/${item.subCategoryName}`} key={i}>
                {" "}
                <li className="py-2 px-3">{item.subCategoryName}</li>
              </Link>
            ))}
          </ul>
        )}
      </li>
      <li
        onMouseEnter={() => handleNavItems("সারাদেশ")}
        onMouseLeave={() => setActiveCategory(null)}
        className="group relative"
      >
        <Link to="/category/সারাদেশ">
          <div className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100 dropdown-toggle">
            <span className="text-base select-none mr-2">সারাদেশ</span>
            <IoIosArrowDown className="ml-auto" />
          </div>
          {activeCategory === "সারাদেশ" && subCategoryItems.length > 0 && (
            <ul className="absolute top-full left-0 bg-gray-800 text-gray-300 rounded-sm py-1 px-2 z-50">
              {subCategoryItems?.map((item, i) => (
                <Link to={`/sub-category/${item.subCategoryName}`} key={i}>
                  {" "}
                  <li className="py-2 px-3">{item.subCategoryName}</li>
                </Link>
              ))}
            </ul>
          )}
        </Link>
      </li>
      <li
        onMouseEnter={() => handleNavItems("ক্যাম্পাস")}
        onMouseLeave={() => setActiveCategory(null)}
        className="group relative"
      >
        <div className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100 dropdown-toggle">
          <span className="text-base select-none mr-2">ক্যাম্পাস</span>
          <IoIosArrowDown className="ml-auto" />
        </div>
        {activeCategory === "ক্যাম্পাস" && subCategoryItems.length > 0 && (
          <ul className="absolute top-full left-0 bg-gray-800 text-gray-300 rounded-sm py-1 px-2 z-50">
            {subCategoryItems?.map((item, i) => (
              <Link to={`/sub-category/${item.subCategoryName}`} key={i}>
                {" "}
                <li className="py-2 px-3">{item.subCategoryName}</li>
              </Link>
            ))}
          </ul>
        )}
      </li>
      <li
        onMouseEnter={() => handleNavItems("গণমাধ্যম")}
        onMouseLeave={() => setActiveCategory(null)}
        className="group relative"
      >
        <div className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100 dropdown-toggle">
          <span className="text-base select-none mr-2">গণমাধ্যম</span>
          <IoIosArrowDown className="ml-auto" />
        </div>
        {activeCategory === "গণমাধ্যম" && subCategoryItems.length > 0 && (
          <ul className="absolute top-full left-0 bg-gray-800 text-gray-300 rounded-sm py-1 px-2 z-50">
            {subCategoryItems?.map((item, i) => (
              <Link to={`/sub-category/${item.subCategoryName}`} key={i}>
                {" "}
                <li className="py-2 px-3">{item.subCategoryName}</li>
              </Link>
            ))}
          </ul>
        )}
      </li>
      <li
        onMouseEnter={() => handleNavItems("আরো")}
        onMouseLeave={() => setActiveCategory(null)}
        className="group relative"
      >
        <div className="flex items-center py-3 px-4 text-gray-300 hover:bg-[#ffae00] hover:text-gray-100 dropdown-toggle">
          <span className="text-base select-none mr-2">আরো</span>
          <IoIosArrowDown className="ml-auto" />
        </div>
        {activeCategory === "আরো" && subCategoryItems.length > 0 && (
          <ul className="absolute top-full left-0 bg-gray-800 text-gray-300 rounded-sm py-1 px-2 z-50">
            {subCategoryItems?.map((item, i) => (
              <Link to={`/sub-category/${item.subCategoryName}`} key={i}>
                {" "}
                <li className="py-2 px-3">{item.subCategoryName}</li>
              </Link>
            ))}
          </ul>
        )}
      </li>
    </>
  );
  return (
    <div className="relative">
      <div className="container mx-auto">
        <div className="hidden md:flex justify-between items-center bg-black px-2">
          <ul className="flex flex-wrap cursor-pointer">{navItems}</ul>
        </div>
        <div className="flex md:hidden items-center justify-between bg-black py-1 px-1">
          <div>
            <img src={selectedLogo?.logo} alt="logo" className="w-36 " />
          </div>
          {isMenuOpen ? (
            <FaXmark
              className="text-white text-4xl cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          ) : (
            <MdMenu
              className="text-white text-4xl cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          )}
        </div>
        <div className="flex py-5">
          <div className="bg-orange-500 text-white w-1/4 md:w-2/12 flex justify-center items-center">
            <h3 className="text-sm md:text-lg">সংবাদ শিরোনাম :</h3>
          </div>

          <div className="bg-gray-400 w-3/4 md:w-10/12 text-sm md:text-lg">
            <Marquee pauseOnHover={true} speed={110}>
              <Headline />
            </Marquee>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="block md:hidden absolute top-0 bg-black h-fit w-1/2 z-30 transition-all ease-in-out duration-500">
          <div className="p-1">
            <div>
              <img src={selectedLogo?.logo} alt="logo" className="w-36 " />
            </div>
          </div>
          <ul className="flex flex-col">{navItems}</ul>
        </div>
      )}
    </div>
  );
};

export default HeaderLogo;
