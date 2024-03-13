import homeSliderImg from "../../assets/1.png";
import CategoryTitle from "../shared/CategoryTitle";
import SmallNewsCard from "../shared/SmallNewsCard";

const DetailsCategoryNews = () => {
  return (
    <div className="">
      <CategoryTitle title={"জাতীয়"} />
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
  );
};

export default DetailsCategoryNews;
