import React from "react";
import MentorsCards from "./MentorsCards";
import { useLoaderData } from "react-router-dom";

const Mentors = () => {
  const mentors = useLoaderData();
  return (
    <div>
      <h1 className="text-6xl text-center text-purple-600">
        Members 
      </h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
            mentors.map(mentor=><MentorsCards
            key={mentor._id}
            mentor={mentor}
            
            >

            </MentorsCards>)
        }
      </div>
    </div>
  );
};

export default Mentors;
