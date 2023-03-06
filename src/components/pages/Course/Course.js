import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  console.log(course);
  const { courseTitle, details, photo, instructor, id, price, rating } = course;
  return (
    <div className="p-5 m-3 flex flex-col justify-between">
      <div>
        <img src={photo} alt="" className="h-96 w-96" />
        <h1 className="text-3xl">{courseTitle}</h1>
        <p>{instructor.name}</p>
        {details.length > 150 ? details.slice(0, 150) + "..." : details}
      </div>
      <div className="flex justify-between">
        <p>${price}</p>
        <p>
          ⭐⭐⭐⭐
          <FontAwesomeIcon
            className="text-yellow-400"
            icon={faStarHalfStroke}
          />{" "}
          {rating}
        </p>
      </div>
      <div className="text-center">
        <Link to={`/courses/${id}`}>
          <button className="bg-amber-400 p-2 rounded-md">Show Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Course;
