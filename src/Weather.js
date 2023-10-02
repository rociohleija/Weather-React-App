import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo';
import axios from 'axios';
import './Weather.css';


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultcity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon:  response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name
    });
  }

  function search() { 
    const apiKey = "82d232f689d92fca314b1eb07a4d627c";
    let city = "Houston";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); 

  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCityChange(event) {
    event.preventDefault();
    search(city);
  }

    if (weatherData.ready) {
    return (
      <div className="Weather">
        <WeatherInfo data={weatherData} />

        <form 
        className="search-form" 
        id="search-form"
        onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Type a city.."
                autofocus="on"
                autocomplete="off"
                id="city-input"
                className="form-control shadow-sm"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-primary shadow-sm w-100"
              />
            </div>
            <div className="col-3">
              <button
                className="btn btn-success w-100"
                id="current-location-button"
              >
                Current
              </button>
            </div>
          </div>
        </form>
        <span className="line"></span>
        <div className="weather-forecast" id="forecast"></div>
      </div>
    );

   } else {
    search();
    return "Loading...";
   }
  }