import React from 'react';
import { BrowserRouter } from "react-router-dom"
import Navbar from './Navbar.js';
import Header from './Header';
// import About from './About';
// import Contact from './Contact';
import Footer from './Footer';
import Services from './Services.js';


// var express = require('express')
// var app = express()
// {
// app.get('/', function(req,res){
//     res.send('hello World')
// })

// app.get('/services', function(req,res){
//   res.send('services')
// })

function App() {
  return (<BrowserRouter>
    <Navbar />
    <Header />
    <Services />
    {/* <About />
    <Contact /> */}
    <Footer />
    </BrowserRouter>
  )
}

export default App;
