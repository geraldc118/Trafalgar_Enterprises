import React from 'react';
import '../Css/Contact.css'
// import Enquiry from "./Enquiry"


export default function Contact(){
    return <section id="#Contact">
    <h1 className="contact_title">Contact Us</h1>
    <div className="contact_container">
    <div className="center">
    <p>Better yet, see us in person.</p>
    <p>We love our customers, so feel free to call or email during normal business hours.</p>
    <h2>Trafalgar Enterprises</h2>
    <div className='open_hours'>
    <h3>Open Hours</h3>
    <ul>
        <li className='list_hours'>Mon 09:00-17:00</li>
        <li className='list_hours'>Tue 09:00-17:00</li>
        <li className='list_hours'>Wed 09:00-17:00</li>
        <li className='list_hours'>Thu 09:00-17:00</li>
        <li className='list_hours'>Fri 09:00-17:00</li>
        <li className='list_hours'>Sat 10:00-18:00</li>
        <li className='list_hours'>Sun Closed </li>
    </ul>

    </div>
    <p>TEl: 07508460413</p>
    <p>Email: info@trafalgarenterprises.com</p>
    <p></p>
    </div>

    </div>

    {/* <h2 className='contact_title'>Enquire</h2>
    <div className="enquiry_container">\
    <h3>Enquire Today And We Will Contact You As Soon As Possible.</h3>
    {<Enquiry/>}
    </div> */}
    </section>
} 