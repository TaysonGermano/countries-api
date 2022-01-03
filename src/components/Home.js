import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Countries from "./Countries";
import Loader from "./Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <div className="home">
      <Loader isLoading={loading} />
      <header style={loading ? { display: "none" } : { display: "block" }}>
        <Navbar />
      </header>
      <Countries loading={loading} />
    </div>
  );
}
