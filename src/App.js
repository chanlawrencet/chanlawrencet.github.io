import Home from "./Home"
import React from "react"
import { MonochromePlayground } from "./monochromePlayground/MonochromePlayground"
import { Weather } from "./weather/Weather"
import { WeatherSearch } from "./weather/WeatherSearch"


function App(){
  const url = window.location.href;
  // would rather use react-router-dom _but_ GitHub Pages does not play well with routes
  if (url.includes("weather")) {
    const latLon = url.substring(url.indexOf('weather')).replace('weather/', '')
    console.log({latLon})
    if(latLon.length > 0 && latLon !== 'weather') {
      const latLonArray = latLon.split('/')
      return <Weather lat={latLonArray[0]} lon={latLonArray[1]}/>
    }
    return <WeatherSearch url={url}/>
  } else if (url.includes('monochrome')) {
    return <MonochromePlayground/>
  } else {
    return <Home/>
  }
}

export default App;
