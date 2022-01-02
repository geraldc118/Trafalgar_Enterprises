import React, { useState } from 'react'
import "./Css/Enquiry.css"

export default function Enquiry_Form(){

    const[name, setName] = useState("");

    return (<section>
        <form className="Enquiry">
        <label> Enter Your Name:
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
        </label>
        <br/>
        <label>Email:
            <input
                type="email"
                placeholder="Example123@provider.com"    
            />
        </label>
        <br/>
        <label>Phone Number:
            <input
                type="tel"    
            />
        </label>
        <br/>
        <label> Container Enquiry:
            <select>
            <option value="New And Used">New & Used Shipping Containers</option>
            <option value="Flatpack"> FlatPack Shipping Container</option>
            <option value="Modified"> Modified Shipping Containers</option>
            </select> 
        </label>
        </form>
        </section>
    )
    
}