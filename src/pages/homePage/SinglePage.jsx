import { useParams } from "react-router-dom";
// import SinglePageLeft from "../../components/homePage/SinglePageLeft";
import SinglePageRight from "../../components/homePage/SinglePageRight";
import CategoryTitle from "../../components/shared/CategoryTitle";
import { useGetPostByIdQuery } from "../../redux/features/allApis/postApi/postApi";
import SinglePageLeft from "../../components/homePage/SinglePageLeft";

const SinglePage = () => {
  const { id } = useParams();
  const { data: singlePost, isLoading } = useGetPostByIdQuery({ id });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col md:flex-row m-auto container px-2 bg-white gap-4">
      <div className="md:w-1/6 space-y-4 order-2 md:order-1">
        <CategoryTitle title={"সর্বশেষ সংবাদ"} />
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
          <SinglePageLeft />
        </div>
      </div>
      <div className="md:w-3/6 order-1 md:order-2">
        <h3>{singlePost._id}</h3>
      </div>
      <div className="md:w-2/6 order-3">
        <SinglePageRight />
      </div>
    </div>
  );
};

export default SinglePage;
