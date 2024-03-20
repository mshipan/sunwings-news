import moment from "moment";
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

const NewsCard = ({ post }) => {
  const timeAgo = (timestamp) => {
    const currentTime = moment();
    const postTime = moment(timestamp);
    const duration = moment.duration(currentTime.diff(postTime));

    if (duration.asSeconds() < 60) {
      return "a few seconds ago";
    } else if (duration.asMinutes() < 60) {
      return Math.floor(duration.asMinutes()) + " minutes ago";
    } else if (duration.asHours() < 24) {
      return Math.floor(duration.asHours()) + " hours ago";
    } else if (duration.asDays() < 2) {
      return "a day ago";
    } else if (duration.asDays() < 7) {
      return Math.floor(duration.asDays()) + " days ago";
    } else if (duration.asWeeks() < 4) {
      return Math.floor(duration.asWeeks()) + " weeks ago";
    } else if (duration.asMonths() < 12) {
      return Math.floor(duration.asMonths()) + " months ago";
    } else {
      return Math.floor(duration.asYears()) + " years ago";
    }
  };
  return (
    <div className="bg-slate-100">
      <img src={post?.postThumbnail} alt="" className="h-48 w-full" />
      <div className="p-2">
        <Link to={`/posts/${post._id}`}>
          <p className="text-base font-medium text-black hover:text-blue-500">
            {post?.postTitle}
          </p>
        </Link>
        <p className="flex items-center border-l-2 border-orange-500 gap-1 mt-2">
          <MdAccessTime className="text-orange-500 ml-2" />
          <span>{timeAgo(post?.publishDate)}</span>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
