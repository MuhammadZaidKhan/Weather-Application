import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';

const Home = () => {
    const [cityName, setCityName] = useState('');
    const [currentWeather, setCurrentWeather] = useState(null);
    const [error, setError] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a6aebaacee3e66d758c30749f19b9c86&units=metric`);
            setCurrentWeather(response.data);
        } catch (error) {
            setError('City not found or an error occurred.');
        }
    };

    return (
        <div className='bg-black min-h-screen flex flex-col justify-center items-center'>
            <div className='justify-items-center mb-48 fixed'>
                <h1 className='font-semibold text-5xl font-Inter text-white'>Weather App</h1>
                <form onSubmit={submitHandler} className='flex flex-col items-center'>
                    <input
                        className='bg-white mt-8 h-12 md:w-9/12 md:h-8 placeholder-black text-xl font-bold text-center'
                        placeholder='Your City'
                        type="text"
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)}
                    />



                    <button type='submit' className='bg-custom-blue hover:bg-blue text-white mt-3 h-12 w-32 md:h-10 md:w-32'>Search</button>
                </form>
            </div>

            <div className='mt-10 text-black'>
                {error && <p>{error}</p>}
                {currentWeather && (
                    <WeatherCard
                        cityName={cityName}
                        temp={currentWeather.main.temp}
                    />
                )}
            </div>

            <img src="/Ellipse 2.png" alt="Ellipse 2" className="absolute top-0 left-0" />
            <img src="/Ellipse 2 (1).png" alt="Ellipse 2" className="absolute top-0 right-0" />
        </div>
    );
};

export default Home;
