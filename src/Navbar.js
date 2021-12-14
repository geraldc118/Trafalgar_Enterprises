import React,{useState} from 'react';
import './Css/Navbar.css'
import nav_logo from './Images/Trafalgar Enterprises logo.JPG'


export default function Navbar(){
  const[isClicked,setisClicked] = useState(false)
  console.log(isClicked)

    return <section id="navbar_home">
    <header className="header">
        <nav className="navbar">
            <img className="nav_logo_img" src={nav_logo} alt="nav_logo" width="50" height="50"/>
            <a href="/" class="nav-logo">Trafalgar Enterprises.</a>
            <ul className="nav-menu">
                <li className="nav-item">
                    <a href="#about" class="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="#services" class="nav-link">Services</a>
                </li>
              
                <li className="nav-item">
                    <a href="#contact" class="nav-link">Contact</a>
                </li>
            </ul>


            <div onClick={() => setisClicked(!isClicked)} className={`nav_burger ${isClicked ? 'fas fa-times' : 'fas fa-bars'}`} data-target="navbarBasicExample" href="#navbarBasicExample">

              <div id="navbarBasicExample" className={`nav-menu ${isClicked ? 'nav-menu active' : ''}`}>
                  <ul className="navbar_start">
                  <li>
                      <a onClick={() => isClicked(!isClicked)} href="#about" className="nav-link">About</a>
                    </li>
                    <li>
                      <a onClick={() => isClicked(!isClicked)} href="#about" className="nav-link">Services</a>
                    </li>
                    <li>
                      <a onClick={() => isClicked(!isClicked)} href="#about" className="nav-link">Contact</a>
                  </li>
                  </ul>
              </div>
            </div>
        </nav>
</header>
    </section>
}
