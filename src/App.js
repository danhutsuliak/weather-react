import React from 'react';
import './App.css';
import DailyWeather from './components/daily-weather/daily-weather.component';
import Modal from './components/modal/modal.component';
import Weather from './components/weather/weather.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      weather: {}
    }
  }

  API_Key = '19ffda1a93323f52e689caab91528bf8';
  units = 'metric';
  isModalShown = true;
  modalText = 'Please Wait...';

  async getWeather(coords) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,hourly,alerts&appid=${this.API_Key}&units=${this.units}`);
    if (!response.ok) {
      throw new Error('Failed to fetch coordinates. Please try again!')
    }
    const data = await response.json();
    if (data.error_message) {
      throw new Error(data.error_message);
    }
    return data;
  }

  render() {
    return (
      <div className="App">
        <Modal isShown={this.isModalShown} text={this.modalText} />
        <Weather />
        <DailyWeather />
      </div>
    );
  }

  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(
    //   async (successResult) => {
    //     const coordinates = {
    //       lat: successResult.coords.latitude,
    //       lon: successResult.coords.longitude
    //     }
    //     this.setState({
    //       weather: await this.getWeather(coordinates)
    //     })
    //     this.isModalShown = false;
    //   },
    //   error => {
    //     this.modalText = 'Error! ' + error.message;
    //   }
    // );
  }
}

export default App;
