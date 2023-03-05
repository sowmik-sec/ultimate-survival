import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center mx-12 my-2">
      <div className="flex items-center">
        <Link to="/">
          <img className="w-14 h-12 mr-3" src={Logo} alt="" />
        </Link>
        <Link to="/">
          <p className="text-lg font-bold hover:bg-orange-500 cursor-pointer p-2 rounded">
            Ultimate Survival
          </p>
        </Link>
      </div>
      <div className="md:flex">
        <div onClick={() => setOpen(!open)} className="md:hidden">
          {open ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 md:bg-none my-3 bg-blue-200" : "top-[-500px]"
          }`}
        >
          <Link
            to="/courses"
            className="text-lg font-bold hover:bg-orange-500 cursor-pointer p-2 rounded"
          >
            <p>Courses</p>
          </Link>
          <Link
            to="/blog"
            className="text-lg font-bold hover:bg-orange-500 cursor-pointer p-2 rounded"
          >
            <p>Blog</p>
          </Link>
          <Link
            to="/FAQ"
            className="text-lg font-bold hover:bg-orange-500 cursor-pointer p-2 rounded"
          >
            <p>FAQ</p>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
