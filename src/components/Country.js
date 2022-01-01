import "./Country.css";

const Country = (props) => {
  return (
    <div className="Country">
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
    </div>
  );
};

export default Country;
