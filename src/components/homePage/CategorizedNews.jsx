import SmallNewsCard from "../shared/SmallNewsCard";
import card from "../../assets/home-slider.jpg";
import CategoryTitle from "../shared/CategoryTitle";

const CategorizedNews = ({ secTitle, news, loading }) => {
  // console.log(news);
  if (!loading) {
    const newArray = news?.slice(1);
    // console.log("new", newArray);

    return (
      <div>
        <CategoryTitle title={secTitle} />
        <div className="bg-slate-100 mb-4">
          <img src={news[0].postThumbnail || card} alt="" />
          <div className="p-2">
            <h3 className="text-base font-medium">{news[0].postTitle}</h3>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {newArray?.map((item, i) => (
            <SmallNewsCard key={i} post={item} isLoading={loading} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <p>Loading...</p>
    </div>
  );
};

export default CategorizedNews;
