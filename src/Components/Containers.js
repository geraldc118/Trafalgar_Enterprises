import React from 'react';
import {Link} from "react-router-dom";
import "../Css/Containers.css"
import Button from "react-bootstrap/Button"
import shipping_image from "../Images/10_foot_container.jpeg"
import modified_image from "../Images/20 foot container.jpeg"
import NavBar from "../Components/Navbar"


export default function Containers(){
    return(<section>
    <NavBar/>
    <h1 className="title">Available Containers</h1>
    <Link to="/enquiry" className="btn btn-warning">
      <Button variant="warning" className="enquiry_btn" onClick="/enquiry">Make An Enquiry</Button>
    </Link>
    <div className="services_container">
      <div className='shipping'>
      <h2>Shipping Containers</h2>
      <img className='service_image' src={shipping_image} alt='shipping'/>
      <p>If you are looking for an 10FT-40FT container. We provide safe and secure new and old containers.</p>
      <p>Delivery of containers can be organised with further details. For price ranges please feel free to contact us.</p>
      </div>
      <div className='modified'>
      <h2>Modified Containers</h2>
      <img className='service_image' src={modified_image} alt='shipping'/>
      <p>Personalise your containers with windows, doors, seating, flooring, render, cladding you name it when can normally source it. </p>
      <p>We aim to bring your design to life to fit the needs for our clients.</p>
      


</div>


    </div>
    </section>
    )
    
}