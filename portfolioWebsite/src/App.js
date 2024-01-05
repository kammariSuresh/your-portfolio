// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About'
import Navigation from './components/Navigation/Navigation';
import ProjectView from './components/ProjectView/ProjectView';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path = "/about" element={<About/>} />
        <Route path="/projects" element={<ProjectView />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home/>} />
      </Routes>
      
    </Router>
  );
};

export default App;
