import React from 'react';
import { Link } from 'react-router-dom';
import './Countries.css'

const Countries = (props) => {
    // console.log(props)
    const {name, flag, population, capital, area} = props.country;
    return (
        <div className="country-style">
            <img src={flag} alt=""/>
            <h3>{name}</h3>
            <p>Capital : {capital}</p>
            <p> Population :{population}</p>
            <Link to={`/countries/${name}`}><button>Show Details</button></Link>
        </div>
    );
};

export default Countries;