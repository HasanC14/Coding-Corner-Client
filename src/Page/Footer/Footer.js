import { EmojiEmotions } from "@mui/icons-material";
import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../Image/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
          <div className="flex justify-around">
            <div className="flex justify-center align-middle">
              <Link to="/" className="p-2 mr-4 inline-flex items-center">
                <img src={logo} alt="" className="w-10 mr-3" />
                <span className="text-xl font-bold uppercase tracking-wide text-violet-400">
                  CODE CORNER
                </span>
              </Link>
            </div>
            <div className="col-span-6 text-center md:text-left md:col-span-3">
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <Link to="/" className="hover:dark:text-violet-400">
                    Home
                  </Link>
                </div>
                <div>
                  <Link to="/Course" className="hover:dark:text-violet-400">
                    Course
                  </Link>
                </div>
                <div>
                  <a href="/Blog" className="hover:dark:text-violet-400">
                    Blog
                  </a>
                </div>
                <div>
                  <a href="#Reviews" className="hover:dark:text-violet-400">
                    Reviews
                  </a>
                </div>
                <div>
                  <Link to="/Login" className="hover:dark:text-violet-400">
                    Login
                  </Link>
                </div>
                <div>
                  <Link to="/Register" className="hover:dark:text-violet-400">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid justify-center pt-6 lg:justify-between">
            <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
              <span>??2022 All rights reserved</span>

              <span>
                Made by
                <a
                  href="https://www.facebook.com/hasan.chowdhuryD/"
                  className="hover:text-violet-500"
                >
                  Hasan Chowdhury
                </a>
              </span>
            </div>
            <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
              <a
                href="https://www.facebook.com/hasan.chowdhuryD"
                title="Email"
                className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900 hover:bg-violet-500"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/HasanCh38413037"
                title="Twitter"
                className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900 hover:bg-violet-500"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/HasanC14"
                title="GitHub"
                className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900 hover:bg-violet-500"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
