import React, { useState} from 'react'
import Form from 'react-bootstrap/Form'
import "../Css/Enquiry.css"
import Button from "react-bootstrap/Button"
import NavBar from "../Components/Navbar"


export default function Enquiry_Form(){

    const[state, setState]=useState({
        fname:"",
        lname:"",
        email:"",
        tel:"",

    })

    const handleSubmit = (e) => {
        alert("Your form has been submitted. We will contact you as soon as possible. Thank you for using Trafalgar Enterprises")
    }

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    return (<section>
    <NavBar/>
        <h1 classname="">Enquire Today For A Quick Repsonse </h1>
        <Form className="enquiry_form" onSubmit={handleSubmit} target="_blank">
        <Form.Label> Enter Your Name:
        <input 
            type="text"
            name="fname"
            value={state.fname}
            placeholder="First"
            onChange={handleChange}
            required
        />
        <input
            type="text"
            name="lname"
            value={state.lname}
            placeholder="Second"
            onChange={handleChange}
            required
        />
        </Form.Label>
        <br/>
        <Form.Label>Email:
            <input
                type="email"
                placeholder="Example123@provider.com"  
                required  
            />
        </Form.Label>
        <br/>
        <Form.Label>Phone Number:
            <input
                type="tel"
                required
            />
        </Form.Label>
        <br/>
        <Form.Label> Container Enquiry:
            <select required>
            <option value="New And Used">New & Used Containers</option>
            <option value="Modified"> Modified Containers</option>
            </select> 
        </Form.Label>
        <br></br>
        <Form.Label> Interior:
            <select>
            <option value="None">None</option>
            <option value="Plywood">Plywood</option>
            <option value="Plasterboard">Plasterboard</option> 
            </select> 
        </Form.Label>
        <Form.Label> Exterior:
            <select classname="">
            <option value="None">None</option>
            <option value="Render"> Render</option>
            <option value="Interior_Lining"> Interior Lining</option>
            </select> 
        </Form.Label>
        <br></br>
        <label controlId="floatingTextarea" label="Comments">
            <Form.Control as="textarea" placeholder="Add more details..." className="add_details"/>
        </label>
        <div className="btn_holder center">
            <Button className="form_button btn-lg" type="submit"> Submit </Button>
        </div>
        </Form>
        </section>
    )
    
}