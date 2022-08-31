import { useState } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Porfolio from "./Components/Portfolio/Porfolio";

function App() {
  const [view, setView] = useState(0);
  const [exiting, setExiting] = useState(false);

  return (
    <div className="App">
      <NavBar setView={setView} setExiting={setExiting} />
      {view === 0 ? (
        <Home
          setExiting={setExiting}
          status={exiting}
          viewSys={{ view, setView }}
        />
      ) : view === 1 ? (
        <AboutMe
          status={exiting}
          setExiting={setExiting}
          viewSys={{ view, setView }}
        />
      ) : view === 2 ? (
        <Porfolio />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
