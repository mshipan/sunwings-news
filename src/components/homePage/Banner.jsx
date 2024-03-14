import homeSliderImg from "../../assets/1.png";

const Banner = () => {
  return (
    <div className="grow text-white flex flex-col md:flex-row gap-6">
      <div className="grow">
        <img src={homeSliderImg} alt="" />
      </div>
      <div className="flex-none md:w-80 p-4 bg-yellow-300 w-full ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic eos
          repudiandae tenetur in perspiciatis ut fugiat, rem sequi inventore
          libero odit ipsum omnis facilis repellat dicta rerum a ea!
        </p>
      </div>
    </div>
  );
};

export default Banner;
