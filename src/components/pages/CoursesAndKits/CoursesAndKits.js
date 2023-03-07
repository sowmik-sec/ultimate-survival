import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../../Header/Header";

const CoursesAndKits = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-5 gap-2">
        <div className="col-span-1 ml-24 mt-24">
          <NavLink to="courses">
            <h2 className="text-2xl">Courses</h2>
          </NavLink>
          <NavLink to="kits">
            <h2 className="text-2xl">Kits</h2>
          </NavLink>
        </div>
        <div className="col-span-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CoursesAndKits;
