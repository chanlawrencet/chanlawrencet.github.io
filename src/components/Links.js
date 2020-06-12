import React from "react";
import Github from '../assets/github.png'
import LinkedIn from '../assets/linkedin.png'
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
      style={{fontSize: 17}}
      href='https://www.chanlawrencet.com/Lawrence_Chan_Resume.pdf'
    >
      Resume
    </a>
  </div>
)

export default Links;