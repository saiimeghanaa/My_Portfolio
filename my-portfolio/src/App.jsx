
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/common/Navbar.jsx";
import IntroHome from "./components/common/IntroHome.jsx";
import AboutMe from "./components/common/AboutMe.jsx";



function App() {
  return (
    <>
          <Navbar />
          <IntroHome />
          <AboutMe/>
        
    </>
  );
}
export default App;
