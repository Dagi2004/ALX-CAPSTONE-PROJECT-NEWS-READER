import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = (email, password, name) => {
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Valid email required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    if (confirmpassword !== password) {
      errors.confirmpassword = "Passwords do not match";
    }
    setEmail("");
    setName("");
    setPassword("");
    setConfirmpassword("");
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate(email, password, name);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Form Submiited Succesfully");
      return <Navigate to={"/"} />;
    }
  };

  return (
    <div className="md:bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 min-h-screen flex items-center justify-center">
      <div className="text-white text-center mb-4">
        <p className="text-xl md:text-3xl font-bold p-2">
          Sign Up for the Latest News
        </p>
      </div>
      <div className="bg-white text-gray-800 mx-auto flex flex-col-reverse md:flex md:flex-row rounded-lg md:max-w-4xl max-w-sm p-5 items-center justify-between shadow-2xl">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-xl font-semibold mb-4">Create Your Account</h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label htmlFor="name" className="text-sm text-left text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`border rounded-md p-2 w-full mt-2 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}

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

              <label
                htmlFor="confirmpassword"
                className="text-sm text-gray-700 mt-4"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmpassword"
                value={confirmpassword}
                onChange={(e) => setConfirmpassword(e.target.value)}
                className={`border rounded-md p-2 w-full mt-2 ${
                  errors.confirmpassword ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              />
              {errors.confirmpassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmpassword}
                </p>
              )}
              <button
                className="text-white bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm mt-6 px-6 py-3 w-full font-medium transition duration-300"
                type="submit"
              >
                Sign Up
              </button>
              <p className="mt-4">
                Have an account?{" "}
                <Link to="/login" className="text-indigo-600 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:ml-10 md:mt-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-FzabZJTpME0FMt660o2-eIdzZTYycsJTA&s"
            alt="Illustration for sign up"
            className="rounded-lg object-cover w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
