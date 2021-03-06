import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../Countries/Countries.css'

const CountryDetaile = () => {
    const {name} = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => {
            console.log(data[0]);
            setCountry(data[0])
        })
    }, [])
    const {nativeName, capital, population} = country;
    return (
        <div className="country-style">
            <img src={country.flag} alt=""/>
            <h5>{country.name}</h5>
            <p>NativeName : {nativeName}</p>
            <p>Capital : {capital}</p>
            <p> Population :{population}</p>
            
        </div>
    );
};

export default CountryDetaile;