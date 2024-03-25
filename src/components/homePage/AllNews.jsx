import { useState } from "react";
import { useGetPostsQuery } from "../../redux/features/allApis/postApi/postApi";
import NewsCard from "./NewsCard";
import { HiChevronDoubleRight } from "react-icons/hi2";
import toast from "react-hot-toast";

const AllNews = ({ date }) => {
  const { data: posts, isLoading, isError } = useGetPostsQuery({});
  const [searchTerm, setSearchTerm] = useState("");
  const [showCount, setShowCount] = useState(6); // Initial count to show
  const perPage = 6; // Number of posts to show per click

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    // Reset showCount when new search term is entered
    setShowCount(perPage);
  };

  // filter post by date
  const filteredPosts = posts?.filter(
    (post) => post.publishDate.split("T").slice(0, 1).join() === date
  );

  // Filter posts based on search term
  const filteredSearchPosts = posts?.filter((post) =>
    post.postTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let visiblePosts =
    filteredPosts?.length !== 0
      ? filteredPosts?.slice(0, showCount)
      : posts?.slice(0, showCount);

  if (filteredPosts?.length === 0 && date) {
    visiblePosts = [...posts];
    toast.error("No news has been posted in this date");
  }

  if (filteredSearchPosts?.length !== 0 && searchTerm) {
    visiblePosts = [...filteredSearchPosts];
  }

  if (filteredSearchPosts?.length === 0 && searchTerm) {
    visiblePosts = [];
  }

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
      <div className="text-black md:text-lg mt-2">
        <label htmlFor="search" className="p-2">
          খুজুন:
        </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleChange}
          placeholder="খবর অনুসন্ধান করুন..."
          className="text-lg border-2 border-orange-300 rounded-xl py-1 px-3 focus:border-orange-600 focus:border-none"
        />
      </div>
      <div className="py-2 grid grid-cols-2 md:grid-cols-3 gap-6">
        {visiblePosts.length !== 0 ? (
          visiblePosts.map((post, i) => (
            <NewsCard
              key={i}
              post={post}
              isLoading={isLoading}
              error={isError}
            />
          ))
        ) : (
          <div className="text-lg md:text-2xl">No News available</div>
        )}
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
