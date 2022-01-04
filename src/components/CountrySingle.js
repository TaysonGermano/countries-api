import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Loader from "./Loader";
import CountryDetails from "./CountryDetails";

export default function CountrySingle(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <div className="Country-single">
      <Loader isLoading={loading} />
      <header style={loading ? { display: "none" } : { display: "block" }}>
        <Navbar />
      </header>
      {!loading && <CountryDetails />}
    </div>
  );
}
