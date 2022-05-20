import React from 'react';
import '../Css/Head_services.css'
import shipping_container from '../Images/shipping_container.jpg'
import modified_container from '../Images/modified_container1.jpg'
import Card from 'react-bootstrap/Card'


export default function Services(){
    return <section id="#head_services" className="head_services">
    <div className="services_container">
      <div className="card_info_container" >
      <Card id="#shipping_containers"className='card'>
      <h1 className="head_title">Services</h1>
          <Card.Img className="img-fluid logo_img_services" src={shipping_container} alt="Trafalgar Logo"/> 
          <Card.Body>
              <Card.Title variant="primary" className="card_title">Shipping Containers</Card.Title>
              <Card.Text variant="primary" className="card_text">
              New & Used 10FT - 40FT Containers Available. Also including Shipping Container Conversions. Trafalgar Enterprises will fulfil your requirements.
              </Card.Text>
          <a href='/Containers' className="btn btn-primary btn-lg">View container sizes</a>
          </Card.Body>
      </Card>
       <Card id="#modified_containers">
          <Card.Img className="img-fluid logo_img_services" src={modified_container} alt="Trafalgar Logo"/> 
          <Card.Body>
              <Card.Title variant="primary" className="card_title">Container Conversions</Card.Title>
              <Card.Text variant="primary" className="card_text">
              Canteens, Swimming Pools, Gyms, Stalls, Homes, Refrigerators, Locker Rooms, First Aid Units Toilets, Kitchens, Toilets, Bike Stores, Outside Furniture Store, Safe & Secure Storage. 
              </Card.Text>
              <Card.Text variant="primary" className="card_text">
              Anything that can be made from shipping container conversions. Trafalgar Enterprises is your one stop shop.
              </Card.Text>
              <a href="/Containers" className="btn btn-primary btn-lg" role="button">View container sizes</a>
          </Card.Body>
      </Card> 
      </div>

    </div>

    </section>
    
}