import React from "react";
import { Link } from "react-router-dom";

const Kit = ({ kit }) => {
  const { name, price, photo } = kit;
  return (
    <div>
      <div className="p-3 m-2 flex flex-col justify-between">
        <img src={photo} alt="" className="h-72 w-80" />
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <div className="text-center">
        <Link to="/courses-kits/buy">
          <button className="bg-amber-400 p-2 rounded-md">Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Kit;
