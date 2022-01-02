import Theme from "./components/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CountryDetails from "./components/CountryDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Theme />}>
          <Route path="hey" element={<CountryDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <BrowserRouter>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Theme />}>
    //         <Route path="Nigeria" element={<CountryDetails />} />
    //       </Route>
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
}
