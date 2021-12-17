import React from 'react';
import './Css/Footer.css'

export default function Footer(){
   var year = new Date().getFullYear()
    return <section id="#Footer">
    <div className="footer_container">
    <a href="tel:02086621479"><i className="footer_icon fas fa-phone-alt"></i></a>
    <a href="mailto:@gmail.com"><i className="footer_icon fas fa-envelope"></i></a>
    <a href="https://www.instagram.com/trafalgarenterprises/" target="_blank" rel="noreferrer"><i className="footer_icon fab fa-instagram"></i></a>
    <a href="https://www.twitter.com/guavagrill/" target="_blank" rel="noreferrer"><i className="footer_icon fab fa-twitter"></i></a>
    <p className="footer_text">Copyright Trafalgar Enterprises {year}</p>
    </div>
     
    </section>
}