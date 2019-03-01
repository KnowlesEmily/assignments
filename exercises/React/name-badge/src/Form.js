import React, { Component } from "react";
import Badge from "./Badge"

class Form extends Component {
  constructor(){
    super()
    this.state = {
      inputs: {
        firstName: "",
        lastName: "",
        email: "",
        birth: "",
        phone: "",
        favFood: "",
        about: "",
      },
      badges: []
    }
  }

  
  handleChange = e => {
    const {name,value} = e.target
    this.setState(prevState => {
      return {
        inputs: {
          ...prevState.inputs,
          [name]: value
        }
      }
    })
  }

  handleSubmit = e => {
      e.preventDefault()
      this.setState(prevState=>{
      return {
        badges: [prevState.inputs, ...prevState.badges],
        inputs: {firstName: "",
        lastName: "",
        email: "",
        birth: "",
        phone: "",
        favFood: "",
        about: "",}
    }
  })
}

  render() {
    let {firstName, lastName, email, birth, phone, favFood, about} = this.state.inputs
    const mappedBadges = this.state.badges.map((badge, i) => <Badge key={badge+i} badge={badge} /> )
    return (
      <React.Fragment>
        <div className="dive">
          <div className="diver">
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={this.handleChange} required/>
              <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={this.handleChange} required/>
              <input type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} required/>
              <input type="text" name="birth" placeholder="Place of Birth" value={birth} onChange={this.handleChange} required/>
              <input type="tel" name="phone" placeholder="Phone Number" value={phone} onChange={this.handleChange} required/>
              <input type="text" name="favFood" placeholder="Favorite Food" value={favFood} onChange={this.handleChange} required/>
              <textarea className="aboutMe" rows="auto" type="text" name="about" placeholder="Tell us about yourself" value={about} onChange={this.handleChange} required/>
            <button>Submit</button>
            </form>
          </div>
        </div>
        {mappedBadges}
      </React.Fragment>
    );
  }
}

export default Form;