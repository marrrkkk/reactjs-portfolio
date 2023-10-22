import Nav from "./components/Home/Nav";
import Home from "./components/Home/Home";
import Techstack from "./components/About/Techstack";
import Blur from "./components/Blur";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import ScrollAnimationComponent from "./components/Animation";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return (
    <>
      <AnimatedCursor color="255, 255, 255" innerSize={20} />
      <Nav />
      <Home />
      <About />
      <Techstack />
      <ScrollAnimationComponent />
      <Blur />
      <Footer />
    </>
  );
};

export default App;
