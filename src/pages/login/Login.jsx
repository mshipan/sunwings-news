// Login.js

import { useState } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
import LoginWithGoogleCompo from "../../components/shared/LoginWithGoogleCompo";

const Login = () => {
  //   const { loading, setLoading, signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      // Implement your authentication logic here
      // For simplicity, this example assumes a successful login
      console.log("Logged in successfully!");
    } catch (error) {
      console.error("Login error:", error.message);
      setError("Invalid email or password"); // Update the error message based on your authentication logic
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Login</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
          >
            Login
          </button>
        </form>
      </div>
      <LoginWithGoogleCompo />
    </div>
  );
};

export default Login;
