import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../../redux/features/allApis/postApi/postApi";
import CategoryTitle from "../shared/CategoryTitle";
import SmallNewsCard from "../shared/SmallNewsCard";
import { HiChevronDoubleRight } from "react-icons/hi2";

const DetailsCategoryNews = () => {
  const { data: posts, isLoading } = useGetPostsQuery({ category: "জাতীয়" });
  if (!isLoading) {
    const newArray = posts?.slice(1, 5);

    return (
      <div className="md:w-3/4">
        <CategoryTitle title={"জাতীয়"} />
        <div className="grow flex flex-col md:flex-row gap-3">
          <div className="grow">
            <img className="w-full" src={posts[0].postThumbnail} alt="" />
            <Link to={`/posts/${posts[0]._id}`}>
              <h1 className=" text-black font-medium text-xl py-2 hover:text-blue-500">
                {posts[0].postTitle}
              </h1>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {newArray?.map((post, i) => (
              <SmallNewsCard key={i} post={post} isLoading={isLoading} />
            ))}
            <Link to={`/category/জাতীয়`}>
              <button
                // onClick={handleShowMore}
                className="flex mx-auto justify-center items-center gap-1  text-black cursor-pointer underline hover:text-blue-600 py-2 px-4 rounded mt-4"
              >
                আরো খবর
                <HiChevronDoubleRight />
              </button>
            </Link>
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
