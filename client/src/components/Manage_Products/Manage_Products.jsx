import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./Manage_Products.css";
import {
  getAllProducts,
  setBannedProduct,
  setFeaturedProduct,
} from "../../Redux/actions/index.js";

import FormAdmin from "../FormAdmin/FormAdmin";


const FormCreatePoke = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allProducts = useSelector((e) => e.allProducts);
  const[editForm, setEditForm] = useState(false)

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleBannedProduct = (e) => {
    console.log(e, "salio el Ban");
    dispatch(setBannedProduct(e));
    navigate(0);
  };

  const handleFeaturedProduct = (e) => {
    console.log(e, "la merda");
    dispatch(setFeaturedProduct(e));
    navigate(0);
  };
  const scrollTop = () => {
    window.scroll(0, 0)
  }

  console.log(allProducts, "all");

  try {
    return (
      <div className="all_background">
        <div className="all_filter">
        
          <div >
            <Link to={"/Create"} onClick={() => scrollTop()}>
              <button className="create_btn">
                Create new product
              </button>
            </Link>
          </div>
         
        </div>
        <div className="dropdown ms-3">
          {allProducts ? (
            allProducts
              ?.sort((a, b) => a.productsID - b.productsID)
              .map((e) => (
                <div className="container_manager">
                  <section className={e.status ? "card_" : "mariela"}>
                    <div className="product-image">
                      <img
                        className="img_"
                        src={e.img}
                        alt="OFF-white Red Edition"
                        draggable="false"
                      />
                    </div>
                    <div className="product-info">
                      <h2>{e.name}</h2>
                      <p>Category: {e.category}</p>
                      <p>Brand: {e.brand.brandName}</p>

                      <div className="price">${e.price}</div>
                    </div>
                    <div className="btn_">
                      
                    
                      
                      <button value={e.productsID} className="buy-btn">
                      <Link to= {`/FormAdminProduct/${e.productsID}`}>
                        Edit Now
                      </Link>
                        
                        
                        
                        </button>

                      {e.status ? (
                        <button
                          className={!e.featuredProduct ? "fav" : "featured"}
                          onClick={() => handleFeaturedProduct(e.productsID)}
                        >
                          <svg
                            className="svg"
                            id="i-star"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            stroke="#000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                          >
                            <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
                          </svg>
                        </button>
                      ) : null}

                      {e.status ? (
                        <button
                          className="fav"
                          onClick={() => handleBannedProduct(e.productsID)}
                        >
                          <AiFillEye className="svg_eyes" color="#08c46b" />
                        </button>
                      ) : (
                        <button
                          className="fav"
                          onClick={() => handleBannedProduct(e.productsID)}
                        >
                          <AiOutlineEyeInvisible
                            className="svg_eyes_disabled"
                            color="#08c46b"
                          />
                        </button>
                      )}
                    </div>
                  </section>
                </div>
              ))
          ) : (
            <div>Loading ... </div>
          )}
        </div>
      </div>
    );
  } catch (err) {
    console.log(err);
  }
};

export default FormCreatePoke;
