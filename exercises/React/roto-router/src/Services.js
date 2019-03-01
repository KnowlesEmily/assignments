import React from 'react';
import './App.css';
import {Link, Switch, Route} from 'react-router-dom';
import list from './products.json'
import Product from './Products'

const Services = () => {
  const mappedServices = list.map(product => <Link key={product._id} to={`/services/${product._id}`}>{product.name}</Link>)

  return (
    <div className="services">
      <div className="fade">
      <h1>Holy Shaq's Services</h1>
        <h3>Ser mar ver mis ocho hijo nada cien cuna</h3>
        <div className="options">
          {mappedServices}
        </div>
        <Switch>
          <Route path="/services/:_id" component={Product}/>
        </Switch>
      </div>
      
    </div>
  );
};

export default Services;