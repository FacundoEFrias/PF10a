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
//import { useNavigate } from 'react-router-dom';
import Profile from './components/Profile/Profile.jsx';
import './App.css'
import { useState } from 'react';
import Checkout from "./components/Checkout/Checkout";
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmation";
import Edit from "./components/Manage_Products/Manage_Products"
import ManageProfiles from "./components/Manage_Profiles/Manage_Profiles"
import FormAdminProduct from "./components/FormAdmin/FormAdmin"
import FrequentQ from "./components/Footers/FrequentQ/FrequentQ";
import PagosRetiros from "./components/Footers/PagosRetiros/PagosRretiros";
import Terms from "./components/Footers/Terms/Terms";
import PrivacyPolicies from  './components/Footers/PrivacyPolicies/PrivacyPolicies'



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
          <Route exact path='/' element={<Home setCountProducts={setCountProducts} setAllProducts={setAllProducts} setPriceTotal={setPriceTotal}/>} />
          <Route exact path='/Home' element={<Home />} />
          <Route exact path="/Members" element={<Members />} />
          <Route exact path='/ShoppingCart' element={<ShoppingCart oneProducts={oneProducts} setOneProducts={setOneProducts} allProducts={allProducts} setAllProducts={setAllProducts} priceTotal={priceTotal} setPriceTotal={setPriceTotal}  countProducts={countProducts}  setCountProducts={setCountProducts} />} />
          <Route exact path='/Products/:article' element={<Cards/>}/>
          <Route path= '/User' element={<Profile />} />
         <Route path='/Products/:categoria/:id/Detail' element={<Card oneProducts={oneProducts} setOneProducts={setOneProducts} allProducts={allProducts} setAllProducts={setAllProducts} priceTotal={priceTotal} setPriceTotal={setPriceTotal}  countProducts={countProducts}  setCountProducts={setCountProducts} />} />
         <Route exact path='/Create' element={<Create />} />
         <Route path='/OrderConfirmation' element={<OrderConfirmation />} /> 
         <Route path='/Checkout' element={<Checkout />} />
         <Route exact path='/Products' element={<Cards/>} />
         <Route exact path='/ManageProducts' element={<Edit/>} />
         <Route exact path='/ManageProfiles' element={<ManageProfiles/>} />
         <Route exact path='/FormAdminProduct/:id' element={<FormAdminProduct/>}/>
         <Route exact path='/FrequentQuestions' element={<FrequentQ/>}/>
         <Route exact path="/Payments" element={<PagosRetiros/>}/>
         <Route exact path="/Terms" element={<Terms/>}/>
         <Route exact path="/PrivacyPolicies" element={<PrivacyPolicies/>}/>
        </Routes>
        <Chatbot />
      </div>
      {window.location.pathname !== '/Create' && <Footers />}
    </BrowserRouter>
  );
}

export default App;
