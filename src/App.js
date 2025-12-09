import Home from "./Home"
import React from "react"
import { MonochromePlayground } from "./monochromePlayground/MonochromePlayground"
import { Weather } from "./weather/Weather"
import { WeatherSearch } from "./weather/WeatherSearch"


function App(){
  const [weatherLat, setWeatherLat] = React.useState('');
  const [weatherLon, setWeatherLon] = React.useState('');
  const [weatherSearch, setWeatherSearch] = React.useState(false);
  const url = window.location.href;
  // would rather use react-router-dom _but_ GitHub Pages does not play well with routes
  if (weatherSearch) {
    return <WeatherSearch setWeatherLat={setWeatherLat} setWeatherLon={setWeatherLon} setWeatherSearch={setWeatherSearch}/>
  } else if (url.includes("weather")) {
    const latLon = url.substring(url.indexOf('weather')).replace('weather/', '')
    if (weatherLat !== '') {
      return <Weather lat={weatherLat} lon={weatherLon} setWeatherSearch={setWeatherSearch}/>
    } else if (latLon.length > 0 && latLon !== 'weather') {
      const latLonArray = latLon.split('/')
      return <Weather lat={latLonArray[0]} lon={latLonArray[1]} setWeatherSearch={setWeatherSearch}/>
    }
    setWeatherSearch(true)
    return <div/>
  } else if (url.includes('monochrome')) {
    return <MonochromePlayground/>
  } else {
    return <Home/>
  }
}

export default App;
