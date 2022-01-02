import { useState, useEffect } from "react";
import axios from "axios";
import Country from "./Country";
import "./Countries.css";

export default function Countries(props) {
  const [country, setCountry] = useState([
    {
      name: {
        common: "",
      },
      capital: "",
      flags: {
        png: "",
      },
      region: "",
      population: "",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const apiRequest = (type, query) => {
    const searchName = `https://restcountries.com/v3.1/${type}${query}`;
    axios.get(searchName).then((resp) => {
      setCountry(resp.data);
    });
  };

  //Search event handler
  const searchHandler = (ev) => {
    setSearch(ev.target.value);
    apiRequest("name/", search);
  };

  //Filter event handler
  const filterHandler = (ev) => {
    setFilter(ev.target.value);
  };

  //Select input event handler
  const selectInputHandler = (ev) => {
    const input = ev.target.querySelector("input");
    input.focus();
    input.select();
  };

  //Component lifecycle
  useEffect(() => {
    filter ? apiRequest("region/", filter) : apiRequest("all", "");
  }, [filter]);

  return (
    <div>
      {!props.loading && (
        <div className="Countries container">
          <form className="Countries-form">
            <div className="Countries-input" onClick={selectInputHandler}>
              <i className="fas fa-search"></i>
              <input
                type="text"
                name="Search"
                placeholder="Search for a country..."
                onChange={searchHandler}
              />
            </div>
            <div className="Countries-filter">
              <select name="Filter" id="filter" onChange={filterHandler}>
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
              </select>
            </div>
          </form>
          <div className="Countries-wraper">
            {country.map((c) => (
              <Country
                img={c.flags.png}
                name={c.name.common}
                population={parseInt(c.population).toLocaleString()}
                capital={c.capital}
                region={c.region}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
