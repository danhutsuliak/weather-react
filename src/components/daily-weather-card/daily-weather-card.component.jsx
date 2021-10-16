import React from 'react';

import './daily-weather-card.styles.scss';

const DailyWeatherCard = ({ date, imgSrc, degree, text }) => (
  <div className="card">
    <p className="date">{date}</p>
    <img src={imgSrc} alt="cloudy" className="daily-img" />
    <p className="degree">{degree}</p>
    <p className="text">{text}</p>
  </div>
);

export default DailyWeatherCard;
