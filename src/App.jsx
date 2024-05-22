import About from "./components/About";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Navbar2 } from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Hero />
      <Navbar2 />
    </>
  );
};
export default App;
