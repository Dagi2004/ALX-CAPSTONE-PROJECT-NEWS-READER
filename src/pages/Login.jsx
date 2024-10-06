import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [redirect, setRedirected] = useState(false);

  const validate = (email, password) => {
    const errors = {};

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Valid email required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(email, password);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Call the onLogin prop to update the authentication state
      onLogin();

      setEmail("");
      setPassword("");
      alert("Form Submitted Successfully");
      setRedirected(true);
    }
    if (redirect) {
      return <Navigate to="/" />;
    }
  };

  return (
    <div className="md:bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 min-h-screen flex items-center justify-center">
      <div className="text-white text-center mb-4">
        <h1 className="text-xl md:text-3xl font-bold p-2">Welcome back!</h1>
        <p>Enter your Credentials to access your account</p>
      </div>
      <div className="bg-white text-gray-800 mx-auto flex flex-col-reverse md:flex md:flex-row rounded-lg md:max-w-4xl max-w-sm p-5 items-center justify-between shadow-2xl">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-xl font-semibold mb-4">
            Join Here To get top Headlines
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label htmlFor="email" className="text-sm text-gray-700 mt-4">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`border rounded-md p-2 w-full mt-2 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}

              <label htmlFor="password" className="text-sm text-gray-700 mt-4">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`border rounded-md p-2 w-full mt-2 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}

              <button
                className="text-white bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm mt-6 px-6 py-3 w-full font-medium transition duration-300"
                type="submit"
              >
                Login
              </button>
              <p className="mt-4">
                Don't have an account?{" "}
                <Link to="/signup" className="text-indigo-600 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:ml-10 md:mt-0">
          <img
            src="https://plus.unsplash.com/premium_vector-1716978608930-2152eecd770a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3cyUyMHJlYWRlciUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Illustration for sign up"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
