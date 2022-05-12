import React from 'react';
import '../Css/Head_services.css'
import Ten_foot_container from '../Images/10_foot_container.jpeg'
import Twenty_foot_container from '../Images/20 foot container.jpeg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Services(){
    return <section id="#head_services" className="head_services">
    <h1 className="head_title">Services</h1>
    <div className="services_container">
      <div className="card_info_container" >
      <Card className='card'>
          <Card.Img className="logo_img_services" src={Ten_foot_container} alt="Trafalgar Logo"/> 
          <Card.Body>
              <Card.Title variant="primary" className="card_title">Shipping Containers</Card.Title>
              <Card.Text variant="primary" className="card_text">
              New & Used 10FT - 40FT Containers Available. Also including Shipping Container Conversions. Trafalgar Enterprises will fulfil your requirements.
              </Card.Text>
          <Button variant="primary" className="btn-lg">View container sizes</Button>
          </Card.Body>
      </Card>
       <Card>
          <Card.Img className="logo_img_services" src={Twenty_foot_container} alt="Trafalgar Logo"/> 
          <Card.Body>
              <Card.Title variant="primary" className="card_title">Container Conversions</Card.Title>
              <Card.Text variant="primary" className="card_text">
              Canteens, Swimming Pools, Gyms, Stalls, Homes, Refrigerators, Locker Rooms, First Aid Units Toilets, Kitchens, Toilets, Bike Stores, Outside Furniture Store, Safe & Secure Storage. Anything that can be made from shipping container conversions. Trafalgar Enterprises is your one stop shop.
              </Card.Text>
          <Button variant="primary" className="btn-lg">View container sizes</Button>
          </Card.Body>
      </Card> 
      {/* <Card>
          <Card.Img className="logo_img_services" src={Twenty_foot_container} alt="Trafalgar Logo"/> 
          <Card.Body>
              <Card.Title variant="primary" className="card_title">Garden Containers</Card.Title>
              <Card.Text variant="primary" className="card_text">
                Bike Stores, Outside Furniture Store, Safe & Secure Storage.
              </Card.Text>
          <Button variant="primary" className="btn-lg">Order Yours</Button>
          </Card.Body>
      </Card>
      <Card>
          <Card.Img className="logo_img_services" src={Twenty_foot_container} alt="Trafalgar Logo"/> 
          <Card.Body>
              <Card.Title variant="primary" className="card_title">Flatpack Containers</Card.Title>
              <Card.Text variant="primary" className="card_text">
                  Easy To Assemble Flat Pack Containers Available For All Uses.
              </Card.Text>
          <Button variant="primary" className="btn-lg">Order Yours</Button>
          </Card.Body>
      </Card>  */}
      {/* <Card>
          <Card.Img className="logo_img_services" src={Twenty_foot_container} alt="Trafalgar Logo"/> 
          <Card.Body>
              <Card.Title variant="primary" className="card_title">Second Hand Containers</Card.Title>
          <Button variant="primary">Order Yours</Button>
          </Card.Body>
      </Card> */}
      
      
      </div>

    </div>

    </section>
    
}