import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useCofee from "../Components/Hooks/useCofee";
import MemberCard from "./MemberCard";
import './Members.css';
import bg1 from '../../public/images/1108012_7714.jpg';
import bg2 from '../../public/images/4725777_19276.jpg';
import bg3 from '../../public/images/16265799_rm373-502.jpg';
import bg4 from '../../public/images/31820104_7694368.jpg';
// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
const Members = () => {
    const [tabIndex,setTabIndex]=useState(0);
    const [cofees] = useCofee();
    const advisor = cofees.filter(item=>item.category == 'Advisor');
    const mentor = cofees.filter(item=>item.category == 'Mentor');
    const membrs = cofees.filter(item=>item.category == 'team');

// particles

// const particlesInit = useCallback(async (engine) => {
//     console.log(engine);
//     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//     // starting from v2 you can add only the features you need reducing the bundle size
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     await console.log(container);
//   }, []);

//bg-gradient-to-r from-violet-500 to-fuchsia-500

  return (
   
    <div className="flex justify-center mt-10 text-white bl bg-cover container ">
    {/* particles */}


    {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 12000,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "push",
              },
              resize: false,
            },
            modes: {
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 1000,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "00FFFF",
            },
            links: {
              color: "00FFFF",
              distance: 150,
              enable: true,
              opacity: 1.5,
              width: 2,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "top",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 90,
            },
            opacity: {
              value: 2.5,
            },
            shape: {
              type: "hexagon",
            },
            size: {
              value: { min: 3, max: 7 },
            },
          },
          detectRetina: true,
        }}
      /> */}



      <Tabs  defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className='text-black'>
          <Tab>Advisor</Tab>
          <Tab>Mentor</Tab>
          <Tab>Members</Tab>
        </TabList>
        <div>
        <TabPanel>
            <div className="grid lg:grid-cols-3 gap-10 my-16 justify-center text-black"
            
            >
            {
                advisor.map(item=> <MemberCard
                key={item._id}
                item={item}
                ></MemberCard>)
            }
            </div>
        </TabPanel>
        <TabPanel className=''>
        <div className="grid lg:grid-cols-3 gap-10 my-16 justify-center text-black">
            {
                mentor.map(item=> <MemberCard
                key={item._id}
                item={item}
                ></MemberCard>)
            }
            </div>
        </TabPanel>
        <TabPanel>
        <div className="grid lg:grid-cols-3 gap-10 my-16 justify-center text-black">
            {
                membrs.map(item=> <MemberCard
                key={item._id}
                item={item}
                ></MemberCard>)
            }
            </div>
        </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Members;
