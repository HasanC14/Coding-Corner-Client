import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { name, img } = category;
  return (
    <div className="cards">
      <div className="card w-96 h-72 bg-base-200 shadow-xl image-full">
        <figure>
          <img src={img} alt="Course Card Thumbnail" />
        </figure>
        <div className="card-body">
          <p className="card-title text-5xl text-white">{name}</p>
          <div className="card-actions justify-center">
            <Link to={`/Course/${category.id}`}>
              <button className="btn bg-violet-400 w-80 text-gray-800 hover:bg-violet-500">
                See Courses on {name}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
