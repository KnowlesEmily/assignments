import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      names: []
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let newNames = `${this.state.firstName} ${this.state.lastName}`
    this.setState((prevState)=>{
      return({
        names:[...prevState.names, newNames],
        firstName: "",
        lastName: ""
      })
    })
  }


  render() {

    let mappedNames = this.state.names.map((names, i) => {
      return (
        <li key={names+i}>
        {names}
        </li>
      )
    })

    return (
      <form onSubmit={this.handleSubmit}>
      <input 
        type="text" 
        name="firstName" 
        placeholder="First Name" 
        onChange={this.handleChange} 
        value={this.state.firstName} />
      <input 
        type="text" 
        name="lastName" 
        placeholder="Last Name" 
        onChange={this.handleChange} 
        value={this.state.lastName} />
      <h1>{this.state.firstName} {this.state.lastName}</h1>
      <button>Submit</button>

      <ol>
        {mappedNames}
      </ol>

      </form>
    );
  }
}

export default App;
