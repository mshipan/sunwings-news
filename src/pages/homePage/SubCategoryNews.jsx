import { Link, useParams } from "react-router-dom";
import { useGetPostsQuery } from "../../redux/features/allApis/postApi/postApi";
import SinglePageLeft from "../../components/homePage/SinglePageLeft";
import CategoryTitle from "../../components/shared/CategoryTitle";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SmallNewsCard from "../../components/shared/SmallNewsCard";

const SubCategoryNews = () => {
  const { subCategory } = useParams();

  const { data: posts, error, isLoading } = useGetPostsQuery({ subCategory });

  const { data: allPosts } = useGetPostsQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error fetching posts:", error);
    return (
      <div className="flex items-center justify-center text-xl">
        {error.data.message}
      </div>
    );
  }

  const tabList = [
    { label: "সর্বশেষ সংবাদ", value: "" },
    { label: "আলোচিত সংবাদ", value: "" },
  ];

  //   console.log(posts);

  return (
    <div className="flex flex-col md:flex-row gap-4 container mx-auto">
      {/* Render your component with data here */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4 md:w-2/3 px-2 md:px-0">
        {posts.length !== 0 &&
          posts?.map((post) => (
            <div key={post?._id} className="">
              <img className="" src={post?.postThumbnail} alt="" />
              <Link to={`/posts/${post._id}`}>
                <p className="bg-gray-300 px-2 py-1 pb-2 text-black">
                  {post?.postTitle}
                </p>
              </Link>
            </div>
          ))}
      </div>
      <div className="md:w-1/3 text-black text-sm md:text-lg px-2 md:px-0">
        {/* need to change the selected border radius */}
        <Tabs
          defaultFocus={false}
          selectedTabClassName="bg-[#022831] text-white border-[#046279] rounded-none"
        >
          <TabList
            className={
              "flex flex-row justify-center items-center text-[#022831] bg-[#ddd] text-[17px]"
            }
          >
            {tabList.map((tab, i) => (
              <Tab
                className="p-[10px] w-full flex items-center justify-center border-t-[3px] border-solid border-[#022940] rounded-none cursor-pointer"
                key={i}
              >
                {tab.label}
              </Tab>
            ))}
          </TabList>
          <div className="h-96">
            <div className="h-80 overflow-y-scroll">
              <TabPanel className={"space-y-2"}>
                {allPosts?.map((post, i) => (
                  <SmallNewsCard post={post} key={i} />
                ))}
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default SubCategoryNews;
