import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../../redux/features/allApis/postApi/postApi";

const SinglePageLeft = () => {
  const { data: posts, isLoading } = useGetPostsQuery("");
  const slicedPosts = posts?.slice(0, 4);
  // console.log(slicedPosts);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      {slicedPosts?.map((post) => (
        <div key={post?._id} className="">
          <img className="" src={post?.postThumbnail} alt="" />
          <Link to={`/posts/${post._id}`}>
            <p className="bg-gray-300 px-2 py-1 pb-2 text-black hover:text-blue-600">
              {post?.postTitle}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SinglePageLeft;
