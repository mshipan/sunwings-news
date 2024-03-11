import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { saveUser } from "../../api/auth";
import { TbFidgetSpinner } from "react-icons/tb";
const LoginWithGoogleCompo = () => {
  const { setUser, googleSignIn, setLoading, loading } =
    useContext(AuthContext);
  const handleGoogleSignIn = () => {
    setLoading(true);
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log("from google", loggedUser);

        setUser(loggedUser);
        const userInfo = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          image: loggedUser.photoURL,
        };
        saveUser(userInfo).then((data) => {
          if (data.insertedId) {
            toast.success(
              `${
                loggedUser?.displayName || "Unknown user"
              } logged in successfully`
            );
            setLoading(false);
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
        setLoading(false);
      });
  };
  return (
    <div className="flex flex-row items-center justify-center bg-gray-50">
      <div
        onClick={handleGoogleSignIn}
        className="max-w-md w-full p-6 bg-white rounded-md shadow-md"
      >
        {loading ? (
          <TbFidgetSpinner className="m-auto animate-spin" size={24} />
        ) : (
          <>
            <FcGoogle className="text-4xl  bg-white rounded " />
          </>
        )}
      </div>
    </div>
  );
};

export default LoginWithGoogleCompo;
