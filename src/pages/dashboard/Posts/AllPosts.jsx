import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Button from "@mui/material/Button";
import {
  useDeletePostMutation,
  useGetPostsQuery,
  useUpdatePopularMutation,
} from "../../../redux/features/allApis/postApi/postApi";
import { useGetAllUsersQuery } from "../../../redux/features/allApis/usersApi/usersApi";
import Swal from "sweetalert2";

const AllPosts = () => {
  const [filters, setFilters] = useState({
    month: "",
    year: "",
    categories: "",
    status: "",
    author: "",
  });
  const [filteredRows, setFilteredRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { data: allPosts } = useGetPostsQuery({
    category: "",
    subCategory: "",
  });
  const { data: allUsers } = useGetAllUsersQuery();
  const [deletePost] = useDeletePostMutation();
  const [updatePopularPost] = useUpdatePopularMutation();

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleFilterSubmit = () => {
    let filteredRows = allPosts;

    if (filters.month && filters.year) {
      const publishDateFilter = `${filters.year}-${filters.month}`;
      filteredRows = filteredRows.filter((row) =>
        row.publishDate.includes(publishDateFilter)
      );
    }

    if (filters.category) {
      filteredRows = filteredRows.filter(
        (row) => row.category === filters.category
      );
    }

    if (filters.status) {
      filteredRows = filteredRows.filter(
        (row) => row.status === filters.status
      );
    }

    if (filters.author) {
      filteredRows = filteredRows.filter(
        (row) => row.author === filters.author
      );
    }

    setFilteredRows(filteredRows);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Handle search submission
  };

  const ActionButtons = ({ id }) => {
    return (
      <div className="flex justify-center items-center gap-2">
        <Link to={`/dashboard/edit-post/${id}`} className="text-blue-500">
          Edit
        </Link>

        <button className="text-red-500" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    );
  };

  const PopularButtons = ({ value }) => {
    return (
      <div>
        {value.isPopular ? (
          <Button
            onClick={() => handlePopular(value.id, false)}
            variant="contained"
            color="error"
          >
            Unpopular
          </Button>
        ) : (
          <Button
            onClick={() => handlePopular(value.id, true)}
            color="success"
            variant="contained"
          >
            Popular
          </Button>
        )}
      </div>
    );
  };

  const StatusBadge = ({ status }) => {
    return (
      <span
        className={`inline-block px-2 py-1 rounded-full text-xs ${
          status === "published" && "bg-green-500 text-white"
        } ${status === "draft" && "bg-red-500 text-white"}`}
      >
        {status}
      </span>
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );

    return `${formattedDate}`;
  };

  const columns = [
    { field: "id", headerName: "Sl No", width: 20 },
    {
      field: "title",
      headerName: "Title",
      width: 270,
      renderCell: (params) => (
        <Link to="#" className="hover:text-blue-500 hover:underline">
          {params.value || "---"}
        </Link>
      ),
    },
    {
      field: "author",
      headerName: "Author",
      width: 170,
      renderCell: (params) => <p className="">{params.value || "---"}</p>,
    },
    {
      field: "category",
      headerName: "Categories",
      type: "text",
      width: 100,
      renderCell: (params) => (
        <div
          className="inline-block px-[6px] py-[2px] mr-1 rounded"
          style={{ backgroundColor: params.value ? "#F7D7B6" : "transparent" }}
        >
          {params.value || "---"}
        </div>
      ),
    },
    {
      field: "subCategory",
      headerName: "Sub Category",
      type: "text",
      width: 100,
      renderCell: (params) => (
        <div
          className="inline-block px-[6px] py-[2px] mr-1 rounded"
          style={{ backgroundColor: params.value ? "#F7D7B6" : "transparent" }}
        >
          {params.value || "---"}
        </div>
      ),
    },
    {
      field: "publishDate",
      headerName: "Publish Date",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => <StatusBadge status={params.value} />,
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params) => <ActionButtons id={params.value} />,
      width: 100,
    },
    {
      field: "popular",
      headerName: "Make Popular",
      renderCell: (params) => <PopularButtons value={params.value} />,

      width: 150,
    },
  ];

  const rows = allPosts
    ? allPosts?.map((post, i) => ({
        id: i + 1,
        author: post.author,
        title: post?.postTitle,
        category: post?.category,
        subCategory: post?.subCategory,
        publishDate: formatDate(post?.publishDate),
        status: post.status,
        action: post._id,
        popular: { id: post._id, isPopular: post.isPopular },
      }))
    : [];

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await deletePost({ id: id });
          console.log("result", result);
          if (result.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "This post has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Failed to delete post",
            text: `${error}`,
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      }
    });
  };

  const handlePopular = (id, isPopular) => {
    const popularInfo = { isPopular: isPopular };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Make ${
        isPopular === true ? "Popular" : "Unpopular"
      }!`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await updatePopularPost({
            id: id,
            data: popularInfo,
          });
          console.log("result", result);
          if (result.data.modifiedCount > 0) {
            Swal.fire({
              title: `Made ${
                isPopular === true ? "Popular" : "Unpopular"
              } successfully!`,
              icon: "success",
            });
          }
        } catch (error) {
          Swal.fire({
            title: `Failed to make ${
              isPopular === true ? "Popular" : "Unpopular"
            }`,
            text: `${error}`,
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      }
    });
  };

  const months = [
    { value: "", lable: "Month" },
    { value: "1", lable: "Januray" },
    { value: "2", lable: "February" },
    { value: "3", lable: "March" },
    { value: "4", lable: "April" },
    { value: "5", lable: "May" },
    { value: "6", lable: "June" },
    { value: "7", lable: "July" },
    { value: "8", lable: "August" },
    { value: "9", lable: "September" },
    { value: "10", lable: "October" },
    { value: "11", lable: "November" },
    { value: "12", lable: "December" },
  ];

  const years = [
    { value: "", lable: "Year" },
    { value: "2020", lable: "2020" },
    { value: "2021", lable: "2021" },
    { value: "2022", lable: "2022" },
    { value: "2023", lable: "2023" },
    { value: "2024", lable: "2024" },
    { value: "2025", lable: "2025" },
    { value: "2026", lable: "2026" },
    { value: "2027", lable: "2027" },
    { value: "2028", lable: "2028" },
    { value: "2029", lable: "2029" },
    { value: "2030", lable: "2030" },
  ];

  const categories = [
    { value: "allCategory", label: "All Category" },
    { value: "politics", label: "Politics" },
    { value: "business", label: "Business" },
    { value: "technology", label: "Technology" },
    { value: "sports", label: "Sports" },
    { value: "entertainment", label: "Entertainment" },
    { value: "health", label: "Health" },
    { value: "science", label: "Science" },
    { value: "education", label: "Education" },
    { value: "environment", label: "Environment" },
    { value: "travel", label: "Travel" },
  ];

  const authors = [
    { value: "", label: "Author" },
    { value: "john_doe", label: "John Doe" },
    { value: "jane_smith", label: "Jane Smith" },
    { value: "alex_jones", label: "Alex Jones" },
    { value: "emily_wilson", label: "Emily Wilson" },
    { value: "michael_brown", label: "Michael Brown" },
    { value: "sarah_adams", label: "Sarah Adams" },
    { value: "david_clark", label: "David Clark" },
    { value: "lisa_jackson", label: "Lisa Jackson" },
    { value: "ryan_roberts", label: "Ryan Roberts" },
    { value: "amy_carter", label: "Amy Carter" },
  ];

  const allPostLength = allPosts?.length;
  const publishedPostsLength = allPosts
    ? allPosts.filter((post) => post.status === "published").length
    : 0;
  const draftPostsLength = allPosts
    ? allPosts.filter((post) => post.status === "draft").length
    : 0;

  const authorss = allUsers?.map((post) => post.name);
  console.log(authorss);

  return (
    <div className="flex flex-col gap-3">
      <Helmet>
        <title>Sunwings | All Posts</title>
      </Helmet>
      <div className="flex flex-col md:flex-row gap-3">
        <h1 className="text-black text-2xl">All Posts</h1>
        <Link to="/dashboard/add-new-post">
          <button className="bg-blue-100 px-4 py-1 border border-blue-500 rounded-sm text-blue-500 hover:bg-gray-100 transition-all duration-300 ease-in-out">
            Add New Post
          </button>
        </Link>
      </div>
      <div className="mt-5 flex items-center gap-1 text-lg  text-black">
        <p>
          All
          <span className="text-blue-500 hover:underline cursor-pointer">
            ({allPostLength || 0})
          </span>
        </p>
        |
        <p>
          Published
          <span className="text-blue-500 hover:underline cursor-pointer">
            ({publishedPostsLength})
          </span>
        </p>
        |
        <p>
          Draft
          <span className="text-blue-500 hover:underline cursor-pointer">
            ({draftPostsLength})
          </span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <input
            type="date"
            name=""
            id=""
            className="block rounded-sm px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 bg-white"
          />

          <select
            name="category"
            onChange={handleFilterChange}
            className="block rounded-sm px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 bg-white"
          >
            {categories?.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          <select
            name="status"
            onChange={handleFilterChange}
            className="block rounded-sm px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 bg-white"
          >
            <option value="">Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
          <select
            name="author"
            onChange={handleFilterChange}
            className="block rounded-sm px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 bg-white"
          >
            {authors?.map((author, i) => (
              <option key={i} value={author?.value}>
                {author?.label}
              </option>
            ))}
          </select>
          <div>
            <button
              className="bg-blue-100 px-4 py-1 border border-blue-500 rounded-sm text-blue-500 hover:bg-gray-100 transition-all duration-300 ease-in-out flex flex-row items-center gap-1"
              onClick={handleFilterSubmit}
            >
              Filter
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <input
            type="text"
            placeholder="Search Post..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="block rounded-sm px-2 border border-gray-300 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:max-w-xs sm:text-sm sm:leading-6 bg-white"
          />
          <div>
            <button
              className="bg-blue-100 px-4 py-1 border border-blue-500 rounded-sm text-blue-500 hover:bg-gray-100 transition-all duration-300 ease-in-out flex flex-row items-center gap-1"
              onClick={handleSearchSubmit}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-[30rem]">
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pcategories: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default AllPosts;
