import React from "react";
import "./Home.css";
import cover from "../../../src/images/cover1.jpg";
import Navbar from "../Header/Navbar";
import { Link } from "react-router-dom";
import About from "../About/About";
import { Typewriter } from "react-simple-typewriter";
import Events from "../Events/Events";

const Home = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center items-center mx-10 mt-2 mb-0">
        <div className="div">
          <div className="lg:p-10">
            <h2 className="text-4xl font-bold font-Kanit text-amber-400">
              Welcome to
              <span>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    " ",
                    "_ CSE",
                    "_ Society of",
                    "_CSE Society of BAUST",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p className="mt-4">
              <hr />
              <span className="text-xl font-bold">
                CSE Society of BAUST or CSB in Short is ,{" "}
              </span>{" "}
              <br />
              <span className="font-Kanit font-semibold">
                a vivrant and inclusive community of tech enthusiasts of our
                University BAUST{" "}
              </span>
            </p>
            <Link
              to="/about"
              className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="div2 ">
          <img src={cover} alt="" className="lg:h-[700px] lg:w-[550px]" />
        </div>
      </div>
      <div>
        {/* About section */}
        <section className="Container mt-2">
          <About></About>
        </section>
      </div>
      <div>
        {/* Events */}
        <section className="mb-1">
          <Events></Events>
        </section>
      </div>
    </div>
  );
};

export default Home;
