import React from "react";
import Github from '../assets/github.png'
import LinkedIn from '../assets/linkedin.png'
import PhotoPx from '../assets/500px.png'
const Links = () => (
  <div
    style={{
      display: 'flex',
      marginTop: 20,
      alignItems: 'center'
    }}
  >
    <a
      style={{marginRight: 20}}
      href='https://www.github.com/chanlawrencet'>
      <img height={40} width={40} src={Github}/>
    </a>
    <a
      style={{marginRight: 20}}
      href='https://www.linkedin.com/in/chanlawrencet/'>
      <img height={40} width={40} src={LinkedIn}/>
    </a>
    <a
      style={{marginRight: 20}}
      href='https://500px.com/p/chanlawrencet?view=photos'>
      <img height={20} width={75} src={PhotoPx}/>
    </a>
    <a
      style={{fontSize: 17, marginRight: 20}}
      href='https://www.chanlawrencet.com/Lawrence_Chan_Resume.pdf'
    >
      Resume
    </a>
    <a
      style={{fontSize: 17}}
      href='https://chanlawrencet.blogspot.com/'
    >
      Blog
    </a>
  </div>
)

export default Links;