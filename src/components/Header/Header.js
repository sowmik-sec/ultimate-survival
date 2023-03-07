import { faBars, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logout()
      .then(() => console.log("user logged out"))
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex justify-between items-center mx-12 my-2">
      <div className="flex items-center">
        <NavLink to="/">
          <img className="w-14 h-12 mr-3" src={Logo} alt="" />
        </NavLink>
        <NavLink to="/">
          <p className="text-lg font-bold hover:bg-orange-500 cursor-pointer p-2 rounded">
            Ultimate Survival
          </p>
        </NavLink>
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
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 md:bg-none my-3 bg-blue-200" : "top-[-500px]"
          }`}
        >
          <NavLink
            to="/courses-kits"
            className="text-lg font-bold hover:bg-orange-500 cursor-pointer p-2 rounded"
          >
            <p>Courses & kits</p>
          </NavLink>
          <NavLink
            to="/blog"
            className="text-lg font-bold hover:bg-orange-500 cursor-pointer p-2 rounded"
          >
            <p>Blog</p>
          </NavLink>
          <NavLink
            to="/FAQ"
            className="text-lg font-bold hover:bg-orange-500 cursor-pointer p-2 rounded"
          >
            <p>FAQ</p>
          </NavLink>
          {user ? (
            <Link
              onClick={handleLogOut}
              className="text-lg font-bold hover:bg-orange-500 cursor-pointer p-2 rounded"
            >
              Log out
            </Link>
          ) : (
            <>
              <NavLink
                to="/login"
                className="text-lg font-bold hover:bg-orange-500 cursor-pointer p-2 rounded"
              >
                Log In
              </NavLink>
              <NavLink
                to="/signup"
                className="text-lg font-bold hover:bg-orange-500 cursor-pointer p-2 rounded"
              >
                Sign Up
              </NavLink>
            </>
          )}
          {user?.photoURL ? (
            <NavLink to="/user-profile">
              <img
                title={user.displayName}
                className="w-11 rounded-full"
                src={user.photoURL}
                alt=""
              />
            </NavLink>
          ) : (
            <FontAwesomeIcon icon={faUser} />
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
