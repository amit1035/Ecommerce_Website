// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Category from './components/Category/Category';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Banner from './components/Banner/Banner';
import Features from './components/Features/Features';
import About from './components/About/About';

const Home = () => {
  return (
    <div>
      <Category />
      <Features />
      <Banner />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/features" element={<Features />} />
          <Route path='/About' element={<About/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
