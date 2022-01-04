import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./App.css";
import CountrySingle from "./components/CountrySingle";
import Fail from "./components/404";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<CountrySingle />} />
        <Route path="/country/code/:code" element={<CountrySingle />} />
        <Route path="*" element={<Fail />} />
      </Routes>
    </div>
  );
}
