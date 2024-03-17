import { Link, useParams } from "react-router-dom";
import { useGetPostsQuery } from "../../redux/features/allApis/postApi/postApi";
import SinglePageLeft from "../../components/homePage/SinglePageLeft";
import CategoryTitle from "../../components/shared/CategoryTitle";

const SubCategoryNews = () => {
  const { subCategory } = useParams();

  const { data: posts, error, isLoading } = useGetPostsQuery({ subCategory });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error fetching posts:", error);
    return (
      <div className="flex items-center justify-center text-xl">
        {error.data.message}
      </div>
    );
  }

  //   console.log(posts);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Render your component with data here */}
      <div className="grid md:grid-cols-3 gap-3 grid-cols-2 w-3/4">
        {posts.length !== 0 &&
          posts?.map((post) => (
            <div key={post?._id} className="">
              <img className="" src={post?.postThumbnail} alt="" />
              <Link to={`/posts/${post._id}`}>
                <p className="bg-gray-300 px-2 py-1 pb-2">{post?.postTitle}</p>
              </Link>
            </div>
          ))}
      </div>
      <div className="w-1/4">
        <CategoryTitle title={"সর্বশেষ সংবাদ"} />
        <SinglePageLeft />
      </div>
    </div>
  );
};

export default SubCategoryNews;
