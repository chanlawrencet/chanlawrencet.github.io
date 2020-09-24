import React from 'react';

export default function ListLink({data}) {
  const {title, titleLink, subtitle} = data;
  return(
    <div style={{marginBottom: 20}}>
      <div
        style={{fontSize: 20}}
      >{ titleLink ? 
        <a href={titleLink}>{title}</a> :
        <div>{title}</div>
      }
      </div>
      <div
        style={{fontSize: 17}}
      >
        {subtitle}
      </div>
    </div>
  )
}