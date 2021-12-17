import React,{useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Css/Navbar.css'
import nav_logo from './Images/Trafalgar Enterprises logo.JPG'


export default function Navbar(){
  const[isClicked,setisClicked] = useState(false)
  console.log(isClicked)

    return <section id="navbar_home">
    <header className="header">
        <nav className="navbar">
            <img className="nav_logo_img" src={nav_logo} alt="nav_logo" width="50" height="50"/>
            <NavLink to="/" exact className="nav-logo">Trafalgar Enterprises.</NavLink>
            <ul className="nav-menu">
                <li className="nav-item">
                    <NavLink to="/about" class="nav-link">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/services" class="nav-link">Services</NavLink>
                </li>
              
                <li className="nav-item">
                    <NavLink to="/contact" class="nav-link">Contact</NavLink>
                </li>
            </ul>


            <div onClick={() => setisClicked(!isClicked)} className={`nav_burger ${isClicked ? 'fas fa-times' : 'fas fa-bars'}`} data-target="navbarBasicExample" href="#navbarBasicExample">

              <div id="navbarBasicExample" className={`nav-menu ${isClicked ? 'nav-menu active' : ''}`}>
                  <ul className="navbar_start">
                  <li>
                      <Link onClick={() => isClicked(!isClicked)} to="/about" className="nav-link">About</Link>
                    </li>
                    <li>
                      <Link onClick={() => isClicked(!isClicked)} to="/services" className="nav-link">Services</Link>
                    </li>
                    <li>
                      <Link onClick={() => isClicked(!isClicked)} to="/contact" className="nav-link">Contact</Link>
                  </li>
                  </ul>
              </div>
            </div>
        </nav>
</header>
    </section>
}
