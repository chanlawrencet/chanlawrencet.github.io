import React, { useEffect } from "react"
import { STATE_LOOKUP, toUpper } from "./utils"

export const WeatherSearch = ({url}) => {
  console.log({url})
  const [searchText, setSearchText] = React.useState("")
  const [places, setPlaces] = React.useState([]);
  const [searchResults, setSearchResults] = React.useState([]);
  const [searching, setSearching] = React.useState(false)
  useEffect(() => {
    fetch('places.json')
      .then(res => {
        return res.json()
      })
      .then(places => {
        setPlaces(places)
      })
  }, [])

  const search = text => {
    if (text.length < 4) {
      return;
    }
    const lower = text.toLowerCase()

    if (lower.includes(',')) {
      const citySoFar = lower.split(',')[0]
      const stateSoFar = lower.split(',')[1].replace(' ', '')
      if (stateSoFar.length <= 2) {
        setSearchResults(places.filter(place => place['n'].toString().toLowerCase().includes(citySoFar) && place['s'].toString().toLowerCase().includes(stateSoFar)))
      } else {
        const placeState = Object.keys(STATE_LOOKUP).filter(state => state.toLowerCase().indexOf(stateSoFar) === 0)
        const possibleStateAbbs = placeState.map(key => STATE_LOOKUP[key]).map(abb => abb.toLowerCase());
        setSearchResults(places.filter(place => {
          return place["n"].toString().toLowerCase().includes(citySoFar) &&
            (place["s"].toString().toLowerCase().includes(stateSoFar) || possibleStateAbbs.includes(place["s"].toString()))
        }))
      }
    } else {
      setSearchResults(places.filter(place => place['n'].toString().toLowerCase().includes(lower)))
    }
    setSearching(false)
  }

  useEffect(() => {
    search(searchText);
  }, [searchText])

  return <div
    style={{
      margin: 20
    }}
  >
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      marginBottom: 20
    }}>
      <h2 style={{marginBottom: -15}}>search</h2><h4>(enter at least 4 characters)</h4>
      <input
        style={{ width: 200}}
        value={searchText} onChange={e => {
        setSearchText(e.target.value)}}/>
    </div>

    {searchText !== "" && searchResults.map((result, i) => {
      return <div>
        <a key={i} style={{
        textDecoration: 'underline',
        cursor: 'pointer',
        marginBottom: 5,
        color: 'black'
      }}
           href={url + `/${result['la']}/${result['ln']}`}
      >{toUpper(result['n'])} - {result['s'].toUpperCase()}</a>
      </div>
    })}
  </div>
}