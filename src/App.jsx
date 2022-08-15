// import { useScroll } from "framer-motion";
import { useState } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [view, setView] = useState(1);
  const [scrolleable, setScrolleable] = useState(false);

  return (
    <div className="App" style={{ height: scrolleable ? "auto" : "100vh" }}>
      <NavBar />
      <Home scrolleable={scrolleable} setScrolleable={setScrolleable} />
      <AboutMe />
    </div>
  );
}

export default App;
