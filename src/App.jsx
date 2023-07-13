import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useLoaderData } from "react-router-dom";
import CofeeCard from "./Components/CofeeCard";
import useCofee from "./Components/Hooks/useCofee";

function App() {
  // const cofees = useLoaderData();
  const [cofees] = useCofee();

  return (
    <div className="m-20">
      <h1 className="text-6xl text-center text-purple-600">Members </h1>
      
        <div className="grid lg:grid-cols-3 gap-60 my-16 justify-center ">
          {cofees.map((cofee) => (
            <CofeeCard key={cofee._id} cofee={cofee}></CofeeCard>
          ))}
        </div>
      </div>
   
  );
}

export default App;
