import React, { Component } from 'react'
import './App.css';
import Heading from './components/Heading';
import Form from './components/Form';
import Forcast from './components/Forcast';
//openweather api key
const api_key = "a65f66a9a65c56628bed8dcca26654e2";

 class App extends Component {

  state={
   temperature:"",
    city:"",
    country:"",
    humidity:"",
    pressure:"",
    icon:"",
    description:"",
    error:"",
  }
  //function to get weather info from the api
  getWeather = async (e) =>{
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${api_key}`);

    const response = await api_call.json();
    if(city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.sys.main,
        country: response.sys.country,
        humidity: response.main.humidity,
        pressure: response.main.pressure,
        icon: response.weather[0].icon,
        description: response.weather[0].description,
        error: ""
      })
    }else{
      this.setState({
        error: "Please fill out input fields..."
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Forcast</h1>
      <Heading />
      <Form loadWeather={this.getWeather} />
      <Forcast 
       temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        pressure={this.state.pressure}
        icon={this.state.icon}
        description={this.state.description}
        error={this.state.error} />
      </div>
    )
  }
}

export default App
