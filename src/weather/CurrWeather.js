import React, { useEffect } from "react"
import { cToF } from "./utils"

export const CurrWeather = ({lon, lat}) => {
  const [desc, setDes] = React.useState('');
  const [temp, setTemp] = React.useState();
  const [windChill, setWindChill] = React.useState();
  useEffect(() => {
    fetch(`https://api.weather.gov/points/${lat},${lon}`)
      .then(res => res.json())
      .then(res => res.properties.observationStations)
      .then(stationsUrl => {
        fetch(stationsUrl)
          .then(res => res.json())
          .then(res => res["features"][0]['id'] + '/observations?limit=1')
          .then(fetch)
          .then(res => res.json())
          .then(res => {
            const curr = res['features'][0]['properties'];
            setTemp(cToF(curr['temperature']['value']));
            setWindChill(cToF(curr['windChill']['value']))
            setDes(curr['textDescription'])
          })
      })
  }, [])

  return <h4>
    currently {desc.toLowerCase()}, {Math.round(temp * 10) / 10}°F
  </h4>
};