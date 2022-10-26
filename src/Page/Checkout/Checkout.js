import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Checkout = () => {
  const SelectedCourse = useLoaderData();
  console.log(SelectedCourse);
  const { instructor, title, thumbnail_url, premium, _id } = SelectedCourse;
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full md:w-2/3 h-[45rem] p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-xl font-semibold">Your cart</h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                src={thumbnail_url}
                alt="Polaroid camera"
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      {title}
                    </h3>
                    <p className="text-sm dark:text-gray-400">
                      by {instructor.name}
                    </p>
                    <p className="text-sm dark:text-gray-400">
                      Course Code {_id}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-semibold">{premium}$</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="flex justify-end space-x-4">
          <Link to={"/Course"}>
            <button
              type="button"
              className="px-6 py-2 border rounded-md dark:border-violet-400"
            >
              Back
              <span className="sr-only sm:not-sr-only"> to Courses</span>
            </button>
          </Link>

          <button
            type="button"
            className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
