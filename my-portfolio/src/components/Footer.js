// Footer.js
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const Footer = () => {
  useEffect(() => {
    ReactGA.initialize('YOUR_TRACKING_ID'); // Replace with your actual ID
    ReactGA.pageview(window.location.pathname + window.location.search);
  },);

  return (
    <footer className="w-full dark:bg-black text-center py-4 text-gray-600 dark:text-gray-400">
      &copy; {new Date().getFullYear()} Designed by Me
    </footer>
  );
};

export default Footer;