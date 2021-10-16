import React from 'react';
import DailyWeatherCard from '../daily-weather-card/daily-weather-card.component';

import './daily-weather.styles.scss';

class DailyWeather extends React.Component {
  render() {
    return (
      <div className="daily">
        <h2>Daily</h2>
        <div className="card-wrapper">
          <div className="cards">
            <DailyWeatherCard />
            <DailyWeatherCard />
            <DailyWeatherCard />
            <DailyWeatherCard />
            <DailyWeatherCard />
            <DailyWeatherCard />
            <DailyWeatherCard />
            <DailyWeatherCard />
          </div>
        </div>
      </div>
    );
  }
}

export default DailyWeather;
