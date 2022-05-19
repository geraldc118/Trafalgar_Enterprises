import React from 'react';
import '../Css/About.css'
import Navbar from '../Components/Navbar';

export default function About(){
    return <section id="About">
     <Navbar/>
        <h2 className="about_title">About</h2>   
      <div className="about_container">
          <p className="about_content">
          We provide high class new & old bespoke designs on shipping containers.
          </p>
      </div> 

    </section>
}
