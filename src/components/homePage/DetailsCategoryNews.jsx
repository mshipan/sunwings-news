import { useGetPostsQuery } from "../../redux/features/allApis/postApi/postApi";
import CategoryTitle from "../shared/CategoryTitle";
import SmallNewsCard from "../shared/SmallNewsCard";

const DetailsCategoryNews = () => {
  const { data: posts, isLoading } = useGetPostsQuery({ category: "জাতীয়" });
  if (!isLoading) {
    const newArray = posts?.slice(1);

    return (
      <div className="">
        <CategoryTitle title={"জাতীয়"} />
        <div className="grow text-white flex flex-col md:flex-row gap-6">
          <div className="grow">
            <img src={posts[0].postThumbnail} alt="" />
            <h1 className="text-black text-xl">{posts[0].postTitle}</h1>
          </div>
          <div className="flex flex-col gap-4">
            {newArray?.map((post, i) => (
              <SmallNewsCard key={i} post={post} isLoading={isLoading} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <p>Loading...</p>
    </div>
  );
};

export default DetailsCategoryNews;
