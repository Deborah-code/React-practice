import React from 'react'

function Score(props){
return(
<p>
  Your Score: {props.numCorrect}/{props.numQuestions}
</p>
)}

export default Score