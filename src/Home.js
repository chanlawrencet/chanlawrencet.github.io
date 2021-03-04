import React, { useEffect, useMemo, useRef } from "react"
import Blurb from "./components/Blurb"
import Links from "./components/Links"
import BodyElement from "./components/BodyElement"
import Footer from "./components/Footer"
import gsap, {Elastic} from "gsap"

const appStyle = {
  fontFamily: 'Roboto',
  display: 'flex',
  justifyContent: 'center',
  color: '#646464',
}

const updated = '2021/03/04'

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
      },
      {
        title: 'Americanah',
        titleLink: 'https://www.goodreads.com/book/show/29416548-americanah',
        subtitle: 'Chimamanda Ngozi Adichie',
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
        title:'Deep Work',
        titleLink: 'https://www.goodreads.com/book/show/25744928-deep-work',
        subtitle:'Cal Newport',
      },
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
        title: 'How to Hide an Empire: A History of the Greater United States',
        titleLink: 'https://www.goodreads.com/book/show/40121985-how-to-hide-an-empire',
        subtitle: 'Daniel Immerwahr',
      },
      {
        title:'Educated',
        titleLink: 'https://www.goodreads.com/book/show/36247169-educated',
        subtitle:'Tara Westover',
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
  console.log(window.location.href)
  const timeline = useMemo(() => gsap.timeline(), []);
  const divRef = useRef(0);
  useEffect(() => {
    timeline.from(divRef.current.childNodes, {
      y: 100,
      opacity: 0,
      ease: "power4.inOut",
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

  return (
    <div style={appStyle}>
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
    </div>
  );
}

export default Home;
