import { useParams } from "react-router-dom";
// import SinglePageLeft from "../../components/homePage/SinglePageLeft";
import SinglePageRight from "../../components/homePage/SinglePageRight";
import CategoryTitle from "../../components/shared/CategoryTitle";
import { useGetPostByIdQuery } from "../../redux/features/allApis/postApi/postApi";
import SinglePageLeft from "../../components/homePage/SinglePageLeft";
import moment from "moment/moment";
import { Helmet } from "react-helmet-async";

const SinglePage = () => {
  const { id } = useParams();
  const { data: singlePost, isLoading } = useGetPostByIdQuery({ id });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col md:flex-row m-auto container px-2 bg-white gap-4">
      <Helmet>
        <title>Sunwings | News Details</title>
      </Helmet>
      <div className="md:w-1/6 space-y-4 order-2 md:order-1">
        <CategoryTitle title={"সর্বশেষ সংবাদ"} />
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
          <SinglePageLeft />
        </div>
      </div>
      <div className="md:w-4/6 space-y-2 order-1 md:order-2">
        <h3 className="text-3xl text-black font-semibold">
          {singlePost?.postTitle}
        </h3>
        <div className="flex flex-row gap-2 items-center">
          <img src={singlePost?.authorImage} className="rounded-full w-16" />
          <p className="text-lg text-[#2A388F]">{singlePost?.author}</p>
        </div>
        <p className="text-md">
          {moment(singlePost?.publishDate).format("MMMM Do YYYY, h:mm a ")}
        </p>
        <p
          dangerouslySetInnerHTML={{ __html: singlePost?.quill }}
          className="text-black"
        ></p>
      </div>
      <div className="md:w-1/6 order-3">
        <SinglePageRight />
      </div>
    </div>
  );
};

export default SinglePage;
