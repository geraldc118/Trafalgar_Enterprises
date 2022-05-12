import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from '../Components/Navbar.js';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Containers from '../Components/Containers.js';
import Enquiry from '../Components/Enquiry.js';
import EIGHT_FT_CONTAINER from '../Components/eightFT_Container.js';
import TERMS_CONDITIONS from '../Components/Terms&Conditions.js';



function App() {

  return (  <Router>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/containers" element={<Containers/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/enquiry" element={<Enquiry/>} />
        <Route path="/terms&Conditions" element={<TERMS_CONDITIONS/>} />
        <Route path="/8ft_container" element={<EIGHT_FT_CONTAINER/>} />
    </Routes>
    <Footer />
    </Router>

  )
}

export default App;
