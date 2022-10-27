import React from "react";
import { Link } from "react-router-dom";
const CourseDetails = ({ category }) => {
  const { title, details, thumbnail_url, _id } = category;
  return (
    <div>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 lg:h-[750px]">
        <div>
          <img
            src={thumbnail_url}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500 rounded-lg"
          />
          <h2 className="mb-1 text-xl font-semibold">{title}</h2>
          <p className="text-sm dark:text-gray-400">{details}</p>
        </div>
        <div className="flex flex-wrap justify-between">
          <Link to={`/SelectedCourse/${_id}`}>
            <button className="btn w-full bg-violet-400 text-gray-800 hover:bg-violet-500">
              See Full Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
