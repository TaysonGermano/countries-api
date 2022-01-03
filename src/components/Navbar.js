import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const [dark, setDark] = useState(false);
  const theme = document.getElementById("root");

  function darkModeHandler() {
    dark ? setDark(false) : setDark(true);
  }

  useEffect(() => {
    dark ? theme.classList.add("dark") : theme.classList.remove("dark");
  });
  return (
    <div className="Navbar container">
      <div className="Navbar-title">
        <h1>Where in the world?</h1>
      </div>
      <div className="Navbar-darkmode">
        <i
          className={dark ? "fas fa-sun" : "fas fa-moon"}
          onClick={darkModeHandler}
        ></i>{" "}
        Dark Mode
      </div>
    </div>
  );
};

export default Navbar;
