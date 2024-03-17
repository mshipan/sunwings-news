import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../../redux/features/allApis/postApi/postApi";

const Headline = () => {
  const { data: posts, isLoading } = useGetPostsQuery({});
  if (!isLoading) {
    const slicedPosts = posts?.slice(1, 5);
    return (
      <div className="flex flex-row gap-40 justify-center items-center text-xl py-2 text-red-500">
        {slicedPosts?.map((post, i) => (
          <Link to={`/posts/${post._id}`} key={i}>
            <p className="hover:text-blue-500 hover:cursor-pointer hover:underline">
              {post?.postTitle} !!!
            </p>
          </Link>
        ))}
      </div>
    );
  }
};

export default Headline;
