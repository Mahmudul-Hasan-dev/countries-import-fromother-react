import React from 'react';
import './Country.css'
// const Country = (props) => {
//     console.log(props)
//     return (
//         <div className='country'>
//             <h2>Country Name:{props.country.name.common}</h2>
//             <h2>Country Population:{props.country.population}</h2>
//             <h4><small>Area: {props.country.area}</small></h4>
//             <h4>Region: {props.country.region}</h4>
//         </div>
//     );
// };

//by object destructuring
const Country = (props) => {
    // console.log(props)
    const { name, population, area, region, flags } = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Country Name:{name.common}</h2>
            <h2>Country Population:{population}</h2>
            <h4><small>Area: {area}</small></h4>
            <h4>Region: {region}</h4>
        </div>
    );
};

export default Country;
