import React, { useRef } from "react";
import { useContext } from "react";
import { FaBars, FaTimes, FaSun, FaMoon, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import swal from "sweetalert";
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
        swal({
          title: "Logout Successful",
          button: "OK",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <header>
      <div className="lg:max-w-screen-xl mx-auto m-0">
        {/* Logo */}
        <div>
          <Link to="/" className="p-2 mr-4 inline-flex items-center">
            <img src={logo} alt="" className="w-10 mr-3" />
            <span className="text-xl font-bold uppercase tracking-wide text-violet-400">
              CODE CORNER
            </span>
          </Link>
        </div>
        {/* Menu */}
        <div className="lg:ml-96">
          <nav ref={navRef}>
            <Link to="/" className="hover:border-b-2 border-violet-400">
              Home
            </Link>
            <Link to="/Course" className="hover:border-b-2 border-violet-400">
              Courses
            </Link>
            <Link to="/Blog" className="hover:border-b-2 border-violet-400">
              Blog
            </Link>
            <Link to="/faq" className="hover:border-b-2 border-violet-400">
              FAQ
            </Link>
            {User ? (
              <Link
                onClick={HandleLogout}
                className="hover:border-b-2 border-violet-400"
              >
                Logout
              </Link>
            ) : (
              <>
                <Link
                  to="/Login"
                  className="hover:border-b-2 border-violet-400"
                >
                  Login
                </Link>
                <Link
                  to="/Register"
                  className="hover:border-b-2 border-violet-400"
                >
                  Register
                </Link>
              </>
            )}
            {User ? (
              <div className="md:w-20 md:ml-10">
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

            {/* Mobile view Toggle */}
            {/* <div className="flex justify-end lg:hidden">
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
            </div> */}
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
        </div>
        {/* Desktop view Toggle */}
        {/* <div className="lg:flex justify-end hidden ">
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
        </div> */}
      </div>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
