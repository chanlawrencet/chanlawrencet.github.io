import Home from "./Home"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MonochromePlayground } from "./monochromePlayground/MonochromePlayground"


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/monochrome" element={<MonochromePlayground/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
