import homeSliderImg from "../../assets/1.png";

const SmallNewsCard = ({ post, isLoading }) => {
  console.log(post);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  // const id = item?._id;
  const postTitle = post?.postTitle;
  const postThumbnail = post?.postThumbnail;
  return (
    <div>
      <div className="flex-none md:w-80 w-full">
        <div className="flex gap-2">
          <div className="w-1/3">
            <img src={postThumbnail || homeSliderImg} alt="" />
          </div>
          <p className="text-black w-2/3">{postTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallNewsCard;
