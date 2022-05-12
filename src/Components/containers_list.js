import React from 'react';
import {Link} from "react-router-dom";
import "../Css/Containers.css"
// import Button from "react-bootstrap/Button"
import Table from "react-bootstrap/Table"

export default function Tablelist(){
    return <section>
        <div>
        <Table>
<tr>
  <th size="" className="table_row_title">Container Sizes</th>
  {/* <th className="table_row_title">New</th> */}
</tr>
<tr>
  <td className="table_info"> 10FT Shipping Container</td>
  <Link to="/10ft_container" className="btn">
</Link>
</tr>
<tr>
  <td className="table_info"> 12FT Shipping Container</td>
  <Link to="/12ft_container" className="btn">
  {/* <td><Button variant="outline-primary">View New & Used</Button></td> */}
</Link>
</tr>
<tr>
  <td className="table_info"> 15FT Shipping Container</td>
  <Link to="/15ft_container" className="btn">
  {/* <td><Button variant="outline-primary">View New & Used</Button></td> */}
</Link>
</tr>
<tr>
  <td className="table_info"> 16FT Shipping Container</td>
  <Link to="/16ft_container" className="btn">
  {/* <td><Button variant="outline-primary">View New & Used</Button></td> */}
</Link>
</tr>
<tr>
  <td className="table_info"> 20FT Shipping Container</td>
  <Link to="/20ft_container" className="btn">
  {/* <td><Button variant="outline-primary">View New & Used</Button></td> */}
</Link>
</tr>
<tr>
  <td className="table_info"> 24FT Shipping Container</td>
  <Link to="/24ft_container" className="btn">
  {/* <td><Button variant="outline-primary">View New & Used</Button></td> */}
</Link>
</tr>
<tr>
  <td className="table_info"> 25FT Shipping Container</td>
  <Link to="/25ft_container" className="btn">
  {/* <td><Button variant="outline-primary">View New & Used</Button></td> */}
</Link>
</tr>
<tr>
  <td className="table_info"> 30FT Shipping Container</td>
  <Link to="/30ft_container" className="btn">
  {/* <td><Button variant="outline-primary">View New & Used</Button></td> */}
</Link>
</tr>
<tr>
  <td className="table_info"> 40FT Shipping Container</td>
  <Link to="/40ft_container" className="btn">
  {/* <td><Button variant="outline-primary">View New & Used</Button></td> */}
</Link>
</tr>
</Table>
            
        </div>
    </section>
}
