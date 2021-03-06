import React, { useEffect, useState } from "react";
import Countries from "../Countries/Countries";

const Home = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/all`;
        fetch(url)
      .then((res) => res.json())
      .then(data => {
        console.log(data);  
        setCountry(data)})
  }, []);
  return (
    <div>
      <h3>Countries : {country.length}</h3>
      {
          country.map(country => <Countries country={country}></Countries>)
      }
    </div>
  );
};

export default Home;
