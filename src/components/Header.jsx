import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <header className="px-2 md:px-10 flex justify-between items-center h-20 text-white ">
      <h1 className="tracking-wider font-extrabold text-lg md:text-xl text-gray-100">
        &lt;matheus<span className="text-yellow-500">.</span>dev{" "}
        <span className="text-yellow-500">/</span>&gt;
      </h1>

      {/* navbar for large devices */}
      <nav>
        <ul className="hidden md:flex list-none">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-bold cursor-pointer text-md ${
                activeLink === nav.title ? "text-white" : "text-gray-400"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActiveLink(nav.title)}
            >
              <Link to={nav.path}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center text-white">
          <span className="text-white">
            {toggle ? (
              <GiHamburgerMenu className="fill-white" />
            ) : (
              <GrClose className="fill-white" />
            )}
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
