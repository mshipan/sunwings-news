const AddNewPost = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-3">
        <h1 className="text-black text-2xl mb-4">Add New Post</h1>
        <div>
          <form>
            <div className="form-control">
              <input
                type="text"
                name="postTitle"
                className="py-3 bg-white border border-gray-300 px-2 placeholder:text-2xl text-2xl placeholder:text-gray-500 text-black rounded-sm"
                placeholder="Add title"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewPost;
