import React from 'react';
import "../Css/eightFT_container.css";
import eightFT_Container_img from "../Images/10_foot_container.jpeg"

export default function EIGHT_FT_CONTAINER(){
        return (<section>
            <div className="eightFT_container">
                <h3 className="container_title">8FT Containers</h3>
            </div>
            <div id="#new" className="new_container">
                <div className="eightFT_img_container">
                <img src={eightFT_Container_img} alt="eightFT_img" className="eightFt_img"/> 
                <br></br>
                <div className="eightFT_text_container">
                    <p>These 8 Foot containers will be available for purchase for the price of 22 naira</p> 
                    <p>This is next to nothing in this economy</p> 
                </div>  
                </div>

            </div>
            
            <div id="#used" className="used_container">
            <div className="eightFT_img_container">
                <img src={eightFT_Container_img} alt="eightFT_img" className="eightFt_img"/> 
                <p>These 8 Foot containers will be available for purchase for the price of 22 naira</p> 
                <p>This is next to nothing in this economy</p>   
                </div>
            </div>
            </section>
            )
    }