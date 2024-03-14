const Facebook = () => {
  return (
    <div>
      <h1 className="text-black text-xl mb-2">Facebook</h1>
      <div>
        <form className="flex flex-col gap-4">
          <div className="form-control">
            <label
              htmlFor="facebookPageTitle"
              className="text-black mb-2 text-lg"
            >
              Page Title:
            </label>
            <input
              type="text"
              name="facebookPageTitle"
              className="bg-white border border-gray-400 px-3 py-2 text-black"
              placeholder="Enter Page Title..."
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="facebookPageLink"
              className="text-black mb-2 text-lg"
            >
              Page Link:
            </label>
            <input
              type="text"
              name="facebookPageLink"
              className="bg-white border border-gray-400 px-3 py-2 text-black"
              placeholder="Enter Page Link..."
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="facebookPagePhoto"
              className="text-black mb-2 text-lg"
            >
              Page Profile Photo:
            </label>
            <input
              type="file"
              name="facebookPageLink"
              className="bg-white border border-gray-400 px-3 py-2 text-black"
              placeholder="Enter Page Link..."
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Facebook;
