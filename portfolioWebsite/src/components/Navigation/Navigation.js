
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to ="/contact" >Contact</Link>
      <button type='button' >Linkedin</button>
      {/* we can Add more navigation links as needed */}
    </nav>
  );
};

export default Navigation;
