import { useState } from 'react';
import './Country.css';
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, cca3,
        area, continents, region } = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className= {`country ${visited && 'visited'}`} >
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population} </p>
            <p>Area: {area} </p>
            <p>Continents: {continents} </p>
            <p>Region: {region} </p>
            <p>Code: {cca3} </p>
            <p><button onClick={() => handleVisitedCountry(country)} >Mark as Visited</button></p>
            <p><button onClick={()=> handleVisitedFlags(country.flags.png)}>Add Flag</button></p>
            <button onClick={handleVisited}> {visited? 'visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit this country'}
        </div>
    );
};

export default Country;