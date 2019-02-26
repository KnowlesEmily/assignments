import React, { Component } from 'react';
import './App.css';
import bruising from "./sounds.mp3/Bruising my neckmeat.mp3";
import dang from "./sounds.mp3/Dang.mp3";
import eat from "./sounds.mp3/Eat the food.mp3";
import i from "./sounds.mp3/I like her bangs.mp3";
import sweetMoolah from "./sounds.mp3/Sweet moola.mp3";
import sweet from "./sounds.mp3/Sweet.mp3";
import what from "./sounds.mp3/What are you going to do today.mp3";
import wish from "./sounds.mp3/Wish you wouldnt look at me like that.mp3";

class App extends Component {
  constructor(){
    super()
    this.state = {
      boxOne: "white",
      boxTwo: "white",
      boxThree: "white",
      boxFour: "white",
      isWhite: true,
      isPurple: true,
      isBlueLeft: true,
      isBlueRight: true,
      isRed: true,
      isOrange: true,
      isYellow: true,
      isGreen: true,
      play1: "false",
      play2: "false",
      play3: "false",
      play4: "false",
      play5: "false",
      play6: "false",
      play7: "false",
      play8: "false"
    }
  }

  audio1 = new Audio(bruising)
  audio2 = new Audio(dang)
  audio3 = new Audio(eat)
  audio4 = new Audio(i)
  audio5 = new Audio(sweet)
  audio6 = new Audio(sweetMoolah)
  audio7 = new Audio(what)
  audio8 = new Audio(wish)

  toggleBlackWhite = () => {
    this.setState((prevState)=>{
      if(prevState.isWhite){
        return {
          boxOne: "black",
          boxTwo: "black",
          boxThree: "black",
          boxFour: "black",
          isWhite: false,
          play1: !this.state.play1
        }
      } else {
        return {
          boxOne: "white",
          boxTwo: "white",
          boxThree: "white",
          boxFour: "white",
          isWhite: true,
          play1: !this.state.play1
        }
      }
    })
    this.state.play1 ? this.audio1.play() : this.audio1.pause();
  }

  changePurple = () => {
    this.setState((prevState)=>{
      if(prevState.isPurple){
        return {
          boxOne: "#cc66ff", 
          boxTwo: "#cc66ff",
          isPurple: false,
          play2: !this.state.play2
        }
      } else {
        return {
          boxOne: "white", 
          boxTwo: "white",
          isPurple: true,
          play2: !this.state.play2
        }
      }
    })
    this.state.play2 ? this.audio2.play() : this.audio2.pause();
  }

  changeBlueLeft = () => {
    this.setState((prevState)=>{
      if(prevState.isBlueLeft){
        return {
          boxThree: "lightBlue", 
          isBlueLeft: false,
          play3: !this.state.play3
        }
      } else {
        return {
          boxThree: "white", 
          isBlueLeft: true,
          play3: !this.state.play3
        }
      }
    })
    this.state.play3 ? this.audio3.play() : this.audio3.pause();
  }
   
  changeBlueRight = () => {
    this.setState((prevState)=>{
      if(prevState.isBlueRight){
        return {
          boxFour: "lightBlue",
          isBlueRight: false,
          play4: !this.state.play4
        }
      } else {
        return {
          boxFour: "white",
          isBlueRight: true,
          play4: !this.state.play4
        }
      }
    })
    this.state.play4 ? this.audio4.play() : this.audio4.pause();
  }

  changeRed = () => {
    this.setState((prevState)=>{
      if(prevState.isRed){
        return {
          boxOne: "#ff5050",
          isRed: false,
          play5: !this.state.play5
        }
      } else {
        return {
          boxOne: "white",
          isRed: true,
          play5: !this.state.play5
        }
      }
    })
    this.state.play5 ? this.audio5.play() : this.audio5.pause();
  }

  changeOrange = () => {
    this.setState((prevState)=>{
      if(prevState.isOrange){
        return {
          boxTwo: "#ff944d",
          isOrange: false,
          play6: !this.state.play6
        }
      } else {
        return {
          boxTwo: "white",
          isOrange: true,
          play6: !this.state.play6
        }
      }
    })
    this.state.play6 ? this.audio6.play() : this.audio6.pause();
  }

  changeYellow = () => {
    this.setState((prevState)=>{
      if(prevState.isYellow){
        return {
          boxThree: "#ffff80",
          isYellow: false,
          play7: !this.state.play7
        }
      } else {
        return {
          boxThree: "white",
          isYellow: true,
          play7: !this.state.play7
        }
      }
    })
    this.state.play7 ? this.audio7.play() : this.audio7.pause();
  }

  changeGreen = () => {
    this.setState((prevState)=>{
      if(prevState.isGreen){
        return {
          boxFour: "#ccff99",
          isGreen: false,
          play8: !this.state.play8
        }
      } else {
        return {
          boxFour: "white",
          isGreen: true,
          play8: !this.state.play8
        }
      }
    })
    this.state.play8 ? this.audio8.play() : this.audio8.pause();
  }

  render() {
    return (
      <div className="grid">
        <h1>The NapoleONE</h1>
        <h1>Sound Board</h1>
        <div className="box" style={{backgroundColor: this.state.boxOne}}></div>
        <div className="box" style={{backgroundColor: this.state.boxTwo}}></div>
        <div className="box" style={{backgroundColor: this.state.boxThree}}></div>
        <div className="box" style={{backgroundColor: this.state.boxFour}}></div>
        <button onClick={this.toggleBlackWhite}>{this.state.isWhite ? "Change to Black" : "Change to White"}</button>
        <button onClick={this.changePurple}>{this.state.isPurple ? "Change to Purple" : "Change to White"}</button>
        <button onClick={this.changeBlueLeft}>{this.state.isBlueLeft ? "Change bottom left to Blue" : "Change bottom right to White"}</button>
        <button onClick={this.changeBlueRight}>{this.state.isBlueRight ? "Change bottom right to Blue" : "Change bottom right to White"}</button>
        <button onClick={this.changeRed}>{this.state.isRed ? "Change top left to Red" : "Change top left to White"}</button>       
        <button onClick={this.changeOrange}>{this.state.isOrange ? "Change top right to Orange" : "Change top right to White"}</button>        
        <button onClick={this.changeYellow}>{this.state.isYellow ? "Change bottom left to Yellow" : "Change bottom left to Yellow"}</button>
        <button onClick={this.changeGreen}>{this.state.isGreen ? "Change bottom right to Green" : "Change bottom right to Green"}</button>     
        </div>
    )
  }
}

export default App;