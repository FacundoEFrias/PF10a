import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsId, getAllReviews } from "../../Redux/actions/index.js";
import { useParams } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import Reviews from "../Reviews/Reviews";

export default function Card({
  oneProducts,
  setOneProducts,
  allProducts,
  setAllProducts,
  priceTotal,
  setPriceTotal,
  countProducts,
  setCountProducts,
}) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productInfoId = useSelector((state) => state.productsID);
  const review = useSelector((state) => state.allReviews);
  const [selectedSize, setSelectedSize] = useState("");
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();


try {
  var productReview = review.filter((e) => e.productName === productInfoId.item);

} catch (error) {
  console.log(error)
}




  useEffect(() => {
    dispatch(getAllProductsId(id));
    dispatch(getAllReviews());
    const storedProduct = window.localStorage.getItem("productscart");
    const storedPriceTotal = window.localStorage.getItem("totalprices");
    const storedCountProducts = window.localStorage.getItem("countproducts");
    if (storedProduct) {
      setAllProducts(JSON.parse(storedProduct));
    }
    if (storedPriceTotal) {
      setPriceTotal(Number(storedPriceTotal));
    }
    if (storedCountProducts) {
      setCountProducts(Number(storedCountProducts));
    }
  }, [id, dispatch]);

  function handleOnAddProduct(product) {
    if (!isAuthenticated) {
      Swal.fire({
        icon: "warning",
        title: "You are not logged",
        text: "you need to log in to be able to buy",
      });
      loginWithRedirect();
    }

    if (
      allProducts.find(
        (el) => el.productsID === product.productsID && el.size === product.size
      )
    ) {
      Swal.fire({
        icon: "success",
        title: "Aggregate",
        text: "Added to cart successfully",
      });

      const products = allProducts.map((el) =>
        el.productsID === product.productsID && el.size === product.size
          ? {
              ...el,
              price: Number(el.price) + Number(product.price),
              sizes: el.sizes?.map((size) =>
                size.size === product.size
                  ? {
                      ...size,
                      stock: Number(size.stock - 1),
                      quantity: Number(size.quantity + 1),
                    }
                  : size
              ),
              numbersizes: el.numbersizes?.map((size) =>
                size.size === product.size
                  ? {
                      ...size,
                      stock: Number(size.stock - 1),
                      quantity: Number(size.quantity + 1),
                    }
                  : size
              ),
              boardsizes: el.boardsizes?.map((size) =>
                size.size === "one size"
                  ? {
                      ...size,
                      stock: Number(size.stock - 1),
                      quantity: Number(size.quantity + 1),
                    }
                  : size
              ),
            }
          : el
      );
      setPriceTotal(priceTotal + product.price);
      setCountProducts(countProducts + 1);
      setAllProducts([...products]);
      setOneProducts([...products]);
    } else {
      let newProduct = {
        ...product,
        sizes: product.sizes?.map((el) => ({
          ...el,
          stock: el.size === product.size ? Number(el.stock - 1) : null,
        })),
        numbersizes: product.numbersizes?.map((el) => ({
          ...el,
          stock: el.size === product.size ? Number(el.stock - 1) : null,
        })),
        boardsizes: product.boardsizes?.map((el) => ({
          ...el,
          stock: el.size === product.size ? Number(el.stock - 1) : null,
        })),
      };
      if (
        !newProduct.sizes &&
        !newProduct.numbersizes &&
        !newProduct.boardsizes
      ) {
        newProduct = {
          ...newProduct,
          stock: Number(newProduct.stock - 1),
        };
      }
      setPriceTotal(priceTotal + product.price);
      setCountProducts(countProducts + 1);
      setAllProducts([...allProducts, newProduct]);
    }
    setOneProducts([...allProducts, product]);
  }

  window.localStorage.setItem("productscart", JSON.stringify(allProducts));
  window.localStorage.setItem("totalprices", JSON.stringify(priceTotal));
  window.localStorage.setItem("countproducts", JSON.stringify(countProducts));

  function handleChange(event) {
    const selectedSize = event.target.value;
    setSelectedSize((prevProduct) => ({
      ...prevProduct,
      size: selectedSize,
    }));
  }

  //! Reviews

  //let reviewName =  review.filter(r => r.name ===   )

  return (
    <div>
      
      <div className="cardComponent">
        {productInfoId ? (
          <div>
          <div className="containerId">
            <div className="imgBx">
              <img
                className="imgId"
                src={productInfoId.img}
                alt="Img not found"
              />
            </div>
            <div className="details">
              <div className="contentId">
                <h2 className="pName">
                  {productInfoId.name}
                  <br />
                </h2>
                <br></br>
                <p className="pIds">Brand: {productInfoId.brand?.brandName}</p>
                <p className="pIds">Best for: {productInfoId.activity}</p>
                <p className="pIds">
                  Description: {productInfoId?.description}
                </p>
                <p className="pIds">Made of: {productInfoId.material}</p>
                <p className="pIds">Select size: </p>

                {/*<h4  className="imgBx2" data-brand={productInfoId.model}></h4>*/}

                {/* <p className='pIds'>*/}
                <div className="size-container">
                  {(productInfoId.numbersizes &&
                    productInfoId.numbersizes?.map((el) => (
                      <button
                        className="buttonsize"
                        value={el.size}
                        onClick={() =>
                          handleOnAddProduct({
                            ...productInfoId,
                            size: el.size,
                          })
                        }
                        key={el.size}
                      >
                        {el.size}
                      </button>
                    ))) ||
                    productInfoId.sizes?.map((el) => (
                      <button
                        className="buttonsize"
                        value={el.size}
                        onClick={() =>
                          handleOnAddProduct({
                            ...productInfoId,
                            size: el.size,
                          })
                        }
                        key={el.size}
                      >
                        {el.size}
                      </button>
                    )) ||
                    productInfoId.boardsizes?.map((el) => (
                      <button
                        className="buttonsize"
                        value={el.size}
                        onClick={() =>
                          handleOnAddProduct({
                            ...productInfoId,
                            size: el.size,
                          })
                        }
                        key={el.size}
                      >
                        {el.size}
                      </button>
                    ))}
                </div>
                <div className="cardprice">
                  <h3 className="h3Name">${productInfoId.price}</h3>
                </div>
                {/* <button onClick={((e) => handleOnAddProduct(productInfoId))} >Buy Now</button> */}
              </div>
            </div>
            <Link to="/Shop">
              <button className="buttonback">Back to shop</button>
            </Link>
            </div>
            {/* //! REVIEW */}
            <div>
            {productReview?.map((el) => {
        return (
          <div class="card border-dark mb-3">
            <div class="card-header">{el.firstName}</div>
            <div class="card-body text-dark">
              <h5 class="card-title">{el.rating}</h5>
              <p class="card-text">{el.comment}</p>
            </div>
          </div>
        );
      })}
            {/* //! REVIEW */}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
