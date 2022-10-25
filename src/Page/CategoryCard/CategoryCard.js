import React from "react";

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
            <button className="btn bg-violet-400 w-80 text-gray-800 hover:bg-violet-500">
              See Courses on {name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
