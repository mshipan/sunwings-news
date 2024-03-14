import { useGetPostsQuery } from "../../redux/features/allApis/postApi/postApi";
import CategorizedNews from "./CategorizedNews";

const MiddleCategorySec = () => {
  const { data: internationalNews, isLoading: intLoading } = useGetPostsQuery({
    category: "আন্তর্জাতিক",
  });

  const { data: nationalNews, isLoading: nationalLoading } = useGetPostsQuery({
    category: "সারাদেশ",
  });
  const { data: techNews, isLoading: techLoading } = useGetPostsQuery({
    category: "তথ্যপ্রযুক্তি",
  });
  return (
    <div className="grid gap-4 grid-cols-1 md:max-lg:grid-cols-2 lg:grid-cols-3">
      <CategorizedNews
        secTitle={"আন্তর্জাতিক"}
        news={internationalNews}
        loading={intLoading}
      />
      <CategorizedNews
        secTitle={"সারাদেশ"}
        news={nationalNews}
        loading={nationalLoading}
      />
      <CategorizedNews
        secTitle={"তথ্যপ্রযুক্তি"}
        news={techNews}
        loading={techLoading}
      />
    </div>
  );
};

export default MiddleCategorySec;
