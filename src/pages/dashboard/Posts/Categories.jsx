import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Handle search submission
  };

  const ActionButtons = ({ id }) => {
    return (
      <div className="flex justify-center items-center gap-2">
        <button className="text-blue-500" onClick={() => handleEdit(id)}>
          Edit
        </button>
        <button className="text-green-500" onClick={() => handleView(id)}>
          View
        </button>
        <button className="text-red-500" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    );
  };

  const handleEdit = (id) => {
    // Handle edit action
  };

  const handleView = (id) => {
    // Handle view action
  };

  const handleDelete = (id) => {
    // Handle delete action
  };

  const columns = [
    { field: "id", headerName: "Sl No", width: 80 },
    {
      field: "categoryName",
      headerName: "Category Name",
      width: 180,
      renderCell: (params) => (
        <Link to="#" className="hover:text-blue-500 hover:underline">
          {params.value}
        </Link>
      ),
    },

    {
      field: "action",
      headerName: "Action",
      renderCell: (params) => <ActionButtons id={params.row.id} />,
      width: 270,
    },
  ];

  const rows = [
    {
      id: 1,
      categoryName: "Jon",
    },
    {
      id: 2,
      categoryName: "Cersei",
    },
    {
      id: 3,
      categoryName: "Cersei",
    },
    {
      id: 4,
      categoryName: "Cersei",
    },
    {
      id: 5,
      categoryName: "Cersei",
    },
    {
      id: 6,
      categoryName: "Cersei",
    },
    {
      id: 7,
      categoryName: "Cersei",
    },
    {
      id: 8,
      categoryName: "Cersei",
    },
    {
      id: 9,
      categoryName: "Cersei",
    },
    {
      id: 10,
      categoryName: "Cersei",
    },
    {
      id: 11,
      categoryName: "Cersei",
    },
    {
      id: 12,
      categoryName: "Cersei",
    },
    {
      id: 13,
      categoryName: "Cersei",
    },
    {
      id: 14,
      categoryName: "Cersei",
    },
    {
      id: 15,
      categoryName: "Cersei",
    },
    {
      id: 16,
      categoryName: "Cersei",
    },
  ];

  return (
    <div className="h-fit md:h-screen">
      <div className="flex flex-col gap-3">
        <h1 className="text-black text-2xl mb-4">Categories</h1>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2">
            <h1 className="text-lg font-medium text-black mb-2">
              Add new Category
            </h1>
            <div>
              <form className="flex flex-col gap-4">
                <div className="form-control">
                  <label htmlFor="categoryName" className="mb-2 text-gray-500">
                    Category Name:{" "}
                  </label>
                  <input
                    type="text"
                    name="categoryName"
                    className="bg-white py-1 px-2 border border-gray-300"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="px-4 py-1 border border-blue-500 bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white transition-all ease-in-out duration-300"
                  >
                    Add New Category
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* table */}
          <div className="md:w-1/2">
            <div className="flex flex-col md:flex-row md:items-center gap-3 justify-end mb-5">
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
      </div>
    </div>
  );
};

export default Categories;
