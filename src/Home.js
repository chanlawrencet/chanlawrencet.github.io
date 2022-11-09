import React, { useEffect, useMemo, useRef } from "react"
import Blurb from "./components/Blurb"
import Links from "./components/Links"
import BodyElement from "./components/BodyElement"
import Footer from "./components/Footer"
import gsap, {Elastic} from "gsap"
import styled from 'styled-components';

const HomeDiv = styled.div`
  font-family: Roboto;
  display: flex;
  justify-content: center;
  color: #646464;
  a:link, a:visited, a:hover, a:active {
  color: #646464;
}
`

const updated = '2022/11/09'

const siteData = {
  'Selected Experience': {
    body: [
      {
        title: 'Software Engineer - TriNetX',
        subtitle: '2020 -',
      },
      {
        title: 'Admissions Interviewer - Tufts',
        subtitle: '2019 -',
      },
      {
        title: 'Project Manager - Tufts',
        subtitle: '2019 - 2020',
      },
      {
        title: 'CS Teaching Fellow - Tufts',
        subtitle: '2018 - 2020',
      },
      {
        title: 'Google Student Innovator - VACO',
        subtitle: '2018 - 2019',
      },
      {
        title: 'Student Clinic President - Tufts',
        subtitle: '2017 - 2019',
      }
    ]
  },
  Reading: {
    body: [
      {
        title: 'Thinking, Fast and Slow',
        titleLink: 'https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow',
        subtitle: 'Daniel Kahneman',
      },
      {
        title: 'Designing Data-Intensive Applications',
        titleLink: 'https://www.goodreads.com/book/show/23463279-designing-data-intensive-applications',
        subtitle: 'Martin Kleppmann',
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
        title: 'Book - Deep Work',
        titleLink: 'https://www.goodreads.com/book/show/25744928-deep-work',
        subtitle:'Cal Newport',
      },
      {
        title: 'Book - Pachinko',
        titleLink: 'https://www.goodreads.com/book/show/53331127-pachinko',
        subtitle: 'Min Jin Lee',
      },
      {
        title: 'Book - The Moment of Lift',
        titleLink: 'https://www.goodreads.com/book/show/40776644-the-moment-of-lift',
        subtitle:'Melinda Gates',
      },
      {
        title: 'Book - Little Fires Everywhere',
        titleLink: 'https://www.goodreads.com/book/show/34273236-little-fires-everywhere?ac=1&from_search=true',
        subtitle:'Celeste Ng',
      },
      {
        title: 'Book - How to Hide an Empire: A History of the Greater United States',
        titleLink: 'https://www.goodreads.com/book/show/40121985-how-to-hide-an-empire',
        subtitle: 'Daniel Immerwahr',
      },
      {
        title:'Book - Educated',
        titleLink: 'https://www.goodreads.com/book/show/36247169-educated',
        subtitle:'Tara Westover',
      },
      {
        title:'Podcast - Modern Love',
        titleLink: 'https://www.nytimes.com/column/modern-love-podcast',
        subtitle:'The New York Times',
      },
      {
        title:'Podcast - This American Life',
        titleLink: 'https://www.thisamericanlife.org',
        subtitle:'This American Life',
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

function Home() {
  const timeline = useMemo(() => gsap.timeline(), []);
  const divRef = useRef(0);
  useEffect(() => {
    timeline.from(divRef.current.childNodes, {
      y: 50,
      opacity: 0,
      ease: "power4.in",
      duration: 0.7,
      stagger: 0.2,
      rotation: 3,
    });
    timeline.to('.hand', {
      ease: Elastic.easeOut.config( 20, 2),
      duration: 1,
      rotate: 10,
      delay: -1
    })
  }, [])

  useEffect(() => {
  }, [])

  return (
    <HomeDiv>
      <div ref={divRef} style={{flexDirection: 'column', maxWidth: 600, margin: 20}}>
        <div
          style={{fontSize: 40, fontWeight: 'bold', marginTop: 40, display:'flex'}}
        >
          <div>Hi, I'm Lawrence Chan!&nbsp;&nbsp;</div>
          <div className={'hand'}>👋</div>
        </div>
        <Blurb/>
        <Links/>
        {Object.keys(siteData).map(
          (bodyTitle, i) => <BodyElement
            key={i}
            bodyTitle={bodyTitle}
            bodyContents={siteData[bodyTitle]}
          /> )}
        <Footer data={updated}/>
      </div>
    </HomeDiv>
  );
}

export default Home;
