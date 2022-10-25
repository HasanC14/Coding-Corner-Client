import React from "react";
import { useLoaderData } from "react-router-dom";

import CategoryCard from "../CategoryCard/CategoryCard";
import CourseDetails from "../CourseDetails/CourseDetails";
import SideNavbar from "../SideNavbar/SideNavbar";

const Course = () => {
  const AllCourses = useLoaderData();
  console.log(AllCourses);
  return (
    <div className="m-10 grid md:grid-cols-8 gap-4">
      <div className="md:col-span-2">
        <SideNavbar></SideNavbar>
      </div>
      <div className="md:col-span-6">
        <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
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
