import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Countries from "./Countries";
import "./Theme.css";

export default function Theme() {
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);

  function darkMode(img) {
    !img ? setDark(true) : setDark(false);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <div className={dark ? "Theme dark" : "Theme"}>
      <div className="loader" style={loading ? {} : { display: "none" }}>
        <div className="spinner"></div>
        <div className="loading-text">Please wait...</div>
      </div>
      <header style={loading ? { display: "none" } : { display: "block" }}>
        <Navbar mode={darkMode} img={dark} />
      </header>
      <Countries loading={loading} />
    </div>
  );
}
