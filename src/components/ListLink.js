import React from 'react';

export default function ListLink({link, linkText, description}) {
  return(
    <div style={{marginBottom: 20}}>
      <div
        style={{fontSize: 20}}
      >
        <a href={link}>{linkText}</a>
      </div>
      <div
        style={{fontSize: 17}}
      >
        {description}
      </div>
    </div>
  )
}