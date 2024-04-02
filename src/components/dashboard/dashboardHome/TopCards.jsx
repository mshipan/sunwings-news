import { IoMdListBox } from "react-icons/io";
import { useGetPostsQuery } from "../../../redux/features/allApis/postApi/postApi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useGetAllCommentsQuery } from "../../../redux/features/allApis/commentApi/commentApi";
import { useGetCategoriesQuery } from "../../../redux/features/allApis/categoryApi/categoryApi";
import { AiOutlineSend } from "react-icons/ai";
import { useAddNoticeMutation } from "../../../redux/features/allApis/noticeApi/noticeApi";
import toast from "react-hot-toast";
import { FcAdvertising } from "react-icons/fc";

const TopCards = () => {
  const { user } = useContext(AuthContext);
  const [addNotice] = useAddNoticeMutation();
  const { data: allPosts, isLoading: postLoading } = useGetPostsQuery({});
  const { data: allComments, isLoading: commentLoading } =
    useGetAllCommentsQuery();

  const { data: allCategories, isLoading: categoryLoading } =
    useGetCategoriesQuery({});

  const authorName = user?.displayName;
  const userSpecificPosts = allPosts?.filter(
    (post) => post?.author === authorName
  );

  const yourValue = 1;

  const handleSubmitNotice = (e) => {
    e.preventDefault();
    const form = e.target;
    const subject = form.subject.value;
    const details = form.details.value;
    const createdAt = new Date();
    const notice = { subject, details, createdAt };
    if (notice) {
      addNotice(notice)
        .then((result) => {
          if (result.data.insertedId) {
            toast.success("Notice sent successfully");
            form.subject.value = "";
            form.details.value = "";
            document.getElementById("my_modal_3").close();
          }
        })
        .catch((error) => toast.error(error.message));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-10">
      <div className="flex flex-row items-center justify-between border border-orange-600 p-4 ">
        <div>
          <h1 className="text-2xl font-sans font-bold">
            {postLoading ? (
              <p className="font-normal">
                <span className="loading loading-spinner loading-sm"></span>
              </p>
            ) : (
              allPosts?.length || 0
            )}
          </h1>
          <Link to="/dashboard/all-posts">
            <p className="text-base hover:text-blue-600 hover:underline">
              All Posts
            </p>
          </Link>
        </div>
        <IoMdListBox className="text-4xl" />
      </div>

      <div className="flex flex-row items-center justify-between border border-orange-600 p-4 ">
        <div>
          <h1 className="text-2xl font-sans font-bold">
            {postLoading ? (
              <p className="font-normal">
                <span className="loading loading-spinner loading-sm"></span>
              </p>
            ) : (
              userSpecificPosts?.length || 0
            )}
          </h1>
          <p className="text-base">My All Posts</p>
        </div>
        <IoMdListBox className="text-4xl" />
      </div>

      <div className="flex flex-row items-center justify-between border border-orange-600 p-4 ">
        <div>
          <h1 className="text-2xl">0</h1>
          <p className="text-base">My All Ads</p>
        </div>
        <IoMdListBox className="text-4xl" />
      </div>

      <div
        onClick={() => document.getElementById("my_modal_3").showModal()}
        className="relative flex flex-row items-center justify-between border border-orange-600 p-4 cursor-pointer"
      >
        <div
          className={`absolute -top-2 -right-2 size-5 bg-red-600 rounded-full ${
            yourValue > 0 ? "animate-ping" : ""
          }`}
        ></div>
        <div
          className={`absolute -top-2 -right-2 size-5 bg-orange-600 rounded-full flex items-center justify-center `}
        >
          <p className="text-base text-white">{yourValue}</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Admin Notice</p>
        </div>
        <IoMdListBox className="text-4xl" />

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-white">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            {/* modal contents */}
            <div className="px-3 py-4">
              <form onSubmit={handleSubmitNotice}>
                <label className="input input-bordered flex items-center gap-2">
                  <FcAdvertising />
                  <input
                    type="text"
                    name="subject"
                    className="grow"
                    placeholder="Subject"
                    required
                  />
                </label>

                <textarea
                  name="details"
                  className="textarea textarea-bordered w-full my-2"
                  placeholder="Details"
                ></textarea>
                <div className="items-end">
                  <button
                    type="submit"
                    className="btn btn-info text-white font-normal w-full flex flex-row"
                  >
                    <span>Send</span>
                    <AiOutlineSend size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      <div className="flex flex-row items-center justify-between border border-orange-600 p-4 ">
        <div>
          <h1 className="text-2xl font-sans font-bold">
            {commentLoading ? (
              <p className="font-normal">
                <span className="loading loading-spinner loading-sm"></span>
              </p>
            ) : (
              allComments?.length || 0
            )}
          </h1>
          <p className="text-base">All Comments</p>
        </div>
        <IoMdListBox className="text-4xl" />
      </div>

      <div className="flex flex-row items-center justify-between border border-orange-600 p-4 ">
        <div>
          <h1 className="text-2xl font-sans font-bold">
            {categoryLoading ? (
              <p className="font-normal">
                <span className="loading loading-spinner loading-sm"></span>
              </p>
            ) : (
              allCategories?.length || 0
            )}
          </h1>
          <p className="text-base">All Categories</p>
        </div>
        <IoMdListBox className="text-4xl" />
      </div>
    </div>
  );
};

export default TopCards;
