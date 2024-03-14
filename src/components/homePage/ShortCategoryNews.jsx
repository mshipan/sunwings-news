import { useGetPostsQuery } from "../../redux/features/allApis/postApi/postApi";
import CategoryTitle from "../shared/CategoryTitle";
import SmallNewsCard from "../shared/SmallNewsCard";

const ShortCategoryNews = () => {
  const {
    data: posts,
    isLoading,
    isError,
  } = useGetPostsQuery({ category: "রাজনীতি" });
  console.log("Posts Data:", posts);

  // Handling loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handling error state
  if (isError) {
    return <div>Error occurred while fetching posts.</div>;
  }

  return (
    <div className="flex-none xl:w-80 w-full text-white">
      <CategoryTitle title={"রাজনীতি"} />
      <div className="grid gap-4 lg:max-xl:grid-cols-2 md:max-lg:grid-cols-2">
        {posts?.map((post, i) => (
          <SmallNewsCard key={i} post={post} isLoading={isLoading} />
        ))}
      </div>
    </div>
  );
};

export default ShortCategoryNews;
