import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

const NewsCard = ({ post }) => {
  return (
    <div className="bg-slate-100">
      <img src={post?.postThumbnail} alt="" />
      <div className="p-2">
        <Link to={`/posts/${post._id}`}>
          <h3 className="text-base font-medium">{post?.postTitle}</h3>
        </Link>
        <p className="flex items-center border-l-2 border-orange-500 gap-1 mt-2">
          <MdAccessTime className="text-orange-500 ml-2" />
          <span>১ বছর আগে</span>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
