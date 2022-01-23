import { Link, useParams, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./CountryDetails.css";
import Fail from "./404";

export default function CountryDetails(props) {
  //
  const navigation = useNavigate();
  // data ghost
  const [data, setData] = useState([
    {
      name: {
        common: "",
        official: "",
        nativeName: {
          aym: {
            official: "",
            common: "",
          },
          que: {
            official: "",
            common: "",
          },
          spa: {
            official: "",
            common: "",
          },
        },
      },
      tld: [""],
      cca2: "",
      ccn3: "",
      cca3: "",
      cioc: "",
      independent: true,
      status: "",
      unMember: true,
      currencies: {
        PEN: {
          name: "",
          symbol: "",
        },
      },
      capital: [""],
      altSpellings: [""],
      region: "",
      subregion: "",
      languages: {
        aym: "",
        que: "",
        spa: "",
      },
      population: "",
      fifa: "",
      borders: [""],
      timezones: [""],
      continents: [""],
      flags: {
        png: "",
        svg: "",
      },
    },
  ]);

  const params = useParams();
  const [prmName] = useState(params.name); //parameter
  const [failed, setFailed] = useState(false);

  const apiRequest = (type, query) => {
    const url = `https://restcountries.com/v3.1/${type}/${query}`;
    axios
      .get(url)
      .then((resp) => {
        setData(resp.data);
      })
      .catch((err) => setFailed(true));
  };

  const getLanguages = () => {
    const arLg = [];
    for (const property in data[0].languages) {
      arLg.push(data[0].languages[property]);
    }

    return arLg.join(", ");
  };

  const getCurrency = () => {
    const arLg = [];
    const { currencies } = data[0];
    for (const property in currencies) {
      const cr = currencies[property];
      const { name } = cr;
      arLg.push(name);
    }
    return arLg.join(", ");
  };

  useEffect(() => {
    apiRequest("name", prmName);
  }, []);

  return (
    <div>
      {failed ? (
        <Fail />
      ) : (
        <div className="Country-info container">
          <div className="Button-wrapper">
            <button className="Button" onClick={() => navigation(-1)}>
              <i className="fas fa-arrow-left"></i> Back
            </button>
          </div>
          <div className="Full-details">
            <div className="Flag">
              <img src={data[0].flags.png} alt={data[0].name.common} />
            </div>
            <div className="Details">
              <h1>{data[0].name.official}</h1>
              <div className="Flex">
                <div className="colum">
                  <div>
                    <b>Native Name:</b> {data[0].name.common}
                  </div>
                  <div>
                    <b>Population:</b> {data[0].population.toLocaleString()}
                  </div>
                  <div>
                    <b>Region:</b> {data[0].region}
                  </div>
                  <div>
                    <b>Sub Region:</b> {data[0].subregion}
                  </div>
                  <div>
                    <b>Capital:</b> {data[0].capital}
                  </div>
                </div>
                <div className="colum">
                  <div>
                    <b>Top Level Domain:</b> {data[0].tld}
                  </div>
                  <div>
                    <b>Currencies:</b> {getCurrency()}
                  </div>
                  <div>
                    <b>Languages:</b> {getLanguages()}
                  </div>
                </div>
              </div>
              <div className="Border">
                <b>Border Countries: </b>{" "}
                <div>
                  {data[0].borders?.map((b) => (
                    <Link
                      className="Link"
                      to={`/country/code/${b}`}
                      onClick={() => apiRequest("alpha", b)}
                    >
                      {b}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
