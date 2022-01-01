// Rest Coutnry API

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

// Steps

1- Create a Country component which will display individuals country
2- Create Countries to display every country on App component



import React, { Component } from "react";
import axios from "axios";
import Country from "./Country";
import "./Countries.css";

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: [
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
      ],
      search: "",
      filter: "",
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.filterHandler = this.filterHandler.bind(this);
  }

  apiRequest(type, query) {
    const searchName = `https://restcountries.com/v3.1/${type}${query}`;
    axios.get(searchName).then((resp) => {
      this.setState({ country: resp.data });
    });
  }

  //Search event handler
  searchHandler(ev) {
    this.setState({ search: ev.target.value });
    this.apiRequest("name/", this.state.search);
  }

  //Component lifecycle
  componentDidMount() {
    this.apiRequest("all", "");
  }

  //Filter event handler
  filterHandler(ev) {
    this.setState({ filter: ev.target.value });
    this.apiRequest("region/", this.state.filter);
  }

  render() {
    const country = this.state.country;
    return (
      <div className="Countries container">
        <form>
          <div className="Coutries-input">
            <i className="fas fa-search"></i>
            <input type="text" name="country" onChange={this.searchHandler} />
          </div>
          <div className="Countries-filter">
            <select name="filter" id="filter" onChange={this.filterHandler}>
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
    );
  }
}

export default Countries;
