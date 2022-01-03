import { useState, useEffect } from "react";
import "./Loader.css";

export default function Loader(props) {
  return (
    <div className="loader" style={props.isLoading ? {} : { display: "none" }}>
      <div className="spinner"></div>
      <div className="loading-text">Please wait...</div>
    </div>
  );
}
