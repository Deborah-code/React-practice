import React, { Component } from 'react';
import './App.css';
import Score from './Score'


class App extends Component {
  constructor() {
  super();
  
  this.state = {
    numQuestions : 0,
    numCorrect : 0
  };
}
  
  
  clickHandler(correctAnswer, proposedAnswer, answerChoice){
   if (correctAnswer === proposedAnswer && answerChoice === true){
    this.setState({numQuestions: this.state.numQuestions+1, numCorrect: this.state.numCorrect+1})
   }
    else if(correctAnswer !== proposedAnswer && answerChoice === false){
      this.setState({numQuestions: this.state.numQuestions+1, numCorrect: this.state.numCorrect+1})
    }
    
    else{
      this.setState({numQuestions: this.state.numQuestions+1})
    }
     //console.log('this is working')
    }
  

  render() {
    let val1 = Math.floor(Math.random() * 100)
  	let val2 = Math.floor(Math.random() * 100)
  	let val3 = Math.floor(Math.random() * 100)
    let proposedAnswer = Math.floor(Math.random() * 2) + val1 + val2 + val3;
    let correctAnswer = val1 + val2 + val3
    return (
      <div className="App">
       
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${val1} + ${val2} + ${val3} = ${proposedAnswer}`}</p>
          </div>
          <button 
			onClick={() => this.clickHandler(correctAnswer, proposedAnswer, true)}>
			True
		</button>
          <button onClick={() => this.clickHandler(correctAnswer, proposedAnswer, false)}>
          False
          </button>
          <Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions} />
        </div>
      </div>
    );
  }
}

export default App;
