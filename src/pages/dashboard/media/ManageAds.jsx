import { Helmet } from "react-helmet-async";
import adImg from "../../../assets/testad2.jpg";

const ManageAds = () => {
  return (
    <div>
      <Helmet>
        <title>Sunwings News | Manage All Advertisement</title>
      </Helmet>
      <h1 className="text-black text-2xl mb-6">Manage All Ads</h1>
      <div className="mt-4 overflow-y-scroll border border-black">
        <table className="table table-zebra ">
          <thead>
            <tr className="table-row">
              <th className="text-black">#</th>
              <th className="text-black">Ad Image</th>
              <th className="text-black">Created At</th>
              <th className="text-black">Name</th>
              <th className="text-black">Phone</th>
              <th className="text-black">Status</th>
              <th className="text-black">Positon</th>
              <th className="text-black">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td className="text-black">1</td>
              <td>
                <img src={adImg} alt="Ad image" className="w-20" />
              </td>
              <td className="text-black">15/04/2024</td>
              <td className="text-black text-nowrap">Shipan Mallik</td>
              <td className="text-black">+8801622543390</td>
              <td className="text-black">Pending</td>
              <td className="text-black">beside_top_logo</td>
              <td>
                <div className="flex flex-row items-center gap-2">
                  <button className="bg-orange-600 px-3 py-1">View</button>
                  <button className="bg-red-600 px-3 py-1 text-white">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAds;
