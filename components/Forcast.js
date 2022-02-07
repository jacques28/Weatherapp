import React from 'react'

const Forcast =(props)=> {
    return (
        <div>
            {props.country && props.city && <p>Location:
            {props.city}, {props.country}</p>}
            {props.temperature && <p>Temperature: 
            {props.temperature-273.15}</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.pressure && <p>Pressure: {props.pressure}</p>}
            {props.icon && <img src= {`https://api.openweathermap.org/img/w/${props.icon}.png`} alt= "weather icon" />}
            {props.description && <p>Conditions:{props.description}</p>}
            {props.error && <p>Error: {props.error}</p>}
        </div>
    )
}

export default Forcast
