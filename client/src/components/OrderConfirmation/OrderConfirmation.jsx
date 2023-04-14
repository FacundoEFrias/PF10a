import './OrderConfirmation.css'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";
import { getAllUsers } from '../../Redux/actions/index'

const today = new Date().toISOString().slice(0,10);

function OrderConfirmation() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const product = JSON.parse(searchParams.get('products'));
    const dispatch = useDispatch()
    let datoos = useSelector(e => e.users)
    const { user, isAuthenticated } = useAuth0();
    
    
    

    
    console.log(product)
    
   let endProduct = null;

    if (product.length >= 1) {
        const separator = " | ";
    const descriptions = product.reduce((accumulator, currentProduct) => {
  return accumulator + currentProduct.description + separator;
}, "");

        endProduct = {
           // id: product[0].id,
            //item: "Products",
            //quantity: 1,
            //date: today,
           // price: product.reduce((total, product) => total + product.price, 0),
           description: descriptions.slice(0, -separator.length),
           // category_id: product.reduce((acc, cur) => {
            //    return acc + (acc !== '' ? ', ' : '') + cur.category;
            //  }, ''),
           // quantity: 1,
            //picture_url: "https://res.cloudinary.com/dberwyxyq/image/upload/v1679686192/SnowPandaCO/FrontEnd/sin_fondo_2085_x_1251_px_am8fvp.png",
           // idUser:1
        }
    }
    
    const handleCreateBill = async () => {
        const users = dispatch(getAllUsers())
        const perfil = datoos.find(obj => obj.email === user.email);

        
        const res = await axios.post('http://localhost:3001/bills/create', {
        item: endProduct.description,
        quantity: product.length,
        date: today,
        price: product.reduce((total, product) => total + product.price, 0),
        idUser: perfil.idUser
        }).then(
            (res)=> 
            (window.location.href = res.data))
       
        };


    return (
       
        <div className='orderConfir'>
            <div>Order Confirmation</div>
            <br></br>
            <p>Thanks for placing an order.-</p>
            <button 
            className='buttonorder' 
            onClick={handleCreateBill }
            >Proceed with payment</button>
        </div>
        
    )
}

export default OrderConfirmation

