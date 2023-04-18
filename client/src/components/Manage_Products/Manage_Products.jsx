import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./Manage_Products.css";
import {
  getAllProducts,
  setBannedProduct,
  setFeaturedProduct,
  stockProducts,
} from "../../Redux/actions/index.js";

import FormAdmin from "../FormAdmin/FormAdmin";

const FormCreatePoke = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allProducts = useSelector((e) => e.allProducts);
  const [editForm, setEditForm] = useState(false);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleBannedProduct = (e) => {
    console.log(e, "salio el Ban");
    dispatch(setBannedProduct(e));
    navigate(0);
  };

  async function decrementStock(product, sizeSelected) {
    const productToReStock = allProducts.find((p) => p.productsID === product.productsID);
    const sizeToUpdate =
      productToReStock.sizes !== null
        ? productToReStock.sizes.find((p) => p === sizeSelected)
        : productToReStock.numbersizes !== null
          ? productToReStock.numbersizes.find((p) => p === sizeSelected)
          : productToReStock.boardsizes !== null
            ? productToReStock.boardsizes.find((p) => p === sizeSelected)
            : null;
    const actualStock = sizeToUpdate.stock;
    if (sizeToUpdate) {
      sizeToUpdate.stock = actualStock - 1;
      await dispatch(stockProducts(product));
      await dispatch(getAllProducts());
    }
  }
  async function incrementStock(product, sizeSelected) {
    const productToReStock = allProducts.find((p) => p.productsID === product.productsID);
    const sizeToUpdate =
      productToReStock?.sizes !== null
        ? productToReStock.sizes.find((p) => p === sizeSelected)
        : productToReStock?.numbersizes !== null
          ? productToReStock.numbersizes.find((p) => p === sizeSelected)
          : productToReStock?.boardsizes !== null
            ? productToReStock.boardsizes.find((p) => p === sizeSelected)
            : null;
    const actualStock = sizeToUpdate.stock;
    if (sizeToUpdate) {
      sizeToUpdate.stock = actualStock + 1;
      await dispatch(stockProducts(product));
      await dispatch(getAllProducts());
    }
  }

  const handleFeaturedProduct = (e) => {
    console.log(e, "la merda");
    dispatch(setFeaturedProduct(e));
    navigate(0);
  };
  const scrollTop = () => {
    window.scroll(0, 0);
  };

  try {
    return (
      <div className="all_">

        <div className="_filter">
          <div>
            <Link to={"/Create"} onClick={() => scrollTop()}>
              <button className="crt_btn">Create new product</button>
            </Link>
          </div>
        </div>

        <div className="cart_manager">
          {allProducts ? (
            allProducts
              ?.sort((a, b) => a.productsID - b.productsID)
              .map((e) => (
                <div className="_cardCont">
                  <section className={e.status ? "_card" : "of_cart"}>
                    <div className="-imageproduct">
                      <img
                        className="_img"
                        src={e.img}
                        alt="OFF-white Red Edition"
                        draggable="false"
                      />
                    </div>
                    <div className="-infoproduct">
                      <h2>{e.name}</h2>
                      <p>Category: {e.category}</p>
                      <p>Brand: {e.brand.brandName}</p>

                      <div className="price_">${e.price}</div>
                    </div>

                    {/* <div className="btn_">
                      <div className="trying">
                        <h1>Stock</h1>
                        <h2>
                          {e.sizes !== null
                            ? e.sizes.map((s) => {
                              return (
                                <div>
                                  <h1>{s.size}</h1>
                                  <button
                                    onClick={() => decrementStock(e, s)}
                                  >
                                    -
                                  </button>
                                  <h2>{s.stock}</h2>
                                  <button
                                    onClick={() => incrementStock(e, s)}
                                  >
                                    +
                                  </button>
                                </div>
                              );
                            })
                            : e.boardsizes !== null
                              ? e.boardsizes.map((b) => {
                                return (
                                  <div>
                                    <h1>{b.size}</h1>
                                    <button
                                      onClick={() => decrementStock(e, b)}
                                    >
                                      -
                                    </button>
                                    <h2>{b.stock}</h2>
                                    <button
                                      onClick={() => incrementStock(e, b)}
                                    >
                                      +
                                    </button>{" "}
                                  </div>
                                );
                              })
                              : e.numbersizes !== null
                                ? e.numbersizes.map((n) => {
                                  return (
                                    <div>
                                      <h1>{n.size}</h1>
                                      <button
                                        onClick={() => decrementStock(e, n)}
                                      >
                                        -
                                      </button>
                                      <h2>{n.stock}</h2>
                                      <button
                                        onClick={() => incrementStock(e, n)}
                                      >
                                        +
                                      </button>
                                    </div>
                                  );
                                })
                                : null}
                        </h2> */}
                      {/* </div> */}
                    {/* </div> */}
                    <div className="botonera">
                      <button value={e.productsID} className="-btnbuy">
                        <Link to={`/FormAdminProduct/${e.productsID}`}>
                          Edit Now
                        </Link>
                      </button>

                      {e.status ? (
                        <button
                          className={!e.featuredProduct ? "fav_" : "featured_"}
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
                          className="fav_"
                          onClick={() => handleBannedProduct(e.productsID)}
                        >
                          <AiFillEye className="svg_eyes" color="#08c46b" />
                        </button>
                      ) : (
                        <button
                          className="fav_"
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
        </div >
      </div >
    );
  } catch (err) {
    console.log(err);
  }
};

export default FormCreatePoke;
