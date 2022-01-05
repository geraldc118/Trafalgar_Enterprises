import React, { useState} from 'react'
import Form from 'react-bootstrap/Form'
import "./Css/Enquiry.css"
import Button from "react-bootstrap/Button"

export default function Enquiry_Form(){

    const[name, setName] = useState("");

    return (<section>
        <Form className="Enquiry">
        <Form.Label> Enter Your Name:
        <input 
            type="text"
            value={name}
            placeholder="First"
            onChange={(e) => setName(e.target.value)}
        />
        <input
            type="text"
            value={name}
            placeholder="Second"
            onChange={(e) => setName(e.target.value)}
        />
        </Form.Label>
        <br/>
        <Form.Label>Email:
            <input
                type="email"
                placeholder="Example123@provider.com"    
            />
        </Form.Label>
        <br/>
        <Form.Label>Phone Number:
            <input
                type="tel"
            />
        </Form.Label>
        <br/>
        <Form.Label> Container Enquiry:
            <select>
            <option value="New And Used">New & Used Shipping Containers</option>
            <option value="Flatpack"> FlatPack Shipping Container</option>
            <option value="Modified"> Modified Shipping Containers</option>
            </select> 
        </Form.Label>
        <Form.Label> Interior:
            <select>
            <option value="None">None</option>
            <option value="Plywood">Plywood</option>
            <option value="Plasterboard">Plasterboard</option> 
            </select> 
        </Form.Label>
        <Form.Label> Exterior:
            <select>
            <option value="None">None</option>
            <option value="Render"> Render</option>
            <option value="Interior_Lining"> Interior Lining</option>
            </select> 
        </Form.Label>
        <div className="btn_holder center">
            <Button className="form_button btn-lg" type="submit"> Submit </Button>
        </div>
        </Form>
        </section>
    )
    
}