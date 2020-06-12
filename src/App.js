import React from 'react';
import Reading from "./components/Reading"
import Blurb from "./components/Blurb"
import Header from "./components/Header"
import Recs from "./components/Recs"
import Projects from "./components/Projects"
import Links from "./components/Links"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const appStyle = {
  fontFamily: 'Roboto',
  display: 'flex',
  justifyContent: 'center',
  color: '#646464',
}

function App() {
  return (
    <div style={appStyle}>
      <div style={{flexDirection: 'column', maxWidth: 600, margin: 20,}}>
        <Header/>
        <Blurb/>
        <Links/>
        <Reading/>
        <Recs/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
