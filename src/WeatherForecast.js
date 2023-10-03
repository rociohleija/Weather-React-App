import React from 'react';
import WeatherIcon from './WeatherIcon';
import axios from 'axios';

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data)
    }
    let apiKey = "82d232f689d92fca314b1eb07a4d627c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    
    axios.get(apiUrl).then(handleResponse);
    return (
        <div className ="WeatherForecast">
            <div className ="row">
                <div className ="col">
                    <div className ="WeatherForecast-day">
                        Thu
                    </div>
                    <WeatherIcon code ="01d" size={36}/>
                    <div className ="WeatherForecast-temperatures">
                        <span className ="WeatherForecast-temperature-max">
                            19°
                        </span>
                        <span className ="WeatherForecast-temperature-min">
                            10°
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
 
}