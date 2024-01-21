import {} from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import About from "./component/About.jsx";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Testimonials from "./component/Testimonials";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <h1>My Portfolio website</h1>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
