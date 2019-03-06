import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      die1: Math.floor((Math.random()*6)+1),
      die2: Math.floor((Math.random()*6)+1),
      die3: Math.floor((Math.random()*6)+1),
      die4: Math.floor((Math.random()*6)+1),
      die5: Math.floor((Math.random()*6)+1)
    }
  }

  roll = () => {
    this.setState((prevState) => {
      return {
        die1: prevState.die1 = Math.floor((Math.random()*6)+1),
        die2: prevState.die2 = Math.floor((Math.random()*6)+1),
        die3: prevState.die3 = Math.floor((Math.random()*6)+1),
        die4: prevState.die4 = Math.floor((Math.random()*6)+1),
        die5: prevState.die5 = Math.floor((Math.random()*6)+1)
      }
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="dicey">{this.state.die1}</div>
        <div className="dicey">{this.state.die2}</div>
        <div className="dicey">{this.state.die3}</div>
        <div className="dicey">{this.state.die4}</div>
        <div className="dicey">{this.state.die5}</div>
        <button onClick={this.roll}></button>
      </div>
    );
  }
}

export default App;
