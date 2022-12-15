import Landing from "./scenes/Landing";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import MySkills from "./scenes/MySkills";
import { useEffect, useState } from "react";
import LineGradient from "./components/LineGradient"
import { useMediaQuery } from 'react-responsive';
import Projects from "./scenes/Projects";
import { motion } from "framer-motion";

function App() {
  // set state of selected page default to home and check screensize

  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  // const isAboveMediumScreens = useMediaQuery("min-width: 1060px");
  const isAboveMediumScreens = useMediaQuery({ query: `(min-width: 760px)` });

  useEffect(() => {

    // checking window which gives position of y and what to di at values of 0 or not 0
    
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
        if (window.scrollY !== 0) setIsTopOfPage(false);
      }
      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
      <DotGroup 
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
      />
      )}
      <Landing 
          setSelectedPage={setSelectedPage}
          
      />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <MySkills />
        </motion.div>
        </div>
      <LineGradient />
      <div className="w-5/6 mx-auto h-full">
      <Projects />
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
        </motion.div>
      </div>
    </div>
  );
}

export default App;
