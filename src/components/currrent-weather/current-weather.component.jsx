import React from 'react';

import './current-weather.styles.scss';

const CurrentWeather = ({ current }) => {
  if (!current) {
    return <div></div>;
  }

  const degree = Math.round(current.temp) + '°';
  const imageSrc = `http://openweathermap.org/img/w/${current.weather[0].icon}.png`;
  const weatherDesc =
    current.weather[0].description[0].toUpperCase() +
    current.weather[0].description.slice(1);

  return (
    <div className="weather">
      <h2 id="place">Chernivtsi</h2>
      <div className="weather-value-container">
        <img className="main-img" src={imageSrc} alt="sunny" />
        <p className="degree">{degree}</p>
        <div className="cel-fahr-container">
          <p className="celsius">C</p>
          <p className="fahrenheit">F</p>
        </div>
      </div>
      <h2 className="weather-desc">{weatherDesc}</h2>
    </div>
  );
};

export default CurrentWeather;
