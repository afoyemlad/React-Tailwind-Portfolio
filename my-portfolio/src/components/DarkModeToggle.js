import React from 'react'
import {FaSun, FaMoon} from 'react-icons/fa';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
     <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-black flex items-center gap-2"
      >
        {darkMode ? (
          <>
            <FaSun size={30} />
            <span>Dark Mode</span>
          </>
        ) : (
          <>
            <FaMoon size={30} />
            <span>Light Mode</span>
          </>
        )}
    </button>
  )
}

export default DarkModeToggle