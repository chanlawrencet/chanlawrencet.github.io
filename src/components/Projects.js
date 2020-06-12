import React from "react";
import ListLink from "./ListLink"

const Projects = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 30,
      flexWrap: 'wrap',
    }}
  >
    <div
      style={{fontSize: 20, fontWeight: 'bold'}}
    >
      Projects
    </div>
    <div
      style={{maxWidth: 300}}
    >
      <ListLink
        link='https://github.com/JumboCode/South-Florida-Jewish-Academy'
        linkText='SFJA Forms'
        description='Webapp for k12 school to manage students and their forms.'
      />
      <ListLink
        link='https://github.com/chanlawrencet/SwipeShare'
        linkText='Swipe Share'
        description='Winner of Tufts Hackathon, providing a platform to connect students with extra meal swipes to those who need them.'
      />
      <div style={{marginTop: 20}}>
        ... others on my <a href='https://github.com/chanlawrencet'>Github Profile!</a>
      </div>
    </div>
  </div>
)

export default Projects;