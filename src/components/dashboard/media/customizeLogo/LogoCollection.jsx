import {
  useGetAllLogoQuery,
  useUpdateLogoSelectionMutation,
} from "../../../../redux/features/allApis/logoApi/logoApi";
import toast from "react-hot-toast";

const LogoCollection = () => {
  const { data: allLogos } = useGetAllLogoQuery();
  const [updateLogoSelection] = useUpdateLogoSelectionMutation();

  const handleLogoClick = async (logoId) => {
    try {
      await updateLogoSelection({ id: logoId, isSelected: true });

      // Update isSelected status for all other logos
      for (const logo of allLogos) {
        if (logo._id !== logoId) {
          await updateLogoSelection({ id: logo._id, isSelected: false });
        }
      }

      toast.success("Logo updated successfully!");
    } catch (error) {
      console.error("Error updating logo selection:", error);
      toast.error("Failed to update logo selection. Please try again later.");
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 place-items-center gap-4">
        {allLogos?.map((logo) => (
          <div key={logo._id} className="relative">
            <input
              type="checkbox"
              checked={logo.isSelected}
              onChange={() => handleLogoClick(logo._id)}
              className="checkbox-md absolute top-1 left-1"
            />
            <img
              src={logo.logo}
              alt="logo"
              className={`w-56 border ${
                logo.isSelected === true
                  ? "border-green-900 border-2"
                  : "border-gray-400"
              }`}
              onClick={() => handleLogoClick(logo._id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCollection;
