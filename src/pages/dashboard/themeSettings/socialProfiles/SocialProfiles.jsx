import Facebook from "../../../../components/dashboard/themeSettings/socialProfiles/Facebook";

const SocialProfiles = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col md:flex-row gap-3">
        <h1 className="text-black text-2xl">Social Profiles</h1>
      </div>
      <div className="flex flex-col gap-4">
        <Facebook />
      </div>
    </div>
  );
};

export default SocialProfiles;