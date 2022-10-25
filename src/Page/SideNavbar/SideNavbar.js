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
    <div>
      <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100 rounded-xl h-96">
        <nav className="space-y-8 text-sm w-96">
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
                  className="text-2xl"
                  key={Category.id}
                  to={`/Course/${Category.id}`}
                >
                  {Category.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default SideNavbar;
