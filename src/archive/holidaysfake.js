import React, { useEffect, useState } from "react"
import Question from "../components/Question"
import candy from './candy.png';

const pageStyle = {
  fontFamily: 'Roboto',
  display: 'flex',
  justifyContent: 'center',
  color: '#646464',
  backgroundImage: `url(${candy})`,
  height: '100vh',
  backgroundRepeat: 'repeat',
  backgroundSize: '50px 60px',
}

function Holidays2020Fake(){
  return(
    <div style={pageStyle}>
      <div style={{display: 'flex', flexDirection: 'column', maxWidth: '80vw', marginTop: 40, marginBottom: 40, backgroundColor: 'white', padding: 20, boxShadow: '7px 7px 10px grey', overflowY: 'scroll'}}>
        <div style={{fontSize: 40}}>
          Merry Christmas and Happy New Year! 🎄🎄
        </div>
        <br/>
        <div style={{fontSize: 30, marginTop: 20, }}>
          With this year's holiday season seeming different than most, I've decided to have a little fun and make my own ecards.
          <br/>
          <br/>
          The site isn't quite ready yet... check back in soon!
        </div>
      </div>
    </div>
  )
}

export default Holidays2020Fake;
