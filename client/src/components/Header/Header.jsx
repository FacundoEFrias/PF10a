import React, { useState } from 'react'
import './Header.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithubSquare, FaUserAlt, FaShoppingCart } from 'react-icons/fa'
import SearchBar from '../SearchBar/SearchBar'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../../img/logoPanda.png';
import Login from '../Login/Login.jsx'
import Logout from '../Logout/Logout.jsx'
import { useAuth0 } from "@auth0/auth0-react";

const Header = ({ navigateToCategory, categories, countProducts }) => {
  const location = useLocation();
  let navigate = useNavigate();


  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div >
        <div></div>
      </div>
    );
  }




  function handleClick() {
    navigate(-1)
  }

  const rutaUrl = window.location.href
  console.log(rutaUrl.includes('Shop'));

  const isProductCategoryPage = categories.some(
    (category) => location.pathname === category.path
  );  

  const scrollTop = () => {
    window.scroll(0, 0)
  }

  return (
    <div className='cntHeader'>
      <Link to={'/'} onClick={() => scrollTop()}>
        <img src={Logo} alt="" className='imgLogo' />
      </Link>
      
      {/* {isProductCategoryPage && <SearchBar categories={categories} />} */}
      <SearchBar categories={categories} />
     

      <Link to={'/Shop'} onClick={() => scrollTop()}>
        <button className={(rutaUrl.includes('Shop')) ? 'btnHome active' : 'btnHome'}>Shop</button>
      </Link>

      <Link to={'/Create'} onClick={() => scrollTop()}>
        <button className={(rutaUrl.includes('Create')) ? 'btnHome active' : 'btnHome'}>Create</button>
      </Link>

      {!isAuthenticated ? <Login /> : 
      <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
      <div class="btn-group" role="group">
      <button
      id="btnGroupDrop1"
      type="button"
      class="btn btn-primary dropdown-toggle"
      data-mdb-toggle="dropdown"
      aria-expanded="false">
       X
      </button>
       <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">  
       <li><a class="dropdown-item" href="/User"><FaUserAlt /></a></li>
       <li><a class="dropdown-item" href="/User">Bills</a></li>
       <li><a class="dropdown-item" href="/User"><Logout /></a></li>
     </ul>
     </div>
     </div>
      }
       
       

{!isAuthenticated ? null : 
      
      <Link to={'/ShoppingCart'}>
      <button className='btnCarrt'>
        <FaShoppingCart />{countProducts}
      </button>
    </Link>
      }   
    </div>
  );
}


export default Header

// (se cambian con condicionales)

// landing/home(sin logear): logo -registro( login)-tienda - iconos redes sociales - corazoncito de favoritos

// landing/home(logeado): logo- mi perfil- registro(logout)- iconos redes sociales - corazon fav.- tienda

// tienda(sin logear): logo- registro- buscador(serchbar)

// tienda(logeado): logo, registro(logout)-carrito-favoritos- busqueda(serchbar)


{/* <div class="btn-group" role="group">
    <button>
      Dropdown
    </button>
    <ul >
      <li><a  href="#">Dropdown link</a></li>
      <li><a  href="#">Dropdown link</a></li>
    </ul>
  </div> */}