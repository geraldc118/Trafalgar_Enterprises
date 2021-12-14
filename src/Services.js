import React from 'react';
import './Css/Services.css'
import Ten_foot_container from './Images/10_foot_container.jpeg'
import Twenty_foot_container from './Images/20 foot container.jpeg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Services(){
    return <section id="#services" className="services">
    <h1 className="title">Services</h1>
    <div className="services_container">
      <div className="card_info_container" >
      <Card>
          <Card.Img className="logo_img_services" src={Ten_foot_container} alt="Trafalgar Logo"/> 
          <Card.Body>
              <Card.Title variant="primary" className="card_title">Shipping Containers</Card.Title>
              <Card.Text variant="primary" className="card_text">
                New And Used Containers For Sale.
              </Card.Text>
          <Button variant="warning">View</Button>
          </Card.Body>
      </Card>
      <Card>
          <Card.Img className="logo_img_services" src={Twenty_foot_container} alt="Trafalgar Logo"/> 
          <Card.Body>
              <Card.Title variant="primary" className="card_title">Container Conversions</Card.Title>
              <Card.Text variant="primary" className="card_text">
                Pop-up stores,Home gyms, Joining of containers we cater for all your needs.
              </Card.Text>
          <Button variant="primary" className="btn-lg">Order Yours</Button>
          </Card.Body>
      </Card>
      <Card>
          <Card.Img className="logo_img_services" src={Twenty_foot_container} alt="Trafalgar Logo"/> 
          <Card.Body>
              <Card.Title variant="primary" className="card_title">Garden Containers</Card.Title>
              <Card.Text variant="primary" className="card_text">
                
              </Card.Text>
          <Button variant="primary">Order Yours</Button>
          </Card.Body>
      </Card>
      <Card>
          <Card.Img className="logo_img_services" src={Twenty_foot_container} alt="Trafalgar Logo"/> 
          <Card.Body>
              <Card.Title variant="primary" className="card_title">Flatpack Containers</Card.Title>
              
          <Button variant="primary">Order Yours</Button>
          </Card.Body>
      </Card>
      <Card>
          <Card.Img className="logo_img_services" src={Twenty_foot_container} alt="Trafalgar Logo"/> 
          <Card.Body>
              <Card.Title variant="primary" className="card_title">Second Hand Containers</Card.Title>
          <Button variant="primary">Order Yours</Button>
          </Card.Body>
      </Card>
      
      
      </div>

    </div>

    </section>
    
}