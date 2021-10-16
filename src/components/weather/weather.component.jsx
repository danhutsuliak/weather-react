import React from 'react';

import './weather.styles.scss';

class Weather extends React.Component {
  render() {
    return (
      <div className="weather">
        <h2 id="place">Chernivtsi</h2>
        <div className="weather-value-container">
          <img
            className="main-img"
            src="http://openweathermap.org/img/w/01d.png"
            alt="sunny"
          />
          <p className="degree">12°</p>
          <div className="cel-fahr-container">
            <p className="celsius">C</p>
            <p className="fahrenheit">F</p>
          </div>
        </div>
        <h2 className="weather-desc">Sunny</h2>
      </div>
    );
  }
}

export default Weather;
