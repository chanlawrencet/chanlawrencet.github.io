import React, { useEffect } from "react"
import styled from 'styled-components';
import {Slider as BlueprintSlider, Switch as BlueprintSwitch} from '@blueprintjs/core'
import "@blueprintjs/core/lib/css/blueprint.css";
import { Blurb } from "./Blurb"

// styles
const Header = styled.h1`
  display: flex;
  justify-content: center;
`

const ColorBlockDiv = styled.div`
  width: 200px;
  height: ${props => props.half ? '100px' : '200px'};
  background-color: ${props => props.color};
`

const Sliders = styled.div`
  width: 80%;
  max-width: 600px;
`

const Centering = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 `

const Switch = styled(BlueprintSwitch)`
  margin: 20px;
`

const ColorBlocks = styled.div`
  display: flex;
  justify-content: center;
`

const Slider = styled(BlueprintSlider)`
.bp3-slider-progress.bp3-intent-primary {
  background-color: ${props => props.color};
}
`

// helpers
const getMonochromeVal = (r256,g256,b256) => {
  const r = r256 / 256.0;
  const g = g256 / 256.0;
  const b = b256 / 256.0;
  const yLinear = 0.2126 * r + 0.7152 * g + 0.0722 * b
  let ySrgb;
  if (yLinear <= 0.0031308) {
    ySrgb =  12.92 * yLinear;
  } else {
    ySrgb = 1.055 * Math.pow(yLinear, (1 / 2.4)) - 0.055;
  }
  return ySrgb * 256.0;
}

const rgbToCss = (r,g,b) => `rgb(${r},${g},${b})`

// components
const ColorSlider = ({value, setValue, color}) => {
  return (
    <Slider
      min={0}
      max={256}
      stepSize={1}
      labelStepSize={25}
      onChange={setValue}
      value={value}
      color={color}
    />
  )
}

const ColorBlock = ({r,g,b,half=false}) => {
  const color = rgbToCss(r,g,b);
  return <ColorBlockDiv color={color} half={half}/>
}

const MonochromePlayground = () => {
  const [r, setR] = React.useState(62);
  const [g, setG] = React.useState(142);
  const [b, setB] = React.useState(222);
  const [monochromeVal, setMonochromeVal] = React.useState(50);
  const [monochrome, setMonochrome] = React.useState(false);

  useEffect(() => {
    setMonochromeVal(getMonochromeVal(r,g,b))
  }, [r,g,b])

  return (
    <Centering>
      <Header>Monochrome Playground</Header>
      <Blurb/>
      <ColorBlocks>
        { monochrome ? <div>
          <ColorBlock
            r={r}
            g={g}
            b={b}
            half={true}
          />
          <ColorBlock
            r={monochromeVal}
            g={monochromeVal}
            b={monochromeVal}
            half={true}
          />
        </div> : <ColorBlock
          r={r}
          g={g}
          b={b}
        />}
      </ColorBlocks>
      <Switch label="monochrome!" checked={monochrome} onChange={() => setMonochrome(!monochrome)}/>
      <Sliders>
        <ColorSlider value={r} setValue={setR} color={rgbToCss(r, 0, 0)}/>
        <ColorSlider value={g} setValue={setG} color={rgbToCss(0, g, 0)}/>
        <ColorSlider value={b} setValue={setB} color={rgbToCss(0, 0, b)}/>
      </Sliders>
    </Centering>)
}

export {MonochromePlayground};
