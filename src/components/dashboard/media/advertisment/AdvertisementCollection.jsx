const AdvertisementCollection = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-4">
        {data?.map((ad) => (
          <img
            key={ad._id}
            src={ad.banner}
            alt="advertisement"
            className="w-56 border border-gray-500"
          />
        ))}
      </div>
    </div>
  );
};

export default AdvertisementCollection;
