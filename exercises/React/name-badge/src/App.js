import React, { Component } from 'react';
import Form from "./Form";
import './App.css';

class App extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     birth: "",
  //     phone: "",
  //     favFood: "",
  //     about: "",
  //     names: [],
  //     badges: [],
  //   }
  // }

  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  // handleSubmit = e => {
  //   e.preventDefault();
  //   let {firstName, lastName, email, birth, phone, favFood, about} = this.state
  //   let newNames = `${firstName} ${lastName}`
  //   let newBadge = {firstName, lastName, email, birth, phone, favFood, about}
  //   this.setState((prevState)=>{
  //     return{
  //       names:[...prevState.names, newNames],
  //       badges: [...prevState.badges, newBadge],
  //       firstName: "",
  //       lastName: "",
  //       email: "",
  //       birth: "",
  //       phone: "",
  //       favFood: "",
  //       about: "",
  //     }
  //   })
  // }

  
  render() {
    // let mappedBadges = this.state.badges.map((badge, i)=>{
    //   return (
    //     <p key={badge+i}>
    //       {badge.name}
    //     </p>
    //   )
    // })
    return (
      <div>

      <Form />
      </div>
    );
  }
}

export default App;