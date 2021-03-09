import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const{countryName} = useParams();
     const [country,setCountry] = useState({});

     useEffect(() => {
     const url =`https://restcountries.eu/rest/v2/alpha/${countryName}`;
     fetch(url)
     .then( res =>res.json())
     .then(data =>setCountry(data));
     },[])

    return (
        <div>
            <p>This is country details information:{countryName}</p>
            <h3>{country.name}</h3>
            <p>population:{country.population}</p>
            <p>Region:{country.region}</p>
        </div>
    );
};

export default CountryDetail;