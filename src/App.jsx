import { useState } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Porfolio from "./Components/Portfolio/Porfolio";

function App() {
  const [view, setView] = useState(0);

  return (
    <div className="App">
      <NavBar setView={setView} />
      {view === 0 ? (
        <Home status={view} />
      ) : view === 1 ? (
        <AboutMe status={view} />
      ) : view === 2 ? (
        <Porfolio />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
