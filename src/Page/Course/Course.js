import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryCard from "../CategoryCard/CategoryCard";
import SideNavbar from "../SideNavbar/SideNavbar";

const Course = () => {
  const Categories = useLoaderData();
  return (
    <div className="m-10 grid md:grid-cols-8 gap-4">
      <div className="md:col-span-2">
        <SideNavbar key={Categories.id} Categories={Categories}></SideNavbar>
      </div>
      <div className="md:col-span-6">
        <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
          {Categories.map((category) => (
            <CategoryCard key={category.id} category={category}></CategoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
