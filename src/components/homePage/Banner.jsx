import homeSliderImg from "../../assets/1.png";
import NewsTab from "./NewsTab";

const Banner = () => {
  return (
    <div className=" w-5/6 text-white flex flex-col md:flex-row gap-6">
      <div className="grow">
        <img src={homeSliderImg} alt="" />
      </div>
      <div className="w-1/6 text-black">
        <p>hello</p>
        <NewsTab />
      </div>
    </div>
  );
};

export default Banner;
