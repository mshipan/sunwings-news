import CategoryTitle from "../shared/CategoryTitle";
import SmallNewsCard from "../shared/SmallNewsCard";

const ShortCategoryNews = () => {
  return (
    <div className="flex-none xl:w-80 w-full text-white">
      <CategoryTitle title={"রাজনীতি"} />
      <div className="grid gap-4 lg:max-xl:grid-cols-2 md:max-lg:grid-cols-2">
        <SmallNewsCard />
        <SmallNewsCard />
        <SmallNewsCard />
        <SmallNewsCard />
      </div>
    </div>
  );
};

export default ShortCategoryNews;
