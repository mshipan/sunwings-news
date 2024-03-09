import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
const LoginWithGoogleCompo = () => {
  const { setUser, googleSignIn, setLoading, loading } =
    useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log("from google", loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div
        onClick={handleGoogleSignIn}
        className="max-w-md w-full p-6 bg-white rounded-md shadow-md"
      >
        {/* ... rest of the form */}
        <FcGoogle />
      </div>
    </div>
  );
};

export default LoginWithGoogleCompo;
