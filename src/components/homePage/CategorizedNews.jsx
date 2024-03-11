import SmallNewsCard from "../shared/SmallNewsCard";
import card from "../../assets/home-slider.jpg";
import CategoryTitle from "../shared/CategoryTitle";

const CategorizedNews = () => {
  return (
    <div>
      <CategoryTitle />
      <div className="bg-slate-100 mb-4">
        <img src={card} alt="" />
        <div className="p-2">
          <h3 className="text-base font-medium">
            সৌদিতে মঙ্গলবার পর্যন্ত ঝরবে বৃষ্টি, ক্লাস অনলাইনে
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <SmallNewsCard />
        <SmallNewsCard />
        <SmallNewsCard />
      </div>
    </div>
  );
};

export default CategorizedNews;
