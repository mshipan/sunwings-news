import twitter from "../../assets/twitter.jpg";
import CategoryTitle from "../shared/CategoryTitle";
import SinglePageLeft from "./SinglePageLeft";

const SinglePageRight = () => {
  return (
    <div className="bg-gray-200 ">
      <CategoryTitle title={"আলোচিত সংবাদ"} />
      <div className="">
        <img className="px-2" src={twitter} alt="" />
        <p className="px-2">শুরু হয়েছে শীতের মৌসুম, শীতের ফুলে রঙিন প্রকৃতি</p>
      </div>
      <div className="mt-4 px-2">
        <SinglePageLeft />
      </div>
    </div>
  );
};

export default SinglePageRight;
