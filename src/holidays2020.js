import React, { useEffect, useState } from "react"
import Question from "./components/Question"
import candy from './candy.png';

const pageStyle = {
  fontFamily: 'Roboto',
  display: 'flex',
  justifyContent: 'center',
  color: '#646464',
  backgroundImage: `url(${candy})`,
  height: '100vh',
  backgroundRepeat: 'repeat',
  backgroundSize: '50px 60px',
}

function Holidays2020(){
  const [content, setContent] = useState({});
  const [showContent, setShowContent] = useState(false);
  const [invalidMessage, showInvalidMessage] = useState(false);
  const [code, setCode] = useState('');
  const [ping, setPing] = useState(false)
  const [locked, setLocked] = useState(true)
  const [questionIdx, setQuestionIdx] = useState(0);

  function pingFunc() {
    fetch('https://chanlawrenceth2020server2.herokuapp.com/ping').then(res => res.json()).then((res) => {
      if (res.pong) {
        setTimeout(() => {
          setPing(true)
        }, 1000);
      } else {
        setTimeout(() => {
          pingFunc()
        }, 1000)
      }
    }).catch(() => {
      setTimeout(() => {
        pingFunc()
      }, 1000)
    })
  }

  useEffect(() => {
      pingFunc()
  }, [])

  function handleSubmit(e){
    e.stopPropagation();
    e.preventDefault();
    console.log(code)
    fetch('https://chanlawrenceth2020server2.herokuapp.com/search?code=' + code).then(res => res.json()).then((res) => {
      if (res.result === false) {
        showInvalidMessage(true)
      } else {
        setContent(res.result);
        setShowContent(true);
      }
    })
  }
  return(
    <div style={pageStyle}>
      <div style={{display: 'flex', flexDirection: 'column', maxWidth: '80vw', marginTop: 40, marginBottom: 70, backgroundColor: 'white', padding: 20, boxShadow: '7px 7px 10px grey', overflowY: 'scroll'}}>
        <div style={{fontSize: 40}}>
          Merry Christmas and Happy New Year! 🎄🎄
        </div>
        <br/>
        {!showContent || !content ?
          <div style={{fontSize: 30, marginTop: 20, }}>
            <div>
              With this year's holiday season seeming different than most, I've decided to have a little fun and make my own ecards.
            </div>
            <br/>
            {ping ? <div>
              <div>
                Enter your code below:
              </div>
              <br/>
              <form onSubmit={e => handleSubmit(e)}>
                <input type='text' size={12} style={{fontSize: 30, color: '#646464'}} onChange={e => setCode(e.target.value)}/>
                <input type='submit' value={'enter'} style={{fontSize: 20, color: '#646464', marginLeft: 20}} />
              </form>
              {invalidMessage ? <div>
                <br/>
                <div style={{fontSize: 20}}>That's incorrect! Please try again.</div>
              </div> : null}
              <br/>
              <div style={{fontSize: 20}}>Having trouble? Contact me!</div>
            </div> : <div>Hold on... contacting server</div>}
          </div> : null}
        {showContent && content && locked ? <div>
          {questionIdx < Object.keys(content.quiz).length ? <div>
            <div style={{fontSize: 25, marginTop: 15}}>
              Pop quiz! Answer the below to unlock your card!
              <br/>
              {questionIdx + 1} of {Object.keys(content.quiz).length} {<span>{[...Array(questionIdx + 1).keys()].map(x => <span key={x}>🎄</span>)}</span>}
            </div>
            <Question question={Object.keys(content.quiz)[questionIdx]} answer={content.quiz[Object.keys(content.quiz)[questionIdx]]} questionIdx={questionIdx} setQuestionIdx={setQuestionIdx}/>
            <br/>
          </div> : <div>
            <div style={{fontSize: 25, marginTop: 15}}>
              Congratulations! You've unlocked the card! Hope you enjoyed the quiz.
            </div>
            <input type='button' value='Click here to see the card' style={{fontSize: 20, color: '#646464', marginTop: 20}} onClick={() => setLocked(false)}/>
          </div>}
        </div> : null}

        {showContent && content && !locked ?
          <div style={{fontSize: 25}}>
            <div style={{fontSize: 30}}>Hi {content.name},</div>
            <div>
              {content.paragraphs.map((p, i) => <div key={i} style={{marginTop: 15, marginBottom: 15}}>{p}</div>)}
            </div>
            <div>
              {content.beforeSignature},
            </div>
            <div>
              {content.signature}
            </div>
          </div> : null}
      </div>
    </div>
  )
}

export default Holidays2020;