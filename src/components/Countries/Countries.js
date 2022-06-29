import React, { useEffect, useState } from 'react';
import CountriesDetail from '../CountriesDetail/CountriesDetail';

const Countries = () => {
    const[countries,setCountries]=useState([]);
    useEffect( ()=>{
        const url=`https://restcountries.com/v3.1/all`
        console.log(url);
   
        fetch(url)
         .then(response=>response.json())
         .then(data=>setCountries(data));
    },[])
    return (
        <div>
            <h2>Welcome:{countries.length}</h2>
            {
                countries.map(country=><CountriesDetail
                    key={country.id}
                    country={country}
                
                ></CountriesDetail>)
            }
        </div>
    );
};

export default Countries;