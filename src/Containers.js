import React from 'react';
import {Link} from "react-router-dom";
import "./Css/Containers.css"
import Button from "react-bootstrap/Button"
import Table from "react-bootstrap/Table"


export default function Containers(){
    return(<section>
    <h1 className="title">Available Containers</h1>
    <Link to="/enquiry" className="btn btn-warning">
    <Button variant="warning" className="enquiry_btn" onClick="/enquiry">Make An Enquiry</Button>
    </Link>
    <div className="container">
  <Table>
  <tr>
    <th size="" className="table_row_title">Container Size</th>
    <th className="table_row_title">New</th>
    {/* <th className="table_row_title">Used</th> */}
  </tr>
  <tr>
    <td className="table_info"> 8FT Shipping Container</td>
    <Link to="/8ft_container" className="btn">
    <Button variant="outline-primary">View New & Used</Button> 
    </Link>
  </tr>
  <tr>
    <td className="table_info"> 10FT Shipping Container</td>
    <Link to="/10ft_container" className="btn">
    <td><Button variant="outline-primary">View New & Used</Button></td>
    {/* <td><Button variant="outline-primary">View Used</Button></td> */}
  </Link>
  </tr>
  <tr>
    <td className="table_info"> 12FT Shipping Container</td>
    <Link to="/12ft_container" className="btn">
    <td><Button variant="outline-primary">View New & Used</Button></td>
    {/* <td><Button variant="outline-primary">View Used</Button></td> */}
  </Link>
  </tr>
  <tr>
    <td className="table_info"> 15FT Shipping Container</td>
    <Link to="/15ft_container" className="btn">
    <td><Button variant="outline-primary">View New & Used</Button></td>
    {/* <td><Button variant="outline-primary">View Used</Button></td> */}
  </Link>
  </tr>
  <tr>
    <td className="table_info"> 16FT Shipping Container</td>
    <Link to="/16ft_container" className="btn">
    <td><Button variant="outline-primary">View New & Used</Button></td>
    {/* <td><Button variant="outline-primary">View Used</Button></td> */}
  </Link>
  </tr>
  <tr>
    <td className="table_info"> 20FT Shipping Container</td>
    <Link to="/20ft_container" className="btn">
    <td><Button variant="outline-primary">View New & Used</Button></td>
    {/* <td><Button variant="outline-primary">View Used</Button></td> */}
  </Link>
  </tr>
  <tr>
    <td className="table_info"> 24FT Shipping Container</td>
    <Link to="/24ft_container" className="btn">
    <td><Button variant="outline-primary">View New & Used</Button></td>
    {/* <td><Button variant="outline-primary">View Used</Button></td> */}
  </Link>
  </tr>
  <tr>
    <td className="table_info"> 25FT Shipping Container</td>
    <Link to="/25ft_container" className="btn">
    <td><Button variant="outline-primary">View New & Used</Button></td>
    {/* <td><Button variant="outline-primary">View Used</Button></td> */}
  </Link>
  </tr>
  <tr>
    <td className="table_info"> 30FT Shipping Container</td>
    <Link to="/30ft_container" className="btn">
    <td><Button variant="outline-primary">View New & Used</Button></td>
    {/* <td><Button variant="outline-primary">View Used</Button></td> */}
  </Link>
  </tr>
  <tr>
    <td className="table_info"> 40FT Shipping Container</td>
    <Link to="/40ft_container" className="btn">
    <td><Button variant="outline-primary">View New & Used</Button></td>
    {/* <td><Button variant="outline-primary">View Used</Button></td> */}
  </Link>
  </tr>
  <tr>
    <td className="table_info"> 45FT Shipping Container</td>
    <Link to="45ft_container" className="btn">
    <td><Button variant="outline-primary">View New & Used</Button></td>
    {/* <td><Button variant="outline-primary">View Used</Button></td> */}
  </Link>
  </tr>
</Table>
    </div>
<<<<<<< HEAD
    {/* <div className="other_containers">
=======
    <div className="other_containers">
>>>>>>> ef7349e8183f08453630514eca98a167f3d89965
        <div className="flatpack_container">
        <i class="fas fa-box-open"></i><h1>Flatpack Containers</h1>
            <ul className="container_list">
              <li>Chemical Storage</li>
              <li>Offices</li>
              <li>Garden Offices</li>
              <li>Flatpack Storage Containers</li>
            </ul>
        </div>
        <div className="newbuild_container">
        <i class="fas fa-hammer"></i><h1>New Build Containers</h1>
            <ul className="container_list">
              <li>Garage Containers</li>
              <li>Extra Wide Containers</li>
              <li>Narrow Containers</li>
              <li>Flatpack Storage Containers</li>
              <li>Chemical Storage</li>
            </ul>
        </div>
        <div className="modified_container">
        <i class="fas fa-shapes"></i><h1>Modified Containers</h1>
            <ul className="container_list">
              <li>Biomass Containers</li>
              <li>Chemical Storage Containers</li>
              <li>Cladded Containers</li>
              <li>Classroom Containers</li>
              <li>Container Conversions</li>
              <li>Container Offices</li>
              <li>Container Extras</li>
              <li>Garden Containers</li>
              <li>Linked Containers</li>
              <li>Ply Lined Containers</li>
              <li>Pop-Up Containers</li>
              <li>Side Door Containers</li>
              <li>Toilet Containers</li>
              <li>Workshop Containers</li>
            </ul>
        </div>


<<<<<<< HEAD
    </div> */}
=======
    </div>
>>>>>>> ef7349e8183f08453630514eca98a167f3d89965

    </section>
    )
    
}