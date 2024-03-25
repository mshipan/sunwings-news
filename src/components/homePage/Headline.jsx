import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../../redux/features/allApis/postApi/postApi";

const Headline = () => {
  const { data: posts, isLoading } = useGetPostsQuery({});
  if (!isLoading) {
    const slicedPosts = posts?.slice(0, 4);
    return (
      <div className="flex flex-row justify-center items-center py-1 text-[#000]">
        {slicedPosts?.map((post, i) => (
          <Link to={`/posts/${post._id}`} key={i}>
            <p className="hover:text-blue-500 text-sm hover:cursor-pointer hover:underline mx-10">
              {post?.postTitle} !!!
            </p>
          </Link>
        ))}
      </div>
    );
  }
};

export default Headline;
