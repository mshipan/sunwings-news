import { useState } from "react";
import { useGetPostsQuery } from "../../redux/features/allApis/postApi/postApi";
import NewsCard from "./NewsCard";
import { HiChevronDoubleRight } from "react-icons/hi2";

const AllNews = () => {
  const { data: posts, isLoading, isError } = useGetPostsQuery({});
  const [showCount, setShowCount] = useState(6); // Initial count to show
  const perPage = 6; // Number of posts to show per click

  // Calculate the number of posts to display based on showCount
  const visiblePosts = posts ? posts.slice(0, showCount) : [];

  // Function to increment showCount by perPage
  const handleShowMore = () => {
    setShowCount(showCount + perPage);
  };
  if (isError) {
    return <div>Fetching error occurred.</div>;
  }

  if (isLoading) {
    return (
      <div className="py-6 grid grid-cols-2 md:grid-cols-3 gap-6">
        {[...Array(perPage)].map((_, i) => (
          <div key={i} className="flex flex-col gap-4 w-52">
            <div className="skeleton h-48 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="py-6 grid grid-cols-2 md:grid-cols-3 gap-6">
        {visiblePosts.map((post, i) => (
          <NewsCard key={i} post={post} isLoading={isLoading} error={isError} />
        ))}
      </div>
      {/* Show More button */}
      {posts && showCount < posts.length && (
        <button
          onClick={handleShowMore}
          className="flex mx-auto justify-center items-center gap-1  text-black cursor-pointer underline hover:text-blue-600 py-2 px-4 rounded mt-4"
        >
          আরো খবর
          <HiChevronDoubleRight />
        </button>
      )}
    </div>
  );
};

export default AllNews;
