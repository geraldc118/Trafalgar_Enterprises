import React from 'react';
import '../Css/Header.css';
import NavBar from "../Components/Navbar"
// import logo_img from '../Images/Trafalgar Enterprises logo.JPG';


function Header() {
  return (<section>
   <NavBar />
   <div className="header_container">
      <header className=''>
      <div className='container'>
        <div className="head_info_container">
          <h1 className="header_title">Trafalgar Enterprises</h1>
          <div className='head_text'>
            <p className='head_text'>A HOME FOR EVERYONE.... MAKING YOUR SHIPPING CONTAINER CONVERSIONS REALITY.</p>
            </div>
          <div className='btn_container'>
          <a href="/Containers" className="btn btn-primary btn-lgn head_button" role="button">View Containers</a>
          </div>
          </div>
        </div>
        
          <div className="container">
            <i className="header_icon fas fa-phone-alt"></i><a className="head_info" href="tel:02086621479">Tel:02086621479</a>
            <i className="header_icon fas fa-envelope"></i><a className="head_info" href="mailto:info@trafalgerenterprises.com@gmail.com">Email:info@trafalgerenterprises.com@gmail.com</a>
          </div>

      </header>
    </div>
    </section>
  );
}


export default Header;