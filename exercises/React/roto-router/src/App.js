import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Navbar from './Navbar';
import Footer from './Footer';
import Product from './Products';
import './App.css';
import {Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/services" component={Services}/>
        {/* <Route path="/services/:_id" component={Product} /> */}
      </Switch>

      <Footer />
    </div>
  );
};

export default App;