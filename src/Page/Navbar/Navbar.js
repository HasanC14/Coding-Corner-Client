import React, { useRef } from "react";
import { useContext } from "react";
import { FaBars, FaTimes, FaSun, FaMoon, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import logo from "../../Image/logo.png";
import "./Navbar.css";
const Navbar = () => {
  const navRef = useRef();
  const { User, LogOut } = useContext(AuthContext);
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const HandleLogout = () => {
    LogOut()
      .then(() => {
        alert("Sign-out successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <header>
      <div className="grid grid-cols-3 gap-8">
        <div>
          <Link to="/" className="p-2 mr-4 inline-flex items-center">
            <img src={logo} alt="" className="w-10 mr-3" />
            <span className="text-xl font-bold uppercase tracking-wide text-violet-400">
              CODE CORNER
            </span>
          </Link>
        </div>
        <div>
          <nav ref={navRef}>
            <Link to="/">Home</Link>
            <Link to="/Course">Courses</Link>
            <a href="#Reviews">Reviews</a>
            <Link to="/Blog">Blog</Link>
            {User ? (
              <button onClick={HandleLogout}>Logout</button>
            ) : (
              <>
                <Link to="/Login">Login</Link>
                <Link to="/Register">Register</Link>
              </>
            )}
            {User ? (
              <div className="md:w-20">
                <img
                  src={User.photoURL}
                  alt="User_image"
                  className="w-10 h-10 bg-center bg-cover rounded-full dark:bg-gray-500"
                  title={User.displayName}
                />
                <p className="text-xl font-bold font-mono text-center ml-3">
                  {User.displayName}
                </p>
              </div>
            ) : (
              <FaUser></FaUser>
            )}

            <div className="flex justify-end md:hidden">
              <label className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                <span>
                  <FaSun />
                </span>
                <span className="relative">
                  <input id="Toggle1" type="checkbox" className="hidden peer" />
                  <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                  <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                </span>
                <span>
                  <FaMoon />
                </span>
              </label>
            </div>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
        </div>

        <div className="md:flex justify-end hidden">
          <label className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
            <span>
              <FaMoon />
            </span>
            <span className="relative">
              <input id="Toggle2" type="checkbox" className="hidden peer" />
              <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-violet-400"></div>
              <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-violet-400"></div>
            </span>
            <span>
              <FaSun />
            </span>
          </label>
        </div>
      </div>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
