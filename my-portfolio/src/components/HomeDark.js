import React from 'react';
import HeroImage from "../assets/heroImage.png";
import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";
import { Link } from "react-scroll";

const HomeDark = () => {
  return (
    <div 
        name="home"
        
        // className={`h-screen w-full bg-gradient-to-b ${darkMode ? 'from-black via-black to-gray-800' : 'from-white via-gray-100 to-gray-300'}`}
        className="h-screen w-full bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-black dark:via-gray-900 dark:to-gray-700"
    >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                 <h2 className="text-4xl sm:text-5xl font-bold dark:text-white text-gray-900" >
                    I'm a Data Analyst & Full Stack Developer
                 </h2>
                 <p className="py-4 max-w-md dark:text-gray-200 text-gray-800">
                    I am an enthusiastic data analyst and software developer, tech-savvy, passionate about technology and
                    discoveries, complex problem solver, mentoring, good team player and empowering others. I performed
                    in different leadership capacities. I am a lifelong learner, looking forward to working with other great
                    minds and moving the world forward through technology.
                 </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" >
                        Portfolio
                        <span className="group-hover:rotate-90 duration-500">
                            <TbSquareRoundedArrowRightFilled size={30} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                {<img src={HeroImage} alt="My Profile" 
                    className="rounded-full mx-auto w-56 md:w-66 lg:w-96 border-4 border-white dark:border-gray-900" />}
            </div>
        </div>
    </div>
  )
}

export default HomeDark;
