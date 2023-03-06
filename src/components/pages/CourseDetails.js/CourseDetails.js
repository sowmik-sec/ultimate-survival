import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const detail = useLoaderData();
  console.log(detail);
  const { courseTitle, details, photo, instructor } = detail;
  return (
    <div className="min-h-screen p-6 h-auto w-[460px] mx-auto border-green-200">
      <img className="w-[450px] h-[400px]" src={photo} alt="" />
      <p className="text-3xl">{courseTitle}</p>
      <div className="flex justify-between items-center">
        <p>Instructor: {instructor.name}</p>
        <img className="w-12 h-12 rounded-full" src={instructor.image} alt="" />
      </div>
      <p>{details}</p>
    </div>
  );
};

export default CourseDetails;
