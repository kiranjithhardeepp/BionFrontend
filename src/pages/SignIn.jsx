import React from "react";

const SignIn = () => {
  return (
    <div
      className="

     h-screen flex justify-center items-center"
    >
      <div className="bg-gray-900 rounded-lg w-80 p-6 shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white">Sign In</h1>
        </div>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email..."
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password..."
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
