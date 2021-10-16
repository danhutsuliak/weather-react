import React from 'react';
import './App.css';
import DailyWeather from './components/daily-weather/daily-weather.component';
import Modal from './components/modal/modal.component';
import CurrentWeather from './components/currrent-weather/current-weather.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      weather: {},
      isModalShown: true,
      modalText: 'Please Wait...'
    }
  }

  API_Key = '19ffda1a93323f52e689caab91528bf8';
  units = 'metric';

  async getWeather(coords) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,hourly,alerts&appid=${this.API_Key}&units=${this.units}`);
    if (!response.ok) {
      throw new Error('Failed to fetch coordinates. Please try again!')
    }
    const data = await response.json();
    if (data.error_message) {
      throw new Error(data.error_message);
    }
    console.log(data);
    return data;
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      async (successResult) => {
        const coordinates = {
          lat: successResult.coords.latitude,
          lon: successResult.coords.longitude
        }
        this.setState({
          weather: await this.getWeather(coordinates)
        })
        this.setState({ isModalShown: false });
      },
      error => {
        this.setState({ modalText: 'Error! ' + error.message })
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Modal isShown={this.state.isModalShown} text={this.state.modalText} />
        <CurrentWeather current={this.state.weather.current} />
        <DailyWeather daily={this.state.weather.daily} />
      </div>
    );
  }
}

export default App;
