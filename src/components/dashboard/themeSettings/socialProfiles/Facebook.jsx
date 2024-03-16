import { useForm } from "react-hook-form";

import { useState } from "react";
import { imageUpload } from "../../../../api/utils";
import Swal from "sweetalert2";
import {
  useGetAllFacebookQuery,
  useGetFacebookByIdQuery,
  useUpdateFacebookMutation,
} from "../../../../redux/features/allApis/socialMediaApi/facebookApi";
import { Link } from "react-router-dom";

const Facebook = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch } = useForm();

  const { data: allFacebooks } = useGetAllFacebookQuery();
  const [updateFacebook] = useUpdateFacebookMutation();
  const id = allFacebooks?.[0]._id;
  const { data: singleFacebook } = useGetFacebookByIdQuery(id);

  const onSubmit = async (data) => {
    const profileImage = watch("profilePhoto");
    const coverImage = watch("coverPhoto");
    try {
      setLoading(true);
      const imageData1 = await imageUpload(profileImage[0]);
      const imageData2 = await imageUpload(coverImage[0]);
      data.profilePhoto = imageData1.data.display_url;
      data.coverPhoto = imageData2.data.display_url;
      const result = await updateFacebook({
        id: id,
        data: data,
      });
      if (result.data.modifiedCount > 0) {
        setLoading(false);
        Swal.fire({
          title: "Facebook Updated Successfully!",
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
        title: `Error Updating Facebook: ${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <h1 className="text-black text-xl mb-2">Facebook</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 md:w-1/2"
        >
          <div className="form-control">
            <label htmlFor="title" className="text-black mb-2 text-lg">
              Page Title:
            </label>
            <input
              type="text"
              name="title"
              {...register("title")}
              className="bg-white border border-gray-400 px-3 py-2 text-black"
              placeholder="Enter Page Title..."
            />
          </div>

          <div className="form-control">
            <label htmlFor="link" className="text-black mb-2 text-lg">
              Page Link:
            </label>
            <input
              type="text"
              name="link"
              {...register("link")}
              className="bg-white border border-gray-400 px-3 py-2 text-black"
              placeholder="Enter Page Link..."
            />
          </div>

          <div className="form-control">
            <label htmlFor="profilePhoto" className="text-black mb-2 text-lg">
              Page Profile Photo:
            </label>
            <input
              type="file"
              name="profilePhoto"
              {...register("profilePhoto")}
              className="bg-white border border-gray-400 px-3 py-2 text-black"
              placeholder="Enter Page Link..."
            />
          </div>

          <div className="form-control">
            <label htmlFor="coverPhoto" className="text-black mb-2 text-lg">
              Page Cover Photo:
            </label>
            <input
              type="file"
              name="coverPhoto"
              {...register("coverPhoto")}
              className="bg-white border border-gray-400 px-3 py-2 text-black"
              placeholder="Enter Page Link..."
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
              "Update Facebook"
            )}
          </button>
        </form>
        <div className="md:w-1/2 flex flex-col gap-3 border border-gray-500">
          <div className="relative">
            <div>
              <img src={singleFacebook?.coverPhoto} alt="" className="w-full" />
            </div>
            <div className="absolute -bottom-7 left-4">
              <img
                src={singleFacebook?.profilePhoto}
                alt=""
                className="size-48 rounded-full border border-gray-500"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 p-4">
            <h1 className="text-xl text-black font-medium leading-none">
              Facebook Page Name:
              <span className="text-lg ml-5">{singleFacebook?.title}</span>
            </h1>
            <p className="text-xl text-black font-medium leading-none">
              Facebook Page Link:
              <Link to={singleFacebook?.link}>
                <span className="text-lg ml-5 text-blue-600 hover:underline">
                  {singleFacebook?.link}
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facebook;
