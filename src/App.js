import Home from "./Home"
import React from "react"
import { MonochromePlayground } from "./monochromePlayground/MonochromePlayground"
import { Weather } from "./weather/Weather"


function App(){
  const url = window.location.href;
  // would rather use react-router-dom _but_ GitHub Pages does not play well with routes
  if (url.includes("weather")) {
    return <Weather/>
  } else if (url.includes('monochrome')) {
    return <MonochromePlayground/>
  } else {
    return <Home/>
  }
}

export default App;
