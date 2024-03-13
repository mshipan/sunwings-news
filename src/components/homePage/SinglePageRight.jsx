import twitter from "../../assets/twitter.jpg";
import SinglePageLeft from "./SinglePageLeft";

const SinglePageRight = () => {
  return (
    <div className="bg-gray-200 ">
      <div className="">
        <h2 className="text-xl p-4">আলোচিত সংবাদ</h2>
        <img className="px-2" src={twitter} alt="" />
        <p className="px-2">শুরু হয়েছে শীতের মৌসুম, শীতের ফুলে রঙিন প্রকৃতি</p>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-4 px-2">
        <SinglePageLeft />
        <SinglePageLeft />
        <SinglePageLeft />
        <SinglePageLeft />
        <SinglePageLeft />
        <SinglePageLeft />
        <SinglePageLeft />
        <SinglePageLeft />
        <SinglePageLeft />
        <SinglePageLeft />
        <SinglePageLeft />
        <SinglePageLeft />
        <SinglePageLeft />
        <SinglePageLeft />
      </div>
    </div>
  );
};

export default SinglePageRight;
