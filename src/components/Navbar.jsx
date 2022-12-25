import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants/constants";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <header className="bg-black text-white flex justify-between items-center h-24 px-4 max-w-[1240px] mx-auto">
      <h1 className="tracking-wider font-extrabold text-xl md:text-2xl text-gray-100">
        &lt;matheus<span className="text-yellow-500">.</span>dev{" "}
        <span className="text-yellow-500">/</span>&gt;
      </h1>

      <nav>
        {/* navbar for large devices */}
        <ul className="hidden md:flex items-center list-none">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-bold cursor-pointer text-md ${
                activeLink === nav.title ? "text-yellow-500" : "text-gray-400"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActiveLink(nav.title)}
            >
              <Link to={nav.path}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        {/* hamburguer menu for mobile devices */}
        <div
          onClick={() => setExpandNavbar((prev) => !prev)}
          className="md:hidden flex flex-1 justify-end items-center text-white"
        >
          {expandNavbar ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>

        {/* expanded navbar for mobile devices */}
        <div
          className={
            expandNavbar
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black/90 px-4 ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <ul className="pt-12 uppercase text-lg font-semibold">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`p-4 font-medium cursor-pointer text-lg ${
                  activeLink === nav.title ? "text-yellow-500" : "text-gray-400"
                } ${
                  index === navLinks.length - 1
                    ? ""
                    : "border-b border-gray-600"
                }`}
                onClick={() => setActiveLink(nav.title)}
              >
                <Link to={nav.path}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div
            className={`${
              expandNavbar ? "flex" : "hidden"
            } p-6 bg-black border-2 border-gray-400 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-sm sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-lg ${
                    activeLink === nav.title
                      ? "text-yellow-500"
                      : "text-gray-400"
                  } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                  onClick={() => setActiveLink(nav.title)}
                >
                  <Link to={nav.path}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
