import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'
import TypeAnimation from 'react-type-animation';

const Home = () => {
  return (
    <div
      id="inicio"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap:0 md:gap-10">
        <div className="flex flex-col justify-center h-3/6 ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Soy Desarollador 
            <TypeAnimation
            sequence={['Web FrontEnd', 1500, 'de Software',1500]}
            repeat={Infinity}
            
             />
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Enfocado en React, apasionado por la tecnologia y en continuo aprendizaje.
          </p>

          <div>
            <Link to="portafolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
