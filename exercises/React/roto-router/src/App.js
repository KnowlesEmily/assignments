import React from 'react';
import Home from 'home';
import About from 'about';
import Services from 'services';
import Navbar from 'navbar';

const App = () => {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/services" component={Services}/>
      </Switch>

      <Footer />
    </div>
  );
};

export default App;