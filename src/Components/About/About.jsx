import React from "react";
import logo from "../../images/logoOld.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="container p-6">
      <h1 className="text-center mb-10 text-xl lg:text-5xl font-bold font-Kanit">
        About CSB
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 ">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="5000"
        >
          <img
            className="h-[300px] bg-black p-3 rounded-lg"
            src={logo}
            alt=""
          />
        </div>
        <div className="font-sm lg:text-2xl font-Kanit">
          We are the CSE Society of BAUST <br />
          a vibrant and inclusive community of tech <br />
          enthusiasts, innovators, and problem solvers. <br />
          Our society is dedicated to fostering a passion for <br />
          computer science and engineering among students and creating <br />a
          supportive network for their academic and professional growth
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <Link>
          <button className="btn btn-outline btn-primary">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
