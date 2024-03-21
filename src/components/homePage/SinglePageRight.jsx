import CategoryTitle from "../shared/CategoryTitle";
import SinglePageLeft from "./SinglePageLeft";

const SinglePageRight = () => {
  return (
    <div className="bg-gray-200 ">
      <CategoryTitle title={"আলোচিত সংবাদ"} />
      <div className="mt-4 px-2">
        <SinglePageLeft />
      </div>
    </div>
  );
};

export default SinglePageRight;
