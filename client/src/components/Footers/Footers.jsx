import React from 'react'
import './Footers.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../Redux/actions';
// import Login from '../Login/Login';

const Footers = () => {
  const location = useLocation();
  const isFixed = location.pathname === '/OrderConfirmation' || location.pathname === '/Checkout' || location.pathname === '/ShoppingCart' || location.pathname === '/Create';
  const dispatch= useDispatch();

  return (
    <footer className="site-footer">
      <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>Customer Service</h6>
          <ul className="footer-links">
            <li><Link to='/FrequentQuestions'>Frequent Questions</Link></li>
            <li><Link to='/Payments'>Payments and Withdrawals</Link></li>
            <li><Link to='/Terms'>Terms and Conditions</Link></li>
            <li><Link to='/PrivacyPolicies'>Privacy Policies</Link></li>
          </ul>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Snow Panda</h6>
          <ul className="footer-links">
            <li><Link to='/Shop'>Shop</Link></li>
            <li><a href="/Shop#categoria">Categories</a></li>
            <li><a href="/Shop#marcas">Brands</a></li>
            <li onClick={()=>dispatch(setCurrentPage(1))}><Link to='/Products/'>All product</Link></li>
          </ul>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Contact</h6>
          <ul className="footer-links">
            <li><a href="/#contacto">Contact Us</a></li>
            <li><a href="/#aboutUs">About Us</a></li>
            <li><Link to='/Members'>Members</Link></li>
          </ul>
        </div>
      </div>
      <hr/>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
        <p >© ALL RIGHTS RESERVED SNOW PANDA COMPANY © 2023 | SNOWPANDA.COM </p>
        </div>

        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li><a className="facebook" ><FaFacebook aria-hidden="true"/></a></li>
            <li><a className="twitter" ><FaInstagram aria-hidden="true"/></a></li>
            <li><a className="dribbble" ><FaLinkedin aria-hidden="true"/></a></li>
            <li><a className="linkedin" ><FaGithubSquare aria-hidden="true" /></a></li>  

 
          </ul>
        </div>
      </div>
    </div>
</footer>
  )
}


export default Footers
