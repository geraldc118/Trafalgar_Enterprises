import React from 'react';
import Header from './Header';
import "../Css/Home.css"
import HEAD_SERVICES from './Head_services';


export default function Home(){
    return( <section>
    <Header />
    <main>
        <section className='home_section'>
        <div className='welcome_container'>
            <h1 className='welcome_title'>Welcome</h1>
            <p>We specialise in shipping container conversions that provide eco-friendly bespoke units to businesses and individuals.</p>
            <p>Non converted containers are also available in different sizes,with price dependant on the age and size of the container.</p>
            <p>For more information on Trafalgar Enterprises can do for you, please send us an enquiry or give us a call.</p>
        </div>
        <div>
            
        </div>
        </section>
        <section id="head_services">
        <HEAD_SERVICES />
        </section>
    
    </main>
    
    </section>
    )
}