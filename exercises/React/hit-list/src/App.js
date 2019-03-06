import React, { Component } from 'react';
// import './App.css';
import axios from "axios"
const Axios = require('axios')


class App extends Component {
  constructor (){
    super()
    this.state = {
      people: []
    }
  }


  async componentDidMount(){

    try {
      const peeps = await this.getPeeps()
      this.setState({people: peeps})
    } catch(err) {
      console.log(err);

    }

    Axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json").then(response => {
      this.setState({
        people: response.data.results
      })
    })
  }

  async getPeeps() {
    const response = await axios.get("http://s3.amazonaws.com/v-school/data/hitlist.json")
    return response.data
  }
  
  render() {
    const mappedPeople = this.state.people.map((person, i)=>{
      return (
        <div key={person.name + i}>
          <div>{person.name}</div>
          <img style={{height: '200px', width: '300px'}} src={person.image} alt=""/>
        </div>
      )
    })
    return (
      <div>
        {mappedPeople}
      </div>
    );
  }
}

export default App;
