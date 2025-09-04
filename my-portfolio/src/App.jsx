
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/common/Navbar.jsx";
import IntroHome from "./components/common/IntroHome.jsx";
import AboutMe from "./components/common/AboutMe.jsx";
import Projects from "./sections/Projects.jsx"; 
import Contact from "./sections/Contact.jsx";
import Footer from "./components/common/Footer.jsx";
function App() { 
  return (
    <>
          <Navbar />
          <IntroHome />
          <AboutMe/>
          <Projects/>
          <Contact/>
          <Footer/>
    </>
  );
}
export default App;
