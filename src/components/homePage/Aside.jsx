import twitter from "../../assets/twitter.jpg";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import CategoryTitle from "../shared/CategoryTitle";
import SocialShare from "../shared/SocialShare";
import card from "../../assets/home-slider.jpg";

const Aside = () => {
  return (
    <div className="flex-none xl:w-72 text-white">
      <div className="grid grid-cols-2 md:grid-cols-1 lg:max-xl:grid-cols-4 md:max-lg:grid-cols-4 content-between gap-4">
        <p className="bg-slate-500 p-4 col-span-2 md:col-span-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic eos
          repudiandae tenetur in perspiciatis ut fugiat, rem sequi inventore
          libero odit ipsum omnis facilis repellat dicta rerum a ea!
        </p>

        {/* ফেসবুকে আমরা */}
        <div className="space-y-4">
          <CategoryTitle title="ফেসবুকে আমরা" />
          <SocialShare
            title="Sunwing Tours & Travels"
            socialUrl="https://www.facebook.com/sunwingtourstravels"
            cardImage={twitter}
            icon={FaFacebookSquare}
            profileImage={card}
          />
        </div>

        {/* টুইটারে আমরা */}
        <div className="space-y-4">
          <CategoryTitle title="টুইটারে আমরা" />
          <SocialShare
            title="Sunwing Tours & Travels"
            socialUrl="https://www.facebook.com/sunwingtourstravels"
            cardImage={twitter}
            icon={FaTwitterSquare}
            profileImage={card}
          />
        </div>

        {/* পুরাতন সংবাদ */}
        <div className="col-span-2 md:col-span-1">
          <CategoryTitle title="পুরাতন সংবাদ" />
          <div className="">
            <input
              type="date"
              placeholder="Type here"
              className="bg-white input input-bordered w-full text-black p-2 border border-gray-500 my-4"
            />
            <button className="w-full bg-orange-500 p-2 text-center hover:bg-orange-400">
              খুজুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
