import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Pdf from "react-to-pdf";
const SelectedCourse = () => {
  const ref = React.createRef();
  const SelectedCourse = useLoaderData();
  const {
    instructor,
    title,
    rating,
    taken_by,
    details,
    thumbnail_url,
    premium,
    _id,
  } = SelectedCourse;
  return (
    <div className="md:mt-20 md:mb-20">
      <section className="py-6 dark:text-gray-50">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x md:mt-14">
          <div className="md:mr-10 mb-5">
            <img src={thumbnail_url} alt="Login_Image" className="rounded-lg" />
          </div>
          <div>
            <div className="ml-10">
              <div className="text-black" ref={ref}>
                <p className="text-2xl">{title}</p>
                <p>{details}</p>
              </div>
              <div className="mt-3 flex">
                <img
                  src={instructor.img}
                  alt="instructor_Image"
                  className="w-20 h-20 rounded-full"
                />
                <div className="text-xl ml-5">
                  <p>
                    Created by{" "}
                    <span className="text-violet-400">{instructor.name}</span>
                  </p>
                  <p>{taken_by} Students</p>
                  <p className="flex text-violet-400">
                    {rating} <FaStar className="ml-2 mt-0.5" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center mb-10">
        <div className="grid grid-cols-1 gap-4">
          <Pdf targetRef={ref} filename="Outline.pdf">
            {({ toPdf }) => (
              <button
                type="submit"
                className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400 w-96"
                onClick={toPdf}
              >
                Download Course Outline
              </button>
            )}
          </Pdf>

          <Link to={`/Checkout/${_id}`}>
            <button
              type="submit"
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400 w-96"
            >
              Get Premium Access <span className="font-bold">{premium}$</span>
            </button>
          </Link>
        </div>
      </div>
      {/* <div className="text-black ">
        <div className="ml-20">
          <p className="text-5xl font-bold ">
            {title} <span className="text-xl">by {instructor.name}</span>
          </p>
          <p className="text-xl mr-[1300px]">{details}</p>
          <p className="text-xl">
            Taken by <span className="font-bold">{taken_by}</span> Students
          </p>
          <p className="text-xl">
            {" "}
            <span className="font-bold">{rating}</span> Stars Rating
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default SelectedCourse;
