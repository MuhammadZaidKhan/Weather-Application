import React, { useState } from 'react';
import axios from 'axios';
import Weathercard from './WeatherCard'

const Home = () => {
    let [cityName, setCityName] = useState('');
    let [data, setData] = useState([]);

    let submitHandler = async (e) => {
        e.preventDefault();
        console.log('Executing SubmitHandler');

        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=a6aebaacee3e66d758c30749f19b9c86&units=metric`);
            // console.log('response', response);
            setData(response.data.list);
        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <div>
            <h1>Welcome to my Weather App</h1>
            <form onSubmit={submitHandler}>
                CityName: <input className='bg-blue-400' type="text" onChange={(e) => setCityName(e.target.value)} />
                <button type='submit' className='bg-black text-white'>Get Weather</button>
            </form>
            {
                data.map((eachforecast, index) => (
                    <Weathercard
                        key={index}
                        date={eachforecast.dt_txt}
                        temp={eachforecast.main.temp}
                        min={eachforecast.main.temp_min}
                        max={eachforecast.main.temp_max} />
                ))
            }
        </div>
    );
};

export default Home;
