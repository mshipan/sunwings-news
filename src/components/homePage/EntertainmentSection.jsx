import { useState } from "react";
import { useGetPostsQuery } from "../../redux/features/allApis/postApi/postApi";
import CategoryTitle from "../shared/CategoryTitle";
import NewsCard from "./NewsCard";

const EntertainmentSection = () => {
  const { data: posts, isLoading } = useGetPostsQuery({ category: "বিনোদন" });
  const [showFullContent, setShowFullContent] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Function to toggle showing full content
  const handleToggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  // Render only the first 150 words if showFullContent is false
  const renderContent = showFullContent
    ? posts[0].quill
    : posts[0].quill.split(" ").slice(0, 150).join(" ");

  const newArray = posts?.slice(1);

  return (
    <div className="">
      <CategoryTitle title="বিনোদন" />
      <div className="flex gap-4 flex-col md:flex-row">
        {/* Render the main content */}
        <div className="md:w-5/6 w-full">
          {/* Check if posts exist */}
          {posts && posts.length > 0 && (
            <>
              {/* Render content using dangerouslySetInnerHTML */}
              <p
                dangerouslySetInnerHTML={{ __html: renderContent }}
                className="text-black"
              ></p>
              {/* Render the "Details" button */}
              {posts[0].quill.length > 150 && (
                <button
                  className="text-blue-500 mt-2 underline"
                  onClick={handleToggleContent}
                >
                  {showFullContent ? "কম প্রদর্শন" : "বিস্তারিত"}
                </button>
              )}
            </>
          )}
        </div>
        {/* Render two more NewsCard components */}
       { <div className="flex gap-4 flex-row md:flex-col">
          {newArray?.map((post, i) => (
            <NewsCard key={i} post={post} />
          ))}
        </div>}
      </div>
    </div>
  );
};

export default EntertainmentSection;
