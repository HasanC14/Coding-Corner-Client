import React from "react";
import SignUpImg from "../../Image/SignUp.png";
const Register = () => {
  return (
    <div>
      <section className="py-6 dark:text-gray-50">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x mt-14">
          <div>
            <img src={SignUpImg} alt="Login_Image" />
          </div>
          <form
            novalidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid items-center justify-center"
          >
            <label className="block w-96">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Leroy Jenkins"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400"
              />
            </label>
            <label className="block w-96">
              <span className="mb-1">Photo Url</span>
              <input
                type="text"
                placeholder="https://xyz.com"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400"
              />
            </label>
            <label className="block w-96">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="leroy@jenkins.com"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 "
              />
            </label>
            <label className="block w-96">
              <span className="mb-1">Password</span>
              <input
                type="email"
                placeholder="*********"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 "
              />
            </label>
            <button
              type="button"
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400 w-96"
            >
              SING UP
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
