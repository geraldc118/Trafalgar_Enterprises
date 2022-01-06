import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Navbar.js';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Containers from './Containers.js';
import Enquiry from './Enquiry.js';
import EIGHT_FT_CONTAINER from './eightFT_Container.js';


function App() {
  return (<Router>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/containers" element={<Containers/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/enquiry" element={<Enquiry/>} />
        <Route path="/8ft_container" element={<EIGHT_FT_CONTAINER/>} />
    </Routes>
    <Footer />
    </Router>

  )
}

export default App;
