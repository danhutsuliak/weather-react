import React from 'react';

import './daily-weather-card.styles.scss';

const DailyWeatherCard = () => (
  <div className="card">
    <p className="date">Today</p>
    <img
      src="http://openweathermap.org/img/w/03d.png"
      alt="cloudy"
      className="daily-img"
    />
    <p className="degree">21°</p>
    <p className="text">Partly Cloudy</p>
  </div>
);

export default DailyWeatherCard;
