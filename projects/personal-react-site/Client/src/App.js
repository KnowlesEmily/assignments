import React from 'react';
import NavBar from "./NavBar";
import Home from "./Home"
import Languages from "./Languages";
import LanguageDetail from './LanguageDetail';
import About from "./About";
import "./App.css";
import {Switch, Route} from "react-router-dom"

const App = () => {
  return (
    <div className="background">
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/languages" component={Languages}/>
        <Route path="/about" component={About}/>
        <Route path="/languages/:_id" component={LanguageDetail}/>
      </Switch>
    </div>
  );
};

export default App;