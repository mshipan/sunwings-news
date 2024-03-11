// SignUp.js

import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../api/utils";
import { saveUser } from "../../api/auth";
import { useAddNewUserMutation } from "../../redux/features/allApis/usersApi/usersApi";

const SignUp = () => {
  const { createUser, setUser, updateUserProfile, setLoading, user } =
    useContext(AuthContext);

  const [error] = useState("");
  const { register, handleSubmit } = useForm();

  const [addNewUser] = useAddNewUserMutation();
  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);

    // image upload
    const image = data.photo[0];
    imageUpload(image).then((imageData) => {
      const imageUrl = imageData?.data?.display_url;
      createUser(data.email, data.password)
        .then(() => {
          updateUserProfile(data.name, imageUrl).then(() => {
            setUser({
              ...user,
              displayName: data.name,
              photoUrl: imageUrl,
            });
            const userInfo = {
              uid: data.uid,
              name: data.name,
              image: imageUrl,
              email: data.email,
              role: data.role,
            };
            addNewUser(userInfo)
              .then((data) => {
                if (data.insertedId) {
                  setLoading(false);
                  console.log(data);
                }
              })
              .catch((error) => {
                console.log(error);
              });
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700"
            >
              Photo:
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              {...register("photo")}
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              {...register("password", { required: true })}
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role:
            </label>
            <select
              name="role"
              {...register("role", { required: true })}
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
            >
              <option disabled value="">
                Select a role
              </option>
              <option value="journalist">Journalist/Reporter</option>
              <option value="editor">Editor</option>
              <option value="administrator">Administrator</option>
              <option value="advertiser">Advertiser</option>
              <option value="moderator">Moderator</option>
            </select>
          </div>
          {error && <p className="text-red-500">{error}</p>}

          <input
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
            type="submit"
            value="Sign Up"
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
