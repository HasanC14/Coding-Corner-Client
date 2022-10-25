import React from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
const CourseDetails = ({ category }) => {
  const { instructor, title, rating, taken_by, details, thumbnail_url } =
    category;
  return (
    <div>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex space-x-4">
          <img
            alt="instructor_img"
            src={instructor.img}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <p>{instructor.name}</p>
            <div className="flex space-x-2 text-sm dark:text-gray-400">
              <button
                type="button"
                className="flex items-center p-1 space-x-1.5 dark:text-violet-400"
              >
                <FaCheckCircle></FaCheckCircle>
                <span>{taken_by}</span>
              </button>
              <button
                type="button"
                className="flex items-center p-1 space-x-1.5 dark:text-violet-400"
              >
                <FaStar></FaStar>
                <span>{rating.number}</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            src={thumbnail_url}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">{title}</h2>
          <p className="text-sm dark:text-gray-400">{details}</p>
        </div>
        <div className="flex flex-wrap justify-between">
          <button className="btn bg-violet-400 w-full text-gray-800 hover:bg-violet-500">
            Get Premium Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
