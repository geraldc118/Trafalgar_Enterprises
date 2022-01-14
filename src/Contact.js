import React from 'react';
import './Css/Contact.css'
import Enquiry from "./Enquiry"


export default function Contact(){
    return <section id="#Contact">
    <div className="contact_container">
    <div className="center">
    <h1 className="contact_title">Contact Us</h1>
    <p>Post Address:</p>
    <p>57 Grange House</p>
    <p>Erith</p>
    <p>Kent</p>
    <p>DA8 2DZ</p>
    <p>TEl: 07508460413</p>
    <p>Email: Trafalgar_Enterprises@gmail.com</p>
    </div>
    </div>
    <div className="enquiry_container">
    <h3>Enquire Today And We Will Contact You As Soon As Possible.</h3>
    {<Enquiry/>}
    </div>

    </section>
} 