import React from 'react';
import '../Css/Header.css';
import logo_img from '../Images/Trafalgar Enterprises logo.JPG';


function Header() {
  return (<section>
   <div className="header_container">
      <main className="header">
        <div>
          <img className="logo_img" src={logo_img} alt="logo_img"/>
        </div>
        <div className="head_info_container">
          <h1 className="header_title">Trafalgar Enterprises</h1>
          <div className="centered">
          <i className="header_icon fas fa-phone-alt"></i><a className=" head_info" href="tel:02086621479">Tel:02086621479</a>
          <i className="header_icon fas fa-envelope"></i><a className=" head_info" href="mailto:@gmail.com">Email:Trafalgarenterprises@gmail.com</a>
          </div>
        </div>
      </main>
    </div>
    </section>
  );
}


export default Header;