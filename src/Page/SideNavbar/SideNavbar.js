import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  const [Categories, setCategories] = useState([]);

  const fetchData = () => {
    fetch("https://coding-corner-server.vercel.app/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="text-center">
      <aside className=" p-6 dark:bg-gray-900 dark:text-gray-100 rounded-xl h-80 mt-10">
        <div className="space-y-2">
          <Link
            to={"/Course"}
            className="text-3xl text-center font-semibold tracking-widest uppercase dark:text-gray-400"
          >
            COURSES
          </Link>
          <div className="flex flex-col space-y-1">
            {Categories.map((Category) => (
              <Link
                className="text-2xl hover:text-violet-400 hover:border-b-2 border-violet-400"
                key={Category.id}
                to={`/Course/${Category.id}`}
              >
                {Category.name}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideNavbar;
