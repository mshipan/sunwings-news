import { useGetAllLogoQuery } from "../../../../redux/features/allApis/logoApi/logoApi";

const LogoCollection = () => {
  const { data: allLogos } = useGetAllLogoQuery();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-4">
        {allLogos?.map((logo) => (
          <img
            key={logo._id}
            src={logo.logo}
            alt=""
            className="w-56 border border-gray-500"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoCollection;
