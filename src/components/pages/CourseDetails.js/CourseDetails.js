import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import DownloadPage from "../../DownloadPage/DownloadPage";

const CourseDetails = () => {
  const detail = useLoaderData();
  console.log(detail);
  const { courseTitle, details, photo, instructor, price, rating, id } = detail;
  return (
    <div className="flex flex-col justify-between items-center">
      <div>
        <DownloadPage
          rootElementId="pageToDownload"
          downloadFileName="courseDetails"
        />
      </div>
      <div
        id="pageToDownload"
        className="min-h-screen p-6 h-auto w-[460px] mx-auto border-green-200"
      >
        <img className="w-[450px] h-[400px]" src={photo} alt="" />
        <p className="text-3xl">{courseTitle}</p>
        <div className="flex justify-between items-center">
          <p>Instructor: {instructor?.name}</p>
          <img
            className="w-12 h-12 rounded-full"
            src={instructor.image}
            alt=""
          />
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
        <p>{details}</p>
        <div className="text-center">
          <Link to={`/courses-kits/enroll`}>
            <button className="p-2 bg-orange-400 rounded-md">Enroll Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
