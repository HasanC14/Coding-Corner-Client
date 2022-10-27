import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseDetails from "../CourseDetails/CourseDetails";
import SideNavbar from "../SideNavbar/SideNavbar";

const SelectedTopic = () => {
  const AllCourses = useLoaderData();
  return (
    <div className="m-10 grid lg:grid-cols-8 gap-4">
      <div className="lg:col-span-2">
        <SideNavbar></SideNavbar>
      </div>
      <div className="lg:col-span-6 ">
        <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 md:ml-16 lg:ml-0">
          {AllCourses.map((category) => (
            <div className="flex justify-center">
              <CourseDetails
                key={category._id}
                category={category}
              ></CourseDetails>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedTopic;
