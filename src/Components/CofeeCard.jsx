import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CofeeCard = ({ cofee }) => {
  const { _id,name, designation, category, details, photo } =
    cofee;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={photo}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{designation}</p>
          <p>{category}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CofeeCard;
