import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      isLiked: false
    }
  }

  changeIt = () => {
    this.setState((prevState)=>{
      return {
        isLiked: !prevState.isLiked
      }
    })
  }

  render() {
    let itIs = this.state.isLiked ? <button onClick={this.changeIt}><div><img src="https://files.gamebanana.com/img/ico/sprays/shaq_copy.png" alt="like"/> <h1>Shaq Smile</h1></div></button> : <button onClick={this.changeIt}><div><img src="https://kzconcepts.files.wordpress.com/2010/08/shaq-mad.jpg?w=594" alt="dislike"/> <h1>Shaq Frown</h1></div></button>;
    return (
      <div>        
        {itIs}
      </div>
    );
  }
}

export default App;
