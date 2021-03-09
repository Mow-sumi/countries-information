import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'

const Country = (props) => {

const { name, flag,population,region,capital,alpha3Code} = props.data;
const countryStyle = {
    border:'1px solid green',
    margin:'20px',
    padding:'20px',
    borderRadius: '20px',
}

    return (
        <div style = {countryStyle} className = "container">
               <h1>Name:{name}</h1>
              <img src = {flag} alt = ""/>
               <h2>population:{population}</h2>
               <h3>Region:{region}</h3>
               <h4>Capital:{capital}</h4>
               <p> Id:{alpha3Code}  <Link to ={`/country/${alpha3Code}`}>Information{alpha3Code}</Link> </p>
        </div>
    );
};

export default Country;