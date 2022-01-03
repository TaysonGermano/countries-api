import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CountryDetails from "./components/CountryDetails";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/romania" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}
