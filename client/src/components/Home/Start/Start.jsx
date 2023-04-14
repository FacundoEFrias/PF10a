import React from 'react';
import './Start.css' ;
import Logo from '../../../img/sin-fondo-2085x1251px.png';
import { Link } from 'react-router-dom';

const Start = ()=>{
return(
    <section className='inicio'>
        <div className='video-container'>
          <video src='https://res.cloudinary.com/dberwyxyq/video/upload/v1679686306/SnowPandaCO/FrontEnd/Copia-de-snowboard_zyoy3c.mp4' alt='video' autoPlay muted loop></video>
          <div className='conteiner-text'>
            <img className='logo' src={Logo} />
            <h2>Find your balance, keep up the speed, enjoy the ride.</h2>
            <Link to='/shop'>
              <button className='button-inicio'>SHOP</button>
            </Link>
          </div>
        </div>
      </section>
)
};
export default Start