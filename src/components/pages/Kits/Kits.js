import React from "react";
import { useLoaderData } from "react-router-dom";
import Kit from "../Kit/Kit";

const Kits = () => {
  const courses = useLoaderData();
  return (
    <div className="min-h-screen grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-3">
      {courses.map((kit) => (
        <Kit key={kit.id} kit={kit} />
      ))}
    </div>
  );
};

export default Kits;
