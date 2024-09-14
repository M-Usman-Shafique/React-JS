import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

function Weather() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const apiKey = 'fdf1638cfb3550b6ccb0e5ba4ab920c9';

    const getWeather = async (city) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            setWeather(response.data);
            setError('');
        } catch (err) {
            setError('City not found');
            setWeather(null);
        }
    };

    const getWeatherByCoordinates = async (lat, lon) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
            setWeather(response.data);
            setError('');
        } catch (err) {
            setError('Location not found');
            setWeather(null);
        }
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    getWeatherByCoordinates(position.coords.latitude, position.coords.longitude);
                },
                (error) => {
                    setError('Geolocation is not supported or permission denied');
                }
            );
        }
    }, []);

    return (
        <div className="weather-container">
            <h1>Weather</h1>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
            />
            <button onClick={() => getWeather(city)}>Get Weather</button>
            {error && <p>{error}</p>}
            {weather && (
                <div className="weather-info">
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main.temp} °C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
}

export default Weather;
