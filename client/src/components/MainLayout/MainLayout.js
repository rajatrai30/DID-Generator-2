import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-4">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                MainLayout
              </h1>
            </div>
            {/* <div className="bg-white flex flex-row items-center justify-center p-8 rounded-lg shadow-md"> */}
            <div className="flex items-center justify-center">
              <Link to="/login">
                <button className="button">
                 Get Started
                </button>
              </Link>
            </div>
            {/* <div className="flex flex-row items-center justify-evenly p-6 sm:p-8">
              <div className="bg-white flex flex-row items-center justify-center p-8 rounded-lg shadow-md">
                <Link to="/did">
                  <button className="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      viewBox="0 0 24 24"
                      stroke="#000000"
                      class="h-16 w-16"
                    >
                      <path d="M19 2H9c-1.1 0-1.99.9-1.99 2L7 22l5-5h5c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 14H9v-2h5v2zm3-4H9v-2h8v2zm0-4H9V6h8v2z" />
                    </svg>
                  </button>
                </Link>
              </div>
              <div className="bg-white flex flex-row items-center justify-center p-8 rounded-lg shadow-md">
                <Link to="/decentralizedStorage">
                  <input
                    type="file"
                    name="current"
                    id="current"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  <button className="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#fff"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-16 w-16"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Welcome;
