import React from "react";
import "./MemberCard.css";
const MemberCard = ({ item }) => {
  const { _id, name, designation, category, details, photo } = item;
  return (
    //   <div>
    //   <div className="card w-96 bg-base-100 shadow-xl">
    //     <figure className="px-10 pt-10">
    //       <img
    //         // style={{ height: "10rem" ,width:"10rem",clipPath:circle() }}

    //         src={photo}
    //         alt="Shoes"
    //         className=" img "
    //       />
    //     </figure>
    //     <div className="card-body items-center text-center">
    //       <h2 className="card-title">{name}</h2>
    //       <p>{designation}</p>
    //       <p>{details}</p>
    //       <div className="card-actions">
    //         <button className="btn btn-primary">Details</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="w-96 shadow-2xl shadow-lime-300 rounded-3xl x bg-opacity-30 backdrop-blur-xl">
      <div className="full ">
        <div className="our-team bg-white sm:p-10">
          <div className="picture">
            <img src={photo} alt="" />
          </div>
          <div className="team-content ">
            <h3 className="name font-Kanit text-3xl font-bold sm:text-xl">
              {name}
            </h3>
            <h4 className="font-Kanit lg:text-2xl font-semibold ">
              {designation}
            </h4>
            <h4 className="font-Kanit lg:text-xl font-bold text-green-600">
              {details}
            </h4>
          </div>
          <div className="bg-blue-800">
            <p className="text-blue-800 mt-8 rounded-xl w-auto">
              zvxczvxczvczvxczvxczvxzvdgfhj
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
