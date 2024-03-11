import homeSliderImg from "../../assets/1.png";

const SmallNewsCard = () => {
  return (
    <div>
      <div className="flex-none md:w-80 w-full">
        <div className="flex gap-2">
          <div className="w-1/3">
            <img src={homeSliderImg} alt="" />
          </div>
          <p className="text-black w-2/3">
            যুক্তরাষ্ট্রের কোচ হওয়ার ‘আকর্ষণীয়’ প্রস্তাব ফিরিয়ে দিলেন জিদান
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmallNewsCard;
