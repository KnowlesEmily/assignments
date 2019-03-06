import React from 'react';
import {Link} from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="nav">
      <Link className="linkHome" to="/">Home</Link>
      <Link className="linkHome" to="/languages">Languages</Link>
      <Link className="linkHome" to="/about">About</Link>
    </div>
  );
};

export default NavBar;