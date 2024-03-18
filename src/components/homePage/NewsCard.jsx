import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

const NewsCard = ({ post }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );

    return `${formattedDate}`;
  };
  return (
    <div className="bg-slate-100">
      <img src={post?.postThumbnail} alt="" />
      <div className="p-2">
        <Link to={`/posts/${post._id}`}>
          <h3 className="text-base font-medium text-black hover:text-blue-600">
            {post?.postTitle}
          </h3>
        </Link>
        <p className="flex items-center border-l-2 border-orange-500 gap-1 mt-2">
          <MdAccessTime className="text-orange-500 ml-2" />
          <span className="text-gray-600">{formatDate(post?.publishDate)}</span>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
