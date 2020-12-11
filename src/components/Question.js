import React, { useState } from "react"


function Question({question, answer, setNumCorrect, numCorrect, index}) {
  const [val, setVal] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  return (<div style={{fontSize: 25, marginTop: 15}}>
    {index + 1}: {question}
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
              setVal(e.target.value);
              if (e.target.value.toLowerCase().replace(' ', '') === answer.toLowerCase()) {
                setNumCorrect(numCorrect + 1);
                setShowAnswer(true);
              }
            }
          }}
          value={val}
          disabled={showAnswer}
        />
    </div>
    {showAnswer && <div style={{fontSize: 20}}>Correct! Answer is: {answer}</div>}
  </div>)
}

export default Question;