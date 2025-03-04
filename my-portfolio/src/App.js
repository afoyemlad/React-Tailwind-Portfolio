import { useEffect, useState } from "react";
// import Home from "./components/Home.js";
import HomeDark from "./components/HomeDark.js";
import NavBarDarkMode from "./components/NavBarDarkMode.js";
import SocialLinks from "./components/SocialLinks.js";
import About from "./components/About.js";
import Portfolio from "./components/Portfolio.js";
import Experience from "./components/Experience.js";
import Contact from "./components/Contact.js";
import Passion from "./components/Passion.js";
import Footer from "./components/Footer.js";


function App() {

  //Global dark mode state

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  //useEffect hook to change the dark mode and update the html property of tailwind css
  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
    }else{
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    
    <>
      {/* <NavBar /> */}
      <NavBarDarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* <Home /> */}
      <HomeDark />
      <About />
      <Portfolio />
      <Experience />
      <Passion />
      <Contact />
      <Footer />
      <SocialLinks />

    </>
  );
}

export default App;
