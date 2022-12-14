import React from "react";
import HeroCover from "../../Image/HeroCover.png";
import Blog from "../Blog/Blog";
import FAQ from "../FAQ/FAQ.js";
import Reviews from "../Reviews/Reviews";
import { Link, useLoaderData } from "react-router-dom";
import CategoryCard from "../CategoryCard/CategoryCard";
import SideNavbar from "../SideNavbar/SideNavbar";
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
              <span className="font-bold">CODE CORNER </span>skill path is your
              portal to discovering whether a career in Computer Science, Web
              Development, or Data Science is right for you.
            </p>
            <div className="flex flex-wrap justify-center">
              <Link to={"/Course"}>
                <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">
                  See Courses
                </button>
              </Link>
            </div>
          </div>
        </div>
        <img
          src={HeroCover}
          alt="Cover_Image"
          className="lg:w-1/2 w-4/6 mx-auto mb-12 -mt-28 rounded-2xl lg:-mt-80"
        />
      </section>
      {/* For Mobile View */}
      <section className="m-10 lg:hidden text-center">
        <SideNavbar></SideNavbar>
      </section>
      {/* For Desktop view */}
      <p className="md:text-5xl text-center font-bold mb-5 lg:block hidden">
        Courses we offer
      </p>
      <section className="container lg:flex justify-center lg:ml-48 md:ml-24 hidden">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 grid-cols-1 ">
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
