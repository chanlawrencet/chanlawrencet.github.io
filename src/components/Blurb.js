import React from "react"
import styled from 'styled-components'

const BlurbDiv = styled.div`
  font-size: 20px;
  margin-top: 30px;
  line-height: 1.5em;
  color: #646464;
`
const Blurb = () => (
  <BlurbDiv>
    Software Engineer at <a href='https://www.trinetx.com'>TriNetX, LLC.</a>, where I work on the health analytics team.
    I graduated from <a style={{}} href='https://www.tufts.edu'>Tufts University</a> with a degree in Computer Science
    and Community Health. I'm passionate about health inequities, data analytics, and bridging the gap between
    technology and wellness.
  </BlurbDiv>
)

export default Blurb;
