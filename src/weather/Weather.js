import React, { useEffect } from "react"
import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone";
import utc from 'dayjs/plugin/utc'
import { xml2js } from "xml-js"
import { Chart } from "./Chart"


const tz = "America/New_York"
dayjs.extend(utc)
dayjs.extend(timezone)

const titleFormatter = (day) => {
  let startPrefix = '';
  if (day === 0) {
    startPrefix = 'Today, ';
  } else if (day === 1) {
    startPrefix = 'Tomorrow, ';
  }
  return startPrefix + dayjs().add(day, 'day').format('dddd, MMM D');
}

const WEATHER_MAP = {
  'no chance': 0,
  'slight chance': 25,
  'chance': 50,
}


export const Weather = () => {
  const [temperatureHourly, setTemperatureHourly] = React.useState([]);
  const [temperatureDew, setTemperatureDew] = React.useState([]);
  const [temperatureWind, setTemperatureWind] = React.useState([]);
  const [humidity, setHumidity] = React.useState([]);
  const [precProb, setPrecProb] = React.useState([]);
  const [snow, setSnow] = React.useState([])
  const [rain, setRain] = React.useState([])
  console.log({humidity})

  const [day, setDay] = React.useState(0);

  const set = (data, startTimes, fn, key) => {
    const values = data[key].map(temp => parseInt(temp.elements[0].text))
    fn(values.map((t, i) => ({
        x: dayjs(startTimes[i]).tz(tz, true).unix(),
        y: t,
        name: dayjs(startTimes[i]).tz(tz, true).format('dd - ha'),
      })
    ))
  }

  const dataFilter = data => data.filter(datum =>
    dayjs.unix(datum.x).format('D') === dayjs().add(day, 'day').format('D')
  )

  const weatherSet = (data, startTimes) => {
    data['weather-'].forEach((temp, i) => {
      const currTime = dayjs(startTimes[i]).tz(tz, true);
      const empty = {
        x: currTime.unix(),
        y: WEATHER_MAP['no chance'],
        name: currTime.format('dd - ha'),
      }
      if (temp.elements !== undefined) {
        let wasSnow = false;
        let wasRain = false;
        temp.elements.forEach(({attributes: attr})  => {
          if (attr['weather-type'] === 'snow') {
            wasSnow = true;
            snow.push({
              x: currTime.unix(),
              y: WEATHER_MAP[attr['coverage']],
              name: currTime.format('dd - ha'),
            })
          } else if (attr['weather-type'] === 'rain') {
            wasRain = true;
            rain.push({
              x: currTime.unix(),
              y: WEATHER_MAP[attr['coverage']],
              name: currTime.format('dd - ha'),
            })
          }
        })
        if (!wasSnow) {
          snow.push(empty)
        }
        if (!wasRain) {
          rain.push(empty)
        }
      } else {
        snow.push(empty)
        rain.push(empty)
      }
    })
    setSnow(snow);
    setRain(rain);
  }

  console.log({snow})
  useEffect(() => {
    fetch('https://forecast.weather.gov/MapClick.php?lat=42.3761&lon=-71.1185&FcstType=digitalDWML')
      .then(res => res.text())
      .then(res => xml2js(res))
      .then(res => {
        const rawData = res.elements[0].elements[1].elements;
        let data = {}
        console.log({rawData})
        rawData.forEach((datum) => {
          if (datum.name === 'parameters') {
            datum.elements.forEach(datumm => {
              const type = datumm.attributes.type === undefined ? '' : datumm.attributes.type.replace(' ', '-');
              data[datumm.name + '-' + type] = datumm.elements;
            })
          } else {
            data[datum.name] = datum.elements;
          }
        })
        console.log(data)
        const startTimes = data['time-layout'].filter(time => time.name === 'start-valid-time').map(time => time.elements[0].text)
        set(data, startTimes, setTemperatureHourly, 'temperature-hourly');
        set(data, startTimes, setTemperatureDew, 'temperature-dew-point');
        set(data, startTimes, setTemperatureWind, 'temperature-wind-chill');
        set(data, startTimes, setHumidity, 'humidity-relative');
        set(data, startTimes, setPrecProb, 'probability-of-precipitation-floating');
        weatherSet(data, startTimes)
      })
  }, [])

  return <div
    style={{
      marginLeft: '10%',
      marginRight: '10%',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }}
    >
      <div><input type='button' value={'<- previous day'} onClick={() => {
        setDay(day - 1);
      }
      }/></div>
      <h2 style={{textAlign: 'center'}}>
        {titleFormatter(day)}
      </h2>
      <div><input type='button' value={'next day ->'} onClick={() => {
        setDay(day + 1);
      }
      }/></div>
    </div>
    <div>
      <Chart day={day} title='temperature' yLabel='temperature' showLegend={true} series={[
        {
          name: 'temperature',
          data: dataFilter(temperatureHourly),
        },
        {
          name: 'dew',
          data: dataFilter(temperatureDew),
        },
        {
          name: 'wind-chill',
          data: dataFilter(temperatureWind),
        }
      ]}/>
      <Chart day={day} title={'humidity'} yLabel='percent' series={[
        {
          name: 'humidity',
          data: dataFilter(humidity),
        },
      ]}/>
      <Chart day={day} title={'precipitation probability'} reverse={true} yLabel='percent' series={[
        {
          name: 'precipitation probability',
          data: dataFilter(precProb),
        },
        // {
        //   name: 'snow',
        //   data: dataFilter(snow),
        //   type: 'column'
        // },
        // {
        //   name: 'rain',
        //   data: dataFilter(rain),
        //   type: 'column'
        // }
      ]}/>
      {/*<Chart day={day} title={'precipitation probability'} reverse={true} yLabel='percent' series={[*/}
      {/*  // {*/}
      {/*    name: 'snow',*/}
      {/*    data: dataFilter(snow),*/}
      {/*    type: 'column'*/}
      {/*  },*/}
      {/*  {*/}
      {/*    name: 'rain',*/}
      {/*    data: rain,*/}
      {/*    type: 'column'*/}
      {/*  }*/}
      {/*// ]}/>*/}
      {/*<Chart day={day} range={range} title={'snow/rain'} yLabel='percent' series={[*/}
      {/*  {*/}
      {/*    name: 'precipitation probability',*/}
      {/*    data: precProb,*/}
      {/*  },*/}
      {/*]}/>*/}
    </div>
  </div>
}