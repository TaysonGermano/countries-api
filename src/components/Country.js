import { Link, Outlet } from "react-router-dom";
import "./Country.css";

const Country = (props) => {
  return (
    <div className="Country">
      <Link to={`/country/${props.name}`} style={{ color: "inherit" }}>
        <img src={props.img} alt="Country" className="Country-flag" />
        <div className="Country-details">
          <h2 className="Country-name">{props.name}</h2>
          <div className="Country-population">
            <b>Population</b>: {props.population}
          </div>
          <div className="Country-region">
            <b>Region:</b> {props.region}
          </div>
          <div className="Country-capital">
            <b>Capital:</b> {props.capital}
          </div>
        </div>
      </Link>
      {/* <Outlet /> */}
    </div>
  );
};

export default Country;
