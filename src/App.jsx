import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [view, setView] = useState("Inicio");

  return (
    <div className="App">
      <NavBar viewSys={{ view, setView }} />
    </div>
  );
}

export default App;
