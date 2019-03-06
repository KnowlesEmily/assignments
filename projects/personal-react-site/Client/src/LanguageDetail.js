import React from 'react';
import list from "./idiomas.json";
// const Axios = require('axios')
import axios from 'axios'


class LanguageDetail extends React.Component {
  constructor(){
    super()

    this.state ={
      text: '',
      idioma: "hello how are you"
    }
  }
  
  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  getTranslation = name => {
    console.log(name)
    console.log(this.state.text)
    // axios.post("/forwarder", {text: this.state.text, name}).then(res => {
    //   console.log(res)
    //   this.setState({
    //     idioma: res.data.contents.translated
    //   })
    // }).catch(err => console.log(err))
  }

  render(){
    let {_id} = this.props.match.params
    const language = list.find(lan => lan._id === _id)
    let {name} = language;

    
    return (
      <div>
        <h1 className="langName">{name}</h1>
        <textarea className="textArea" type="text" value={this.state.text} name='text' onChange={this.handleChange} />
        <button className="submit" onClick={() => this.getTranslation(name)}>Submit</button>
        <p className="para">{this.state.idioma}</p>
      </div>
    );
  }
    
};

export default LanguageDetail;