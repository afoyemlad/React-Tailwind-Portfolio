import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';
import logo from '../assets/JA.gif';
import { Link }  from "react-scroll";

const NavBarDarkMode = ({ darkMode, setDarkMode }) => {

  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "passion" },
    { id: 6, link: "contact" },
  ]

  // const [darkMode, setDarkMode] = useState(() => {
  //   return localStorage.getItem('theme') === 'dark';
  // });

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add('dark');
  //     localStorage.setItem('theme', 'dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.setItem('theme', 'light');
  //   }
  // }, [darkMode]);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100 fixed">
      <div className='flex flex-auto'>
        <img src={logo} alt="logo" className='rounded-md w-12 h-12 border-2 border-cyan-950 dark:border-cyan-50'  />
        {/* <h1 className="text-3xl font-signature ml-2 md:text-5xl">James Afowowe A.</h1> */}
      </div>
      

      <div className='flex  items-center gap-4'>
        {/* Menu for larger screen */}
        <ul className="hidden md:flex">
          {/* loop the menu into the list using map functions */}
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-900 dark:text-gray-100 hover:scale-125 duration-200"
            >
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>


        <div className="flex items-center gap-4 pr-4 z-10 text-gray-500">
          {/* Dark/Light Mode Toggle */}
          
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Menu Toggle (FaBars / FaTimes) */}
          <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-900 dark:text-gray-100 md:hidden">
            { nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-gray-200 dark:from-black dark:to-gray-800 text-gray-800 dark:text-gray-200'>
              {/* loop the menu into the list using map functions */}
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl">
                  <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}git>{link}</Link>
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>
    </div>



  );
};

export default NavBarDarkMode;
