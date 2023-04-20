import React from 'react';
import './AboutUs.css' ;
import { Link } from 'react-router-dom';

const AboutUs = ()=>{
    return(

        <section id='AboutUs' className='pt-5'> 
            <div className='about-us pt-5' id='aboutUs'>

                <h1 className='text-center mt-5 titulos-color'>ABOUT US</h1>
                <h2 className='aboutUsTitle'>¡welcome to <span>Snow Panda</span>!</h2>
                <p className='about-us'>We are a company dedicated to providing the best products for snowboard lovers. From snowboards to boots, bindings and clothing, our goal is to offer our customers a wide range of high-quality products so they can enjoy their favorite sport in comfort and style.</p>
                <h3 className='aboutProyecto'>Learn more about this project</h3>
                <Link to='/Members'>
                    <button className='botonGeneral'>Project</button>
                </Link>
            </div>
        </section>
    )
    };

export default AboutUs