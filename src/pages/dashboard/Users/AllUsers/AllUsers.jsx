import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useAddRoleToUserMutation,
  useDeleteSingleUserMutation,
  useGetAllUsersQuery,
} from "../../../../redux/features/allApis/usersApi/usersApi";
import Swal from "sweetalert2";
import {
  Box,
  Button,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AllUsers = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedUID, setSelectedUID] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  console.log(selectedUID, selectedOption);

  // get all users
  const { data: users } = useGetAllUsersQuery();
  // delete a single user mutation
  const [deleteSingleUser] = useDeleteSingleUserMutation();
  const [addRoleToUser] = useAddRoleToUserMutation();
  // table data
  const [filters, setFilters] = useState({
    month: "",
    year: "",
    categories: "",
    status: "",
    author: "",
  });
  // all functions
  const handleChange = (event) => {
    // console.log(event.target);
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you can handle form submission logic, such as sending data to the server
    console.log("Selected option:", selectedOption, selectedUID);
    // const roleInfo = { uid: selectedUID, role: selectedOption };
    const result = await addRoleToUser(selectedUID, selectedOption);
    console.log(result);

    // Optionally, you can close the modal after submission
    handleClose();
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleFilterSubmit = () => {
    // Handle filter submission, you can apply your filtering logic here
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Handle search submission
  };

  const ActionButtons = ({ uid }) => {
    return (
      <div className="flex justify-center items-center gap-2">
        {/* <button className="text-blue-500" onClick={() => handleEdit(id)}>
          Edit
        </button>
        <button className="text-green-500" onClick={() => handleView(id)}>
          View
        </button> */}
        <button className="text-red-500" onClick={() => handleDelete(uid)}>
          Delete
        </button>
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

  const SetRole = ({ status }) => {
    setSelectedUID(status);
    return (
      <>
        <Button onClick={handleOpen}>Give role</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Set role
            </Typography>
            <form className="text-black" onSubmit={handleSubmit}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedOption}
                onChange={handleChange} // Add function to handle selection change
                fullWidth
              >
                <MenuItem selected disabled value="">
                  Set a Role
                </MenuItem>
                <MenuItem value={"journalist"}>Journalist/Reporter</MenuItem>
                <MenuItem value={"editor"}>Editor</MenuItem>
                <MenuItem value={"moderator"}>Moderator</MenuItem>
              </Select>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </form>
          </Box>
        </Modal>
      </>
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    const day = date.getDate();
    let suffix;
    if (day === 1 || day === 21 || day === 31) {
      suffix = "st";
    } else if (day === 2 || day === 22) {
      suffix = "nd";
    } else if (day === 3 || day === 23) {
      suffix = "rd";
    } else {
      suffix = "th";
    }
    return `${day}${suffix} ${formattedDate}`;
  };

  const columns = [
    { field: "id", headerName: "Sl No", width: 80 },
    {
      field: "name",
      headerName: "Name",
      width: 270,
      renderCell: (params) => (
        <Link to="#" className="hover:text-blue-500 hover:underline">
          {params.value}
        </Link>
      ),
    },
    { field: "email", headerName: "Email", width: 180 },

    {
      field: "role",
      headerName: "Role",
      width: 140,
      renderCell: (params) => <StatusBadge status={params.value} />,
    },
    {
      field: "giveRole",
      headerName: "Give Role",
      width: 140,
      renderCell: (params) => <SetRole status={params.row.uid} />,
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params) => <ActionButtons uid={params.row.uid} />,
      width: 150,
    },
  ];

  const rows = users
    ? users.map((user, i) => ({
        id: i + 1,
        name: user.name,
        email: user?.email,
        role: user.role,
        uid: user?.uid,
      }))
    : [];

  const filterRows = () => {
    if (!searchQuery) {
      return rows;
    }

    const query = searchQuery.toLowerCase();
    return rows?.filter((row) => {
      return Object.values(row).some((value) =>
        value?.toString()?.toLowerCase()?.includes(query)
      );
    });
  };

  const handleSetRole = (value) => {
    // handle set role
    console.log(value);
  };

  const handleEdit = (id) => {
    // Handle edit action
  };

  const handleView = (id) => {
    // Handle view action
  };

  const handleDelete = (uid) => {
    // Handle delete action

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
          const result = await deleteSingleUser(uid);
          console.log("result", result);
          if (result.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "This user has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Failed to delete user",
            text: error,
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

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col md:flex-row gap-3">
        <h1 className="text-black text-2xl">All Users</h1>
        {/* <Link to="/dashboard/add-new-post">
          <button className="bg-blue-100 px-4 py-1 border border-blue-500 rounded-sm text-blue-500 hover:bg-gray-100 transition-all duration-300 ease-in-out">
            Give role
          </button>
        </Link> */}
      </div>
      <div className="mt-5 flex items-center gap-1 text-xs">
        <p className="text-xs">All (344) </p>|
        <p className="text-xs">Published (300)</p>|
        <p className="text-xs"> Draft (44)</p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0">
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <select
            name="month"
            onChange={handleFilterChange}
            className="block rounded-sm px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 bg-white "
          >
            {months?.map((month, i) => (
              <option key={i} value={month?.value}>
                {month?.lable}
              </option>
            ))}
          </select>
          <select
            name="year"
            onChange={handleFilterChange}
            className="block rounded-sm px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 bg-white"
          >
            {years?.map((year, i) => (
              <option key={i} value={year?.value}>
                {year?.lable}
              </option>
            ))}
          </select>
          <select
            name="categories"
            onChange={handleFilterChange}
            className="block rounded-sm px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6 bg-white"
          >
            {categories?.map((category, i) => (
              <option key={i} value={category?.value}>
                {category?.label}
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
            placeholder="Search User..."
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
          rows={filterRows()}
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

export default AllUsers;
