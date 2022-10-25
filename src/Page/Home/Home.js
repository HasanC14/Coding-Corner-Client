import React from "react";
import HeroCover from "../../Image/HeroCover.png";
import Blog from "../Blog/Blog";
import FAQ from "../FAQ/FAQ.js";
import Reviews from "../Reviews/Reviews";
import { useLoaderData } from "react-router-dom";
import CategoryCard from "../CategoryCard/CategoryCard";
const Home = () => {
  const Categories = useLoaderData();
  return (
    <div>
      <section id="hero">
        <div className="dark:bg-violet-400">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
              Not sure which tech career is right for you?
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
              CODE CORNER skill path is your portal to discovering whether a
              career in Computer Science, Web Development, or Data Science is
              right for you.
            </p>
            <div className="flex flex-wrap justify-center">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
              >
                See Courses
              </button>
            </div>
          </div>
        </div>
        <img
          src={HeroCover}
          alt=""
          className="lg:w-1/2 w-4/6 mx-auto mb-12 -mt-28 rounded-2xl lg:-mt-80"
        />
      </section>
      <section id="Course" className="container flex justify-center md:ml-48">
        <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
          {Categories.map((category) => (
            <CategoryCard key={category.id} category={category}></CategoryCard>
          ))}
        </div>
      </section>
      <section id="Blog">
        <Blog></Blog>
      </section>
      <section id="Reviews">
        <Reviews></Reviews>
      </section>
      <section id="FAQ">
        <FAQ></FAQ>
      </section>
    </div>
  );
};

export default Home;
