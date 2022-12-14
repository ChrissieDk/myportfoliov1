import Landing from "./scenes/Landing";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import MySkills from "./scenes/MySkills";
import { useEffect, useState } from "react";
import LineGradient from "./components/LineGradient"
import { useMediaQuery } from 'react-responsive';

function App() {
  // set state of selectedpage default to home and check screensize

  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  // const isAboveMediumScreens = useMediaQuery("min-width: 1060px");
  const isAboveMediumScreens = useMediaQuery({ query: `(min-width: 760px)` });

  useEffect(() => {

    // checking window which gives position of y and what to di at values of 0 or not 0
    
    const handleScroll = () => {
        if (window.scrollY === 0) setIsTopOfPage(true);
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
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
    </div>
  );
}

export default App;
