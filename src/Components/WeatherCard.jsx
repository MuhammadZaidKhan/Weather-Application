import React from 'react';
import moment from 'moment';

const WeatherCard = ({ cityName, temp }) => {
    return (
        <div className='card bg-blue mt-24 py-2 px-24 border text-white text-center rounded-lg py-5'>
            <div>{cityName}</div>
            <div>{moment().format("MMM Do YY")}</div>
            <h1>{temp} °C</h1>
        </div>
    )
}

export default WeatherCard;
