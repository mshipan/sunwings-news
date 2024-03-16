import { useForm } from "react-hook-form";
import { useState } from "react";
import { imageUpload } from "../../../../api/utils";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import {
  useGetAllTwitterQuery,
  useUpdateTwitterMutation,
} from "../../../../redux/features/allApis/socialMediaApi/twitterApi";
const Twitter = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch, reset } = useForm();

  const { data: allTwitters } = useGetAllTwitterQuery();
  const [updateTwitter] = useUpdateTwitterMutation();
  const id = allTwitters?.[0]._id;
  const singleTwitter = allTwitters?.[0];
  const onSubmit = async (data) => {
    const profileImage = watch("profilePhoto");
    const coverImage = watch("coverPhoto");
    try {
      setLoading(true);
      const imageData1 = await imageUpload(profileImage[0]);
      const imageData2 = await imageUpload(coverImage[0]);
      data.profilePhoto = imageData1.data.display_url;
      data.coverPhoto = imageData2.data.display_url;
      const result = await updateTwitter({
        id: id,
        data: data,
      });
      if (result.data.modifiedCount > 0) {
        setLoading(false);
        reset();
        Swal.fire({
          title: "Twitter Updated Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Error Updating Twitter: ${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <h1 className="text-black text-xl mb-2">Twitter</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 md:w-1/2"
        >
          <div className="form-control">
            <label htmlFor="title" className="text-black mb-2 text-lg">
              Twitter Id Title:
            </label>
            <input
              type="text"
              name="title"
              {...register("title")}
              className="bg-white border border-gray-400 px-3 py-2 text-black"
              placeholder="Enter Title..."
            />
          </div>

          <div className="form-control">
            <label htmlFor="link" className="text-black mb-2 text-lg">
              Id Link:
            </label>
            <input
              type="text"
              name="link"
              {...register("link")}
              className="bg-white border border-gray-400 px-3 py-2 text-black"
              placeholder="Enter Link..."
            />
          </div>

          <div className="form-control">
            <label htmlFor="profilePhoto" className="text-black mb-2 text-lg">
              Profile Photo:
            </label>
            <input
              type="file"
              name="profilePhoto"
              {...register("profilePhoto")}
              className="bg-white border border-gray-400 px-3 py-2 text-black"
            />
          </div>

          <div className="form-control">
            <label htmlFor="coverPhoto" className="text-black mb-2 text-lg">
              Cover Photo:
            </label>
            <input
              type="file"
              name="coverPhoto"
              {...register("coverPhoto")}
              className="bg-white border border-gray-400 px-3 py-2 text-black"
            />
          </div>

          <button
            type="submit"
            className="px-3 py-2 bg-blue-600 text-white font-medium"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-1">
                <span className="loading loading-spinner loading-md"></span>{" "}
                Updating...
              </div>
            ) : (
              "Update Twitter"
            )}
          </button>
        </form>
        {singleTwitter && (
          <div className="md:w-1/2 h-fit flex flex-col gap-3 border border-gray-500">
            <div className="relative">
              <div>
                <img
                  src={singleTwitter?.coverPhoto}
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="absolute bottom-0 md:-bottom-7 left-4">
                <img
                  src={singleTwitter?.profilePhoto}
                  alt=""
                  className="md:size-48 size-32 rounded-full border border-gray-500"
                />
              </div>
              <div className="flex flex-col gap-1 p-4 absolute bottom-2 md:bottom-6 left-28 md:left-48 ">
                <h1 className=" text-xl md:text-4xl text-white font-medium leading-none">
                  <Link to={singleTwitter?.link}>
                    <span className="ml-5 hover:underline">
                      {singleTwitter?.title}
                    </span>
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Twitter;
