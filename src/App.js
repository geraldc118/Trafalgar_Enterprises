import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Navbar.js';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Services from './Services.js';


function App() {
  return (<Router>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Footer />
    </Router>

  )
}

export default App;
