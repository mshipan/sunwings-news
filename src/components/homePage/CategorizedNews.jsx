import SmallNewsCard from "../shared/SmallNewsCard";
import card from "../../assets/home-slider.jpg";
import CategoryTitle from "../shared/CategoryTitle";
import { Link } from "@mui/material";
import { HiChevronDoubleRight } from "react-icons/hi2";

const CategorizedNews = ({ secTitle, news, loading }) => {
  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  const newArray = news?.slice(1, 5);
  // console.log(news[0]._id);
  // console.log(secTitle);

  return (
    <div>
      <CategoryTitle title={secTitle} />
      <div className="bg-slate-100 mb-4">
        <img src={news[0].postThumbnail || card} alt="" />
        <Link to={`/posts/${news[0]._id}`}>
          <p className="text-black no-underline font-medium hover:text-blue-500">
            {news[0]?.postTitle}
          </p>
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {newArray?.map((item, i) => (
          <SmallNewsCard key={i} post={item} isLoading={loading} />
        ))}
        <Link to={`/category/${secTitle}`}>
          <button className="flex mx-auto justify-center items-center gap-1  text-black cursor-pointer underline hover:text-blue-600 py-2 px-4 rounded mt-4">
            আরো খবর
            <HiChevronDoubleRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategorizedNews;
