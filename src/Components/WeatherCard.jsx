import React from 'react'
import moment from 'moment'

const WeatherCard = ({ date, temp, min, max }) => {
    return (
        <div className='card'>
            <div>{moment(date).format("dddd ha")}</div>
            <h1>{temp}C</h1>
            <h1>{min}C - {max}C</h1>
        </div>
    )
}

export default WeatherCard