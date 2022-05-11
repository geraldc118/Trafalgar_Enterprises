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
<<<<<<< HEAD
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
=======
>>>>>>> ef7349e8183f08453630514eca98a167f3d89965
                    <NavLink to="/containers" className="nav-link">Containers</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/enquiry" className="nav-link">Enquire</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </li>
            </ul>


            <div onClick={() => setisClicked(!isClicked)} className={`nav_burger ${isClicked ? 'fas fa-times' : 'fas fa-bars'}`} data-target="navbarBasicExample" href="#navbarBasicExample">

              <div id="navbarBasicExample" className={`nav-menu ${isClicked ? 'nav-menu active' : ''}`}>
                  <ul className="navbar_start">
                  <li>
<<<<<<< HEAD
                      <Link onClick={() => isClicked(!isClicked)} to="/" className="nav-link">Home</Link>
                    </li>
                    <li>
=======
>>>>>>> ef7349e8183f08453630514eca98a167f3d89965
                      <Link onClick={() => isClicked(!isClicked)} to="/containers" className="nav-link">Containers</Link>
                    </li>
                    {/* <li>
                      <Link onClick={() => isClicked(!isClicked)} to="/about" className="nav-link">About</Link>
                    </li> */}
                    <li>
                      <Link onClick={() => isClicked(!isClicked)} to="/enquiry" className="nav-link">Enquire</Link>
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
