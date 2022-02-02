import React from "react";

const Log = () => {
  return (
    <div>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div className="relative">
          <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
            Email
          </label>
          <input
            className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
            type=""
            placeholder="Enter your Email"
          />
        </div>
        <div className="mt-8 content-center">
          <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
            Password
          </label>
          <input
            className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
            type=""
            placeholder="Enter your password"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
          >
            Sign in
          </button>
        </div>
        <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
          <span>Don't have an account?</span>
          <a
            href="#"
            className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
          >
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Log;
