import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Loader from "./Loader";

export default function CountryDetails() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  //   function fetchCountry(name) {}

  return (
    <div className="CountryDetails">
      <Loader isLoading={loading} />
      <header style={loading ? { display: "none" } : { display: "block" }}>
        <Navbar />
      </header>
      <div className="CountryDetails-Country"></div>
    </div>
  );
}
