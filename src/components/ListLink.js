import React from 'react';
import styled from 'styled-components'

const LinkDiv = styled.div`
  font-size: 20px;
`;
export default function ListLink({data}) {
  const {title, titleLink, subtitle} = data;
  return(
    <div style={{marginBottom: 20}}>
      <LinkDiv
        style={{fontSize: 20}}
      >{ titleLink ?
        <a href={titleLink}>{title}</a> :
        <div>{title}</div>
      }
      </LinkDiv>
      <div
        style={{fontSize: 17}}
      >
        {subtitle}
      </div>
    </div>
  )
}
