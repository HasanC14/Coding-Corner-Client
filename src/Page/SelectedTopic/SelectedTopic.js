import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseDetails from "../CourseDetails/CourseDetails";
import SideNavbar from "../SideNavbar/SideNavbar";

const SelectedTopic = () => {
  const AllCourses = useLoaderData();
  return (
    <div className="m-10 grid lg:grid-cols-8 md:grid-cols-6 gap-4">
      <div className="lg:col-span-2 md:col-span-1">
        <SideNavbar></SideNavbar>
      </div>
      <div className="lg:col-span-6 md:col-span-5">
        <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 md:ml-16 lg:ml-0">
          {AllCourses.map((category) => (
            <CourseDetails
              key={category._id}
              category={category}
            ></CourseDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedTopic;
