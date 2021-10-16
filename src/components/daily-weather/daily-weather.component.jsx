import React from 'react';
import DailyWeatherCard from '../daily-weather-card/daily-weather-card.component';

import './daily-weather.styles.scss';

const DailyWeather = ({ daily }) => {
  if (!daily) {
    return <div></div>;
  }

  let cards = [];

  for (let i = 0; i < 8; i++) {
    const date = new Date(daily[i].dt * 1000).toDateString();

    cards.push(
      <DailyWeatherCard
        key={i}
        date={date.slice(0, 3) + date.slice(7, 10)}
        imgSrc={`http://openweathermap.org/img/w/${daily[i].weather[0].icon}.png`}
        degree={Math.round(daily[i].temp.max) + '°'}
        text={
          daily[i].weather[0].description[0].toUpperCase() +
          daily[i].weather[0].description.slice(1)
        }
      />
    );
  }

  return (
    <div className="daily">
      <h2>Daily</h2>
      <div className="card-wrapper">
        <div className="cards">{cards}</div>
      </div>
    </div>
  );
};

export default DailyWeather;
