import {} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Projects from "./component/Projects";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
