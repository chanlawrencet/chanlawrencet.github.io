import Home from "./Home"
import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Holidays2020 from "./holidays2020"
import Holidays2020Fake from "./holidaysfake"

function App(){
  return(<div>
    <Router>
      <Switch>
        <Route path="/h2020">
          <Holidays2020Fake/>
        </Route>
        <Route path="/h2020r">
          <Holidays2020/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  </div>);
}

export default App;