// Login.js
import { AuthContext } from "../../providers/AuthProvider";
import LoginWithGoogleCompo from "../../components/shared/LoginWithGoogleCompo";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbFidgetSpinner } from "react-icons/tb";

const Login = () => {
  const { setLoading, loading, signIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        reset();
        toast.success(
          `${loggedUser?.displayName || "Unknown user"} logged in successfully`
        );
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
        toast.error(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          <div className="form-control">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <div className="flex items-center w-full bg-white p-1">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                {...register("password", { required: true })}
                className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your password"
              />
              <div
                className="cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {errors.password && (
              <span className="text-red-600">
                {errors.password.type === "required" &&
                  "Password field is required"}
              </span>
            )}
          </div>
          <div className="flex items-center justify-start">
            <div className="flex items-center bg-blue-500 text-white w-full p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500">
              {loading ? (
                <TbFidgetSpinner className="m-auto animate-spin" size={24} />
              ) : (
                <input
                  type="submit"
                  value="Login"
                  className="text-xl mx-auto w-full"
                />
              )}
            </div>
          </div>
        </form>
        <LoginWithGoogleCompo />
      </div>
    </div>
  );
};

export default Login;
