import { useGetPostsQuery } from "../../../redux/features/allApis/postApi/postApi";

const TodaysHeadline = () => {
  const { data: posts, isLoading } = useGetPostsQuery({});

  const slicedPosts = posts?.slice(0, 4);

  return (
    <div className="mt-8 flex flex-col">
      <h1 className="font-serif text-xl mb-4">Today&apos;s Headline</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {slicedPosts?.map((post) => (
          <div
            key={post?._id}
            className=" flex items-start gap-5 rounded-2xl border border-gray-500"
          >
            {isLoading ? (
              <p className="font-normal text-black">
                <span className="loading loading-spinner loading-lg"></span>
              </p>
            ) : (
              <img
                src={post?.postThumbnail}
                alt="news image"
                className="w-32 h-full rounded-2xl"
              />
            )}

            <div className="py-3">
              <h1 className="text-lg">{post?.postTitle}</h1>
              {/* If you want to add something, you can do here */}
            </div>
          </div>
        ))}
      </div>
      <div className="self-end mt-4">
        <h1 className="text-lg">See All...</h1>
      </div>
    </div>
  );
};

export default TodaysHeadline;
