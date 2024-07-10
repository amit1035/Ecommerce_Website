// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Category from './components/Category/Category';

import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Login from './components/Login/Login';
import Banner from './components/Banner/Banner';
import Features from './components/Features/Features';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path ="/Login" element={<Login/> } />
          <Route path="/Banner" element={<Banner/>} />
          <Route path="/Features" element={<Features/>} />
          

        </Routes>
        <Category />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
