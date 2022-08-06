import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [view, setView] = useState("Inicio");

  return (
    <div className="App">
      <NavBar viewSys={{ view, setView }} />
      {view === "Inicio" ? <Home /> : null}
    </div>
  );
}

export default App;
