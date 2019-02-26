import React, {Component} from "react"

class App extends Component {
  constructor(){
    super()
    console.log(this)

    this.state = {
      counter: 10
    }
  }
  subtract = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1
      }
    })
  }

  add = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }


  render(){
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}

export default App