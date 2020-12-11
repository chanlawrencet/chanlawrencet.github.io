import React, { useState } from "react"


function Question({question, answer, setQuestionIdx, questionIdx}) {
  const [val, setVal] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  return (<div style={{fontSize: 25, marginTop: 15}}>
    {question}
    <br/>
    <div style={{marginTop: 5}}>
      <span style={{marginRight: 2, fontSize: 20}}>
        Answer:
      </span>
        <input
          size={10}
          style={{fontSize: 20}}
          type='text'
          onChange={(e) => {
            if (!showAnswer) {
              console.log(e.target)
              setVal(e.target.value);
              if (e.target.value.toLowerCase().replace(' ', '') === answer.toLowerCase()) {
                setShowAnswer(true);
              }
            }
          }}
          value={val}
        />
    </div>
    {showAnswer &&
    <div style={{fontSize: 20, marginTop: 10}}>
      Correct! Answer is: {answer}
      <br/>
      <input style={{fontSize: 20, marginTop: 10}} type='button' onClick={() => {
        setQuestionIdx(questionIdx + 1);
        setVal('')
        setShowAnswer(false);
      }} value='Next Question'/>
    </div>}
  </div>)
}

export default Question;