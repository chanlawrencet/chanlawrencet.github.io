import React, { useEffect } from "react"
import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone";
import utc from 'dayjs/plugin/utc'
import { xml2js } from "xml-js"
import { Chart } from "./Chart"
import { STATE_LOOKUP_REV, toUpper } from "./utils"


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
  'likely': 75,
  '': 100, // ocnl
}

const WEATHER_NAME_MAP = {
  'no chance': 'no chance',
  'slight chance': 'slight chance',
  'chance': 'chance',
  'likely': 'likely',
  '': 'occasional',
}


export const Weather = ({lat, lon}) => {
  console.log({lat, lon})
  const [temperatureHourly, setTemperatureHourly] = React.useState([]);
  const [temperatureDew, setTemperatureDew] = React.useState([]);
  const [temperatureWind, setTemperatureWind] = React.useState([]);
  const [humidity, setHumidity] = React.useState([]);
  const [precProb, setPrecProb] = React.useState([]);
  const [snow, setSnow] = React.useState([])
  const [rain, setRain] = React.useState([])
  const [loaded, setLoaded] = React.useState(false);
  const [precIn, setPrecIn] = React.useState([]);
  const [location, setLocation] = React.useState("");
  console.log({humidity})

  const [day, setDay] = React.useState(0);

  const set = (data, startTimes, fn, key) => {
    const values = data[key].map(temp => {
      if (!Object.keys(temp).includes('elements')) {
        return null;
      }
      return parseFloat(temp.elements[0].text)
    })
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
        name: WEATHER_NAME_MAP['no chance'],
      }
      if (temp.elements !== undefined) {
        let wasSnow = false;
        let wasRain = false;
        temp.elements.forEach(({attributes: attr})  => {
          if (attr['weather-type'] === 'snow') {
            wasSnow = true;
            console.log(attr, attr['coverage'])
            snow.push({
              x: currTime.unix(),
              y: WEATHER_MAP[attr['coverage']],
              name: WEATHER_NAME_MAP[attr['coverage']],
            })
          } else if (attr['weather-type'] === 'rain') {
            wasRain = true;
            rain.push({
              x: currTime.unix(),
              y: WEATHER_MAP[attr['coverage']],
              name: WEATHER_NAME_MAP[attr['coverage']],
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
    const latF = parseFloat(lat);
    const lonF = parseFloat(lon);
    fetch('http://localhost:3000/places.json')
      .then(res => res.json())
      .then(places => {
        for (let i = 0; i < places.length; i++) {
          const curr = places[i];
          const iLat = curr['la'];
          const iLon = curr['ln'];
          if (latF === iLat && lonF === iLon) {
            setLocation(toUpper(curr['n']) + ", " + STATE_LOOKUP_REV[curr['s'].toString().toUpperCase()]);
          }
        }
      }).catch(x => {
        console.log({x})
    })
    fetch(`https://forecast.weather.gov/MapClick.php?lat=${lat}&lon=${lon}&FcstType=digitalDWML`)
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
        set(data, startTimes, setPrecIn, 'hourly-qpf-floating');
        weatherSet(data, startTimes)
        setLoaded(true);
      })
  }, [])

  console.log({precIn})

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
      <h2>{location}</h2>
    </div>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }}
    >
      <div><input type='button' disabled={day === 0} value={'<- previous day'} onClick={() => {
        setDay(day - 1);
      }
      }/></div>
      <h2 style={{textAlign: 'center'}}>
        {titleFormatter(day)}
      </h2>
      <div><input type='button' disabled={day === 5} value={'next day ->'} onClick={() => {
        setDay(day + 1);
      }
      }/></div>
    </div>
    {loaded && <div>
      <Chart day={day} title='temperature' yLabel='temperature' showLegend={true} series={[
        {
          name: 'temperature',
          data: dataFilter(temperatureHourly),
          tooltip: {
            valueSuffix: '°',
          },
        },
        {
          name: 'dew',
          data: dataFilter(temperatureDew),
          tooltip: {
            valueSuffix: '°',
          },
        },
        {
          name: 'wind-chill',
          data: dataFilter(temperatureWind),
          tooltip: {
            valueSuffix: '°',
          },
        }
      ]}/>
      <Chart day={day} title={'humidity'} yLabel='percent' height={200} series={[
        {
          name: 'humidity',
          data: dataFilter(humidity),
          tooltip: {
            valueSuffix: '%',
          },
        },
      ]}/>
      <Chart day={day} title={'precipitation'} reverse={true} height={200} yLabel='percent' series={[
        {
          name: 'probability',
          data: dataFilter(precProb),
          tooltip: {
            valueSuffix: '%',
          },
        },
        {
          name: 'snow',
          data: dataFilter(snow),
          type: 'column',
          tooltip: {
            pointFormat: "<span style=\"color:{point.color}\">●</span> {series.name}: <b>{point.name}</b><br/>"
          }
        },
        {
          name: 'rain',
          data: dataFilter(rain),
          type: 'column',
          tooltip: {
            pointFormat: "<span style=\"color:{point.color}\">●</span> {series.name}: <b>{point.name}</b><br/>"
          }
        }
      ]}/>
      <Chart softYMax={0.01} day={day} title={'precipitation per hour'} reverse={true} height={200} yLabel='inches' series={[
        {
          name: 'precipitation per hour',
          data: dataFilter(precIn),
          tooltip: {
            valueSuffix: 'in',
          },
        },
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
    </div>}
  </div>
}