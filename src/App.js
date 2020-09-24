import React from 'react';
import Blurb from "./components/Blurb"
import Header from "./components/Header"
import Links from "./components/Links"
import BodyElement from "./components/BodyElement"
import Footer from "./components/Footer"

const appStyle = {
  fontFamily: 'Roboto',
  display: 'flex',
  justifyContent: 'center',
  color: '#646464',
}

const updated = '2020/09/23'

const siteData = {
  'Selected Experience': {
    body: [
      {
        title: 'Software Engineer - TriNetX',
        subtitle: '2020',
      },
      {
        title: 'Project Manager - Tufts',
        subtitle: '2019-2020',
      },
      {
        title: 'CS Teaching Fellow - Tufts',
        subtitle: '2018-2020',
      },
      {
        title: 'Google Student Innovator - VACO',
        subtitle: '2018-2019',
      },
      {
        title: 'Student Clinic President - Tufts',
        subtitle: '2017-2019',
      }    
    ]
  },
  Reading: {
    body: [
      // {
      //   title: 'The Life-Changing Magic of Tidying Up',
      //   titleLink: 'https://www.goodreads.com/book/show/22823462-the-life-changing-magic-of-tidying-up',
      //   subtitle: 'Marie Kondō',
      // },
      {
        title: 'Sandworm: A New Era of Cyberwar and the Hunt for the Kremlin\'s Most Dangerous Hackers',
        titleLink: 'https://www.goodreads.com/book/show/41436213-sandworm',
        subtitle: 'Andy Greenberg',
      }
    ],
    footer: {
      preText: '... others on my ',
      linkText: 'Goodreads Profile!',
      link: 'https://www.goodreads.com/user/show/108515434-lawrence',
    }
  },
  Recommends: {
    body: [
      {
        title: 'Pachinko',
        titleLink: 'https://www.goodreads.com/book/show/53331127-pachinko',
        subtitle: 'Min Jin Lee',
      },
      {
        title:'The Moment of Lift',
        titleLink: 'https://www.goodreads.com/book/show/40776644-the-moment-of-lift',
        subtitle:'Melinda Gates',
      },
      {
        title:'Little Fires Everywhere',
        titleLink: 'https://www.goodreads.com/book/show/34273236-little-fires-everywhere?ac=1&from_search=true',
        subtitle:'Celeste Ng',
      },
      {
        title:'Educated',
        titleLink: 'https://www.goodreads.com/book/show/36247169-educated',
        subtitle:'Tara Westover',
      },
      {
        title:'Epic Measures',
        titleLink: 'https://www.goodreads.com/book/show/22693187-epic-measures?from_search=true',
        subtitle:'Jeremy Smith',
      },
    ]
  },
  Projects: {
    body: [
      {
        title: 'SFJA Forms',
        titleLink: 'https://github.com/JumboCode/South-Florida-Jewish-Academy',
        subtitle: 'Webapp for k12 school to manage students and their forms.',
      },
      {
        title: 'Swipe Share',
        titleLink: 'https://github.com/chanlawrencet/SwipeShare',
        subtitle: 'Winner of Tufts Hackathon, providing a platform to connect students with extra meal swipes to those who need them.',
      },
    ],
    footer: {
      preText: '... others on my ',
      linkText: 'Github Profile!',
      link: 'https://github.com/chanlawrencet',
    }
  },
  Contact: {
    body: [
      {
        title: 'Email',
        titleLink: 'mailto:chanlawrencet@gmail.com',
        subtitle: 'chanlawrencet@gmail.com',
      }
    ]
  }
}

function App() {
  return (
    <div style={appStyle}>
      <div style={{flexDirection: 'column', maxWidth: 600, margin: 20,}}>
        <Header/>
        <Blurb/>
        <Links/>
        {Object.keys(siteData).map(
          bodyTitle => <BodyElement
                          key={bodyTitle}
                          bodyTitle={bodyTitle}
                          bodyContents={siteData[bodyTitle]}
          /> )}
        <Footer data={updated}/>
      </div>
    </div>
  );
}

export default App;
