import { useState } from "react";
import Countries from "./components/Countries";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [dark, setDark] = useState(false);

  function darkMode(img) {
    !img ? setDark(true) : setDark(false);
  }
  return (
    <div className={dark ? "App dark" : "App"}>
      <header>
        <Navbar mode={darkMode} img={dark} />
      </header>
      <Countries />
    </div>
  );
}

export default App;
