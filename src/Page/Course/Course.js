import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseDetails from "../CourseDetails/CourseDetails";
import SideNavbar from "../SideNavbar/SideNavbar";

const Course = () => {
  const AllCourses = useLoaderData();
  return (
    <div className="m-10 grid md:grid-cols-8 gap-4">
      <div className="md:col-span-2">
        <SideNavbar></SideNavbar>
      </div>
      <div className="md:col-span-6">
        <p className="text-3xl font-bold text-center mb-4">All Courses</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-cols-1">
          {AllCourses.map((category) => (
            <CourseDetails
              key={category.id}
              category={category}
            ></CourseDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
