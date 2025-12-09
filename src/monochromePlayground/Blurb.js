import React from 'react'
import styled from "styled-components"


const Centering = styled.div`
  display: flex;
  justify-content: center;
`

const SourceLink = styled.a`
  margin-left: 0.5em;
`

const TextBox = styled.div`
  height: ${props => props.more ? '100%' : '20px'};
  overflow: ${props => props.more ? 'auto': 'hidden'};
  .inline{
   display: inline;
  }
`

const MoreLess = styled.div`
  cursor: pointer;
`

const MarginedDiv = styled.div`
  margin-bottom: 20px;
  width: 80%;
  max-width: 400px;
`;

const Blurb = () => {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <MarginedDiv>
      <Centering>
        <TextBox more={showMore}>
          I wanted to learn more about the effects of color on their monochrome-d values to better understand
          their role in black and white photography.
          <SourceLink href='https://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale'>Monochrome formula source.</SourceLink>
        </TextBox>
      </Centering>
      <MoreLess
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'less...' : 'more..'}
      </MoreLess>
    </MarginedDiv>
  )
}

export {Blurb}
