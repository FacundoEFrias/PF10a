import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { updateAddres } from '../../Redux/actions';
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux'

function Checkout() {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const products = JSON.parse(searchParams.get('products'));
  const { user, isAuthenticated } = useAuth0();
  const usuarios = useState(user)
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    email: '',
    shippingAddress1: '',
    touched: {
      name: false,
      email: false,
      shippingAddress1: false
    }
  });
  const navigate = useNavigate()
  const errors = {
    name: form.name.length === 0,
    email: form.name.length === 0,
    shippingAddress1: form.shippingAddress1.length === 0,
  };
  const disabled = Object.keys(errors).some((x) => errors[x]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const handleSubmit = e => {
    if (disabled) {
      e.preventDefault()
    
      return;
    }
    navigate('/OrderConfirmation');
  }

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        touched: { ...form.touched, [name]: true }
      }
    })
  }
  const showError = field => errors[field] ? form.touched[field] : false;

  const scrollTop = () => {
    dispatch(updateAddres( user.email ,{ address: form.shippingAddress1}))
    
    window.scroll(0, 0)
  }


  return (
    <form onSubmit={handleSubmit}>
      <CheckoutContainer>
        <CheckoutTitle>Checkout</CheckoutTitle>

        <CheckoutHeader>
          <h4>Your details:</h4>
        </CheckoutHeader>
        <CheckoutHeaderLine />
        <CheckoutTable>
          <CheckoutFormLabel>Name *</CheckoutFormLabel>
          <CheckoutFormInput
            type="text"
            name="name"
            onChange={handleChange}
            placeholder='Enter name'
            invalid={showError('name')}
            onBlur={handleBlur}
          />
          <CheckoutFormLabel>Email *</CheckoutFormLabel>
          <CheckoutFormInput
            type="text"
            name="email"
            onChange={handleChange}
            placeholder='Enter email'
            invalid={showError('email')}
            onBlur={handleBlur}
          />
        </CheckoutTable>
        <CheckoutHeader>
          <h4>Address Details:</h4>
        </CheckoutHeader>
        <CheckoutHeaderLine />

        <CheckoutTable>
          <CheckoutFormLabel>Billing Address</CheckoutFormLabel>
          <CheckoutAddress>
            <input
              type="text"
              name="billingAddress1" />
            <input
              type="text"
              name="billingAddress2" />
            <input
              type="text"
              name="billingCity" />
          </CheckoutAddress>
          <CheckoutFormLabel>Shipping Address *</CheckoutFormLabel>
          <CheckoutAddress>
            <CheckoutFormInput
              type="text"
              name="shippingAddress1"
              onChange={handleChange}
              placeholder='Enter address'
              invalid={showError('shippingAddress1')}
              onBlur={handleBlur}
            />
            <input
              type="text"
              name="shippingAddress2" />
            <input
              type="text"
              name="shippingCity" />
          </CheckoutAddress>
        </CheckoutTable>
        <CancelButton onClick={() => navigate('/ShoppingCart')}>Back to cart</CancelButton>
        <div></div>
        <Link to={`/orderconfirmation?products=${JSON.stringify(products)}`} onClick={() => scrollTop()}>
          <ConfirmButton>Confirm Order</ConfirmButton>
        </Link>
      </CheckoutContainer>
    </form>
  )
}

export default Checkout


const CheckoutContainer = styled.div`
margin-top: 30px;
display: grid;
padding-top: 20px;
grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr 0.25fr 0.5fr;
grid-template-columns: 0.1fr 0.1fr 0.1fr;
`
const CheckoutTable = styled.div`
grid-column: 1 / span 3;
display: grid;
grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
grid-template-columns: 0.1fr 0.4fr 0.1fr 0.4fr;
column-gap: 20px;
padding-left: 10px;
`

const CheckoutHeader = styled.div`
grid-column: 1 /span 3;
padding-top: 20px;
`

const CheckoutHeaderLine = styled.hr`
grid-column:1 /span 3;
margin-bottom: 20px;
border: 1px solid gray;
`

const CheckoutTitle = styled.h2`
grid-column: 1 /span 2;
padding-bottom: 20px;
`

const CheckoutAddress = styled.div`
display: grid;
grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
grid-template-columns: 1fr;
grid-row-gap: 10px;
`

const CheckoutFormLabel = styled.label`
justift-self: end;
`

const CheckoutFormInput = styled.input`
${(props) => props.invalid &&
    `
    border-width:3px;
    border-color: red;
`};
border-style: solid;
`

const CheckoutFormCheckbox = styled.input`
grid-column:2/ span 3;
justift-self: start;
margin-bottom: 20px;
`

const CheckoutButton = styled.button`
margin-bottom: 25px;
border-radius: 8px;
border-radiues: 8px;
height:40 px;
grid-column:3;

&:hover {
    box-shadow: 0 0 0 6px #488cfb;
  }
`

const CancelButton = styled.button`
 margin: 50px;
  border-radius: 8px;
  height: 40px;
    width: 100%;
  padding: 10px 20px;
  background-color: #3d3d3d;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
  background-color: #fff;
  color: #3d3d3d;
  border: 2px solid #3d3d3d;
  }
`


const ConfirmButton = styled.button`
 margin: 50px; 
  border-radius: 8px;
  height: 40px;
  width: 100%;
  padding: 10px 20px;
  background-color: #287094;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
  background-color: #fff;
  color: #3d3d3d;
  border: 2px solid #3d3d3d;
  }
`


