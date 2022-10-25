import { Category } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const SideNavbar = ({ Categories }) => {
  console.log(Categories);
  return (
    <div>
      <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100 rounded-xl h-96">
        <nav className="space-y-8 text-sm">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
              COURSES
            </h2>
            <div className="flex flex-col space-y-1">
              {Categories.map((Category) => (
                <Link>{Category.name}</Link>
              ))}
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default SideNavbar;
