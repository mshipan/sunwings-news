import { useGetAllLogoQuery } from "../../../../redux/features/allApis/logoApi/logoApi";

const LogoCollection = () => {
  const { data: allLogos } = useGetAllLogoQuery();
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {allLogos?.map((logo) => (
          <img key={logo._id} src={logo.logo} alt="" />
        ))}
      </div>
    </div>
  );
};

export default LogoCollection;
