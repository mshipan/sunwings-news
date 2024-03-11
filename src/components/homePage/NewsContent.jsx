import homeSliderImg from "../../assets/1.png";
import { FaFacebookSquare, FaShare, FaTwitterSquare } from "react-icons/fa";
import SmallNewsCard from "../shared/SmallNewsCard";
import Advertisment from "../shared/Advertisment";
import CategoryTitle from "../shared/CategoryTitle";
const NewsContent = () => {
  return (
    <div>
      <div className="flex-col lg:flex-row flex items-center gap-4 py-4">
        <Advertisment />
        <Advertisment />
      </div>

      <div className="flex gap-5 xl:flex-row flex-col">
        {/* home left site */}
        <div className="">
          <CategoryTitle />
          <div className="grow text-white flex flex-col md:flex-row gap-6">
            <div className="grow">
              <img src={homeSliderImg} alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <SmallNewsCard />
              <SmallNewsCard />
              <SmallNewsCard />
              <SmallNewsCard />
            </div>
          </div>
        </div>

        {/* home right site */}
        <div className="flex-none xl:w-80 w-full text-white">
          <CategoryTitle />
          <div className="grid gap-4 lg:max-xl:grid-cols-2 md:max-lg:grid-cols-2">
            <SmallNewsCard />
            <SmallNewsCard />
            <SmallNewsCard />
            <SmallNewsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
