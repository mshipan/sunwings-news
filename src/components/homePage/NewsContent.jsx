import DetailsCategoryNews from "./DetailsCategoryNews";
import ShortCategoryNews from "./ShortCategoryNews";
const NewsContent = () => {
  return (
    <div>
      <div className="flex gap-5 xl:flex-row flex-col justify-between">
        {/* home mid left side */}
        <DetailsCategoryNews />

        {/* home mid right side */}
        <ShortCategoryNews />
      </div>
    </div>
  );
};

export default NewsContent;
