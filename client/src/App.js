import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footers from './components/Footers/Footers';
import Members from "./components/Members/Members";
import Tienda from './components/tiendaCategorias/Tienda'
import Chatbot from './components/Chatbot/Chatbot.jsx'
import Cards from "./components/Cards/Cards";
import Card from "./components/Card/Card";
import Create from "./components/Create/Create";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { useNavigate } from 'react-router-dom';
import Profile from './components/Profile/Profile.jsx';
import './App.css'
import { useState } from 'react';
import Checkout from "./components/Checkout/Checkout";
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmation";
axios.defaults.baseURL = "pf10a-production.up.railway.app"




function App() {

  const navigateToCategory = (category) => {
  navigate(`/${category}`);
};


    const categories = [
    { name: 'Board', path: '/Board' },
    { name: 'Boots', path: '/Boots' },
    { name: 'Jackets', path: '/Jackets' },
    { name: 'Pants', path: '/Pants' },
    { name: 'Tshirts', path: '/Tshirts' },
    { name: 'Accesories', path: '/Accesories' },
  ];

const [allProducts, setAllProducts] = useState([]);
const [oneProducts, setOneProducts] = useState([]);
  const [priceTotal, setPriceTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(0)
  


  return (
    <BrowserRouter>
      <Header categories={categories} navigateToCategory={navigateToCategory} countProducts={countProducts} />
      <Routes>
        <Route exact path='/Shop' element={<Tienda />} />
      </Routes>
      <div className='App container'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Home' element={<Home />} />
          <Route exact path="/Members" element={<Members />} />
          
          <Route exact path='/ShoppingCart' element={<ShoppingCart oneProducts={oneProducts} setOneProducts={setOneProducts} allProducts={allProducts} setAllProducts={setAllProducts} priceTotal={priceTotal} setPriceTotal={setPriceTotal}  countProducts={countProducts}  setCountProducts={setCountProducts} />} />

          <Route exact path='/Products/:article' element={<Cards/>}/>

          {/* <Route exact path='/Board' element={<Cards categoria='board' path='/Board' />} />
          <Route exact path='/Boots' element={<Cards categoria='boots' path='/Boots' />} />
          <Route exact path='/Jackets' element={<Cards categoria='jackets' path='/Jackets' />} />
          <Route exact path='/Pants' element={<Cards categoria='pants' path='/Pants' />} />
          <Route exact path='/t-shirts' element={<Cards categoria='t-shirts' path='/t-shirts' />} />
          <Route exact path='/Accesories' element={<Cards categoria='accessories' path='/Accesories' />} />

          <Route exact path='/SnowPandaCo' element={<Cards categoria='SnowPandaCo' path='/SnowPandaCo' />} />
          <Route exact path='/Burton' element={<Cards categoria='Burton' path='/Burton' />} />
          <Route exact path='/Nitro' element={<Cards categoria='Nitro' path='/Nitro' />} />
          <Route exact path='/K2' element={<Cards categoria='K2' path='/K2' />} />
          <Route exact path='/Rossignol' element={<Cards categoria='Rossignol' path='/Rossignol' />} />
          <Route exact path='/Lib Tech' element={<Cards categoria='Lib Tech' path='/Lib Tech' />} />
          <Route exact path='/Arbor' element={<Cards categoria='Arbor' path='/Arbor' />} />
          <Route exact path='/Capita' element={<Cards categoria='Capita' path='/Capita' />} />
          <Route exact path='/Gnu' element={<Cards categoria='Gnu' path='/Gnu' />} />
          <Route exact path='/Jones' element={<Cards categoria='Jones' path='/Jones' />} />
          <Route exact path='/Rome' element={<Cards categoria='Rome' path='/Rome' />} /> */}

          <Route path= '/User' element={<Profile />} />
          
         <Route path='/Products/:categoria/:id/Detail' element={<Card oneProducts={oneProducts} setOneProducts={setOneProducts} allProducts={allProducts} setAllProducts={setAllProducts} priceTotal={priceTotal} setPriceTotal={setPriceTotal}  countProducts={countProducts}  setCountProducts={setCountProducts} />} />
         <Route exact path='/Create' element={<Create />} />
         <Route path='/OrderConfirmation' element={<OrderConfirmation />} /> 
         <Route path='/Checkout' element={<Checkout />} />
         <Route exact path='/Products' element={<Cards/>} />

        </Routes>
        <Chatbot />
      </div>
      {window.location.pathname !== '/Create' && <Footers />}
    </BrowserRouter>
  );
}

export default App;
