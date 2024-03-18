import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import homeSliderImg from "../../assets/1.png";
import { useGetPostsQuery } from "../../redux/features/allApis/postApi/postApi";
import SmallNewsCard from "../shared/SmallNewsCard";

const Banner = () => {
  const { data: posts } = useGetPostsQuery({});

  const tabList = [
    { label: "সর্বশেষ সংবাদ", value: "" },
    { label: "আলোচিত সংবাদ", value: "" },
  ];
  return (
    <div className="text-white flex flex-col md:flex-row gap-6">
      <div className="grow md:w-4/6">
        <img src={homeSliderImg} alt="" />
      </div>
      <div className="md:w-2/6 text-black text-sm md:text-lg">
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
                className="p-[10px] w-full flex items-center justify-center border-t-[3px] border-solid border-[#022940] rounded-none"
                key={i}
              >
                {tab.label}
              </Tab>
            ))}
          </TabList>

          <div className="max-h-[530px] overflow-y-scroll">
            <TabPanel className={"space-y-2"}>
              {posts?.map((post, i) => (
                <SmallNewsCard post={post} key={i} />
              ))}
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Banner;
