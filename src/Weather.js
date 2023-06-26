import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState(null);
  //const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function showWeather(response) {
    //setLoaded(true);
    console.log(response);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      Description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3fdc8cfbf2d6fa0116c9ae92d3df4f79&units=metric`;
    axios.get(url).then(showWeather);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={changeCity} />
      <input type="submit" value="search" />
    </form>
  );

  if (weather) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
