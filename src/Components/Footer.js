import React from 'react';
import {Link} from "react-router-dom";
import '../Css/Footer.css'

export default function Footer(){
   var year = new Date().getFullYear()
    return <section id="#Footer">
    <div className="footer_container">
   
    <a href="tel:02086621479"><i className="footer_icon fas fa-phone-alt"></i></a>
    <a href="mailto:info@trafalgarenterprises.com"><i className="footer_icon fas fa-envelope"></i></a>
    <a href="https://www.instagram.com/trafalgarenterprises/" target="_blank" rel="noreferrer"><i className="footer_icon fab fa-instagram"></i></a>
    <a href="https://www.twitter.com/trafalgar_ent/" target="_blank" rel="noreferrer"><i className="footer_icon fab fa-twitter"></i></a>
    <div className="smallPrint_container">
        <Link to="/terms&Conditions">
            <p className="smallPrint_items">Terms & Conditions</p>
        </Link>
        <Link to="/about">
            <p className="smallPrint_items">About</p>
        </Link>
    </div>
    <p className="footer_text">Copyright © {year} Trafalgar Enterprises- All Rights Reserved.</p>
    <p className='footer_text'>Trafalgar Enterprises Ltd Company Number: 14046556</p>
    </div>
    </section>
}