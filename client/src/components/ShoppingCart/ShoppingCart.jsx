import React from "react";
import "./ShoppingCart.css";
import { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Checkout from "../Checkout/Checkout";



const ShoppingCart = ({
  allProducts,
  setAllProducts,
  setCountProducts,
  countProducts,
  priceTotal,
  setPriceTotal,
}) => {
  const navigate = useNavigate();


const clearCart = () => {
  window.localStorage.setItem("productscart", JSON.stringify([]));
  window.localStorage.setItem("totalprices", JSON.stringify(0));
  window.localStorage.setItem("countproducts", JSON.stringify(0));
  setAllProducts([]);
  setCountProducts(0);
  setPriceTotal(0);
};



 useEffect(() => {
  
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
}, []);

  // window.localStorage.setItem("productscart", JSON.stringify(allProducts));
  // window.localStorage.setItem("totalprices", JSON.stringify(priceTotal));
  // window.localStorage.setItem("countproducts", JSON.stringify(countProducts));

 function decrementProduct(product) {
    const productToUpdate = allProducts?.find(
      (el) => el.productsID === product.productsID && el.size === product.size
    );

    if (
      productToUpdate.sizes?.map((el) =>
        el.size === product.size ? el.quantity > 1 : null
      )
    ) {
      const updatedProduct = allProducts.map((el) =>
        el.productsID === product.productsID && el.size === product.size
          ? {
              ...el,

              sizes: productToUpdate.sizes?.map(
                (size) =>
                  size.size === product.size
                    ? {
                        ...size,

                        stock: Number(size.stock + 1),
                        quantity: Number(size.quantity - 1),
                      }
                    : size,
              ),

              // price: Number(productToUpdate.price) * productToUpdate?.sizes.map(el => el.size === product.size ? Number(el.quantity): null )
            }
          : { ...el }
      );

      setAllProducts(updatedProduct);
      setCountProducts(countProducts - 1);
      setPriceTotal( priceTotal - Number(productToUpdate.price))
      //setPriceTotal(priceTotal -  Number(productToUpdate.price) * productToUpdate?.sizes.map(el => el.size === product.size ? Number(el.quantity): 209 ) );
    window.localStorage.setItem(
        "productscart",
        JSON.stringify(updatedProduct)
      );
      window.localStorage.setItem(
        "totalprices",
        JSON.stringify(priceTotal - Number(productToUpdate.price))
      );
      window.localStorage.setItem(
        "countproducts",
        JSON.stringify(countProducts - 1)
      );
    }
    if (
      productToUpdate.boardsizes?.map((el) =>
        el.size === product.size ? el.quantity > 1 : null
      )
    ) {
      const updatedProduct = allProducts.map((el) =>
        el.productsID === product.productsID && el.size === product.size
          ? {
              ...el,

              boardsizes: productToUpdate.boardsizes?.map(
                (size) =>
                  size.size === product.size
                    ? {
                        ...size,

                        stock: Number(size.stock + 1),
                        quantity: Number(size.quantity - 1),
                      }
                    : size,
              ),

              // price: Number(productToUpdate.price) * productToUpdate?.sizes.map(el => el.size === product.size ? Number(el.quantity): null )
            }
          : { ...el }
      );

      setAllProducts(updatedProduct);
      setCountProducts(countProducts - 1);
      setPriceTotal( priceTotal - Number(productToUpdate.price))
      //setPriceTotal(priceTotal -  Number(productToUpdate.price) * productToUpdate?.sizes.map(el => el.size === product.size ? Number(el.quantity): 209 ) );
     window.localStorage.setItem(
        "productscart",
        JSON.stringify(updatedProduct)
      );
      window.localStorage.setItem(
        "totalprices",
        JSON.stringify(priceTotal -  Number(productToUpdate.price))
      );
      window.localStorage.setItem(
        "countproducts",
        JSON.stringify(countProducts - 1)
      );
    }
    if (
      productToUpdate.numbersizes?.map((el) =>
        el.size === product.size ? el.quantity > 1 : null
      )
    ) {
      const updatedProduct = allProducts.map((el) =>
        el.productsID === product.productsID && el.size === product.size
          ? {
              ...el,

              numbersizes: productToUpdate.numbersizes?.map(
                (size) =>
                  size.size === product.size
                    ? {
                        ...size,

                        stock: Number(size.stock + 1),
                        quantity: Number(size.quantity - 1),
                      }
                    : size,
              ),

              // price: Number(productToUpdate.price) * productToUpdate?.sizes.map(el => el.size === product.size ? Number(el.quantity): null )
            }
          : { ...el }
      );


      setAllProducts(updatedProduct);
      setCountProducts(countProducts - 1);
      setPriceTotal( priceTotal - Number(productToUpdate.price))
      //setPriceTotal(priceTotal -  Number(productToUpdate.price) * productToUpdate?.sizes.map(el => el.size === product.size ? Number(el.quantity): 209 ) );
      window.localStorage.setItem(
        "productscart",
        JSON.stringify(updatedProduct)
      );
      window.localStorage.setItem(
        "totalprices",
        JSON.stringify(priceTotal -  Number(productToUpdate.price))
      );
      window.localStorage.setItem(
        "countproducts",
        JSON.stringify(countProducts - 1)
      );
    }


  }

  // price: Number(productToUpdate.price) - Number(product.price)
  function incrementProduct(product) {
    const productNext = allProducts.find(
      (el) => el.productsID === product.productsID && el.size === product.size
    );
    if (productNext) {
      const updateProduct = allProducts.map((el) =>
        el.productsID === productNext.productsID && el.size === productNext.size
          ? {
              ...el,
              //price: Number(productNext.price) + Number(product.price),
              sizes: productNext.sizes?.map((size) =>
                size.size === product.size
                  ? {
                      ...size,
                      stock: Number(size.stock - 1),
                      quantity: Number(size.quantity + 1),
                    }
                  : size
              ),
              numbersizes: productNext.numbersizes?.map((size) =>
                size.size === product.size
                  ? {
                      ...size,
                      stock: Number(size.stock - 1),
                      quantity: Number(size.quantity + 1),
                    }
                  : size
              ),
              boardsizes: productNext.boardsizes?.map((size) =>
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
      const updateProducts = allProducts.map((el) =>
        el.productsID === product.productsID && el.size === product.size
          ? { ...el }
          : el
      );

      setAllProducts(updateProduct);
      setCountProducts(countProducts + 1);
      setPriceTotal(priceTotal + Number(productNext.price));
       window.localStorage.setItem(
        "productscart",
        JSON.stringify(updateProduct)
      );
      window.localStorage.setItem(
        "totalprices",
        JSON.stringify(priceTotal + Number(productNext.price))
      );
      window.localStorage.setItem(
        "countproducts",
        JSON.stringify(countProducts +1)
      );
     } 
     // else {
    //   const newProduct = {
    //     ...product,
    //     price: Number(product.price) + Number(product.price),
    //     sizes: product.sizes?.map((size) =>
    //       size.size === product.size
    //         ? {
    //             ...size,
    //             stock: Number(size.stock - 1),
    //             quantity: Number(size.quantity + 1),
    //           }
    //         : size
    //     ),
    //     numbersizes: product.numbersizes?.map((size) =>
    //       size.size === product.size
    //         ? {
    //             ...size,
    //             stock: Number(size.stock - 1),
    //             quantity: Number(size.quantity + 1),
    //           }
    //         : size
    //     ),
    //     boardsizes: product.boardsizes?.map((size) =>
    //       size.size === "one size"
    //         ? {
    //             ...size,
    //             stock: Number(size.stock - 1),
    //             quantity: Number(size.quantity + 1),
    //           }
    //         : size
    //     ),
    //   };
    //   const newProducts = [...allProducts, newProduct];
    //   setAllProducts(newProducts);
    //   setCountProducts(countProducts + 1);
    //   setPriceTotal(priceTotal + Number(newProduct.price));
    //    window.localStorage.setItem(
    //     "productscart",
    //     JSON.stringify(newProduct)
    //   );
    //   window.localStorage.setItem(
    //     "totalprices",
    //     JSON.stringify(priceTotal)
    //   );
    //   window.localStorage.setItem(
    //     "countproducts",
    //     JSON.stringify(countProducts)
    //   );
    // }
    
  }



  const renderProduct = () => {
    if (allProducts.length > 0) {
      return allProducts.map((el) => (
        <React.Fragment key={el.id}>
          <div>
            <Link
              onClick={() => scroll()}
              to={`/Products/${el.category}/${el.productsID}/Detail`}
            >
              {el.name}
            </Link>
            <img className="imgcart" src={el.img} alt="Img not found" />
          </div>
          <BasketSize>
            {el.size || el.boardsizes?.map((el) => el.size)}
          </BasketSize>
          <BasketQty>
            {" "}
            Quantity :
            {el.sizes?.map((size) => {
              if (size.size === el.size) {
                return el.sizes.map((e) => {
                  if (e.size === el.size) {
                    //mapeo la prop sizes hasta encontrar su size y devuelve la quantity de ese en especifico
                    return e.quantity;
                  }
                });
              }
            }) ||
              el.numbersizes?.map((size) => {
                if (size.size === el.size) {
                  return size.quantity;
                }
              }) ||
              el.boardsizes?.map((size) => {
                {
                  /* if (size.size === el.size) { */
                }
                return size.quantity;
                {
                  /* } */
                }
              })}
          </BasketQty>
          <BasketPrice>
            <button  onClick={() => decrementProduct(el)}>-</button>${el.price}
            <button  onClick={() => incrementProduct(el)}>+</button>
          </BasketPrice>
          <BasketQty>
            {(el.price *
              (el.sizes?.reduce((acc, size) => {
                if (size.size === el.size) {
                  const sizeQuantity =
                    el.sizes.find((e) => e.size === el.size)?.quantity || 0;
                  return acc + sizeQuantity;
                }
                return acc;
              }, 0) ||
                el.numbersizes?.reduce((acc, size) => {
                  if (size.size === el.size) {
                    const sizeQuantity =
                      el.numbersizes.find((e) => e.size === el.size)
                        ?.quantity || 0;
                    return acc + sizeQuantity;
                  }
                  return acc;
                }, 0) ||
                el.boardsizes?.reduce((acc, size) => {
                  const sizeQuantity =
                    el.boardsizes.find((e) => e.size === el.size)?.quantity ||
                    0;
                  return acc + sizeQuantity;
                }, 0) ||
                0)).toFixed(2)}
          </BasketQty>
        </React.Fragment>
      ));
    } else {
      return <div>The shopping cart is currently empty</div>;
    }
  };

  const renderTotal = () => {
    const total = allProducts.reduce(
      (total, product) => total + product.price,
      0
    );
    return total;
  };
  return (
    <div>
      <All>
        <BasketContainer>
          <BasketTitle>SHOPPING CART</BasketTitle>
          <Link to={`/checkout?products=${JSON.stringify(allProducts)}`}>
          <BasketButton >Go to checkout</BasketButton>
      </Link>
          <BasketTable>
            <BasketHeader>
              <h4>Item</h4>
              <h4>Size</h4>
              <h4>Quantity</h4>
              <h4>Price</h4>
              <h4>Total</h4>
            </BasketHeader>
            <BasketHeaderLine />
            <BasketHeader>{renderProduct()}</BasketHeader>
            <BasketHeaderLine />
          </BasketTable>
          <button className="buttonvolver" onClick={() => clearCart() }>Clear</button>
          <BasketTotal>Total: {priceTotal.toFixed(2)}</BasketTotal>
        </BasketContainer>
      </All>
    </div>
  );
};

export default ShoppingCart;

const All = styled.div`
  height: 100vh;
  margin-top: 70px;
  padding: 0;
`;

const BasketContainer = styled.div`
  display: grid;
  padding: 20px;
  grid-template-rows: 0.25fr 1fr 0.25fr;
  grid-template-columns: 0.1fr 1fr 0.1fr;
`;
const BasketTable = styled.div`
  grid-column: 1 / span 6;
  grid-template-rows: 0.25fr, 1fr 0.25fr 0.25fr;
  column-gap: 20px;
  padding-left: 10px;
`;
const BasketHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.4fr 0.4fr 0.4fr;
`;
const BasketHeaderLine = styled.hr`
  margin-bottom: 20px;
  border: 1px solid gray;
`;
const BasketTitle = styled.h2`
  grid-column: 1 / span 3;
  padding-bottom: 20px;
`;
const BasketQty = styled.h3`
  font-size: 18px;
  font-weigth: bold;
  grid-template-columns: 0.1fr 0.05fr 0.1fr 0.1fr;
`;
const BasketSize = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  font-weigth: bold;
  grid-template-columns: 0.1fr 0.05fr 0.1fr 0.1fr;
`;

const BasketPrice = styled.h3`
  font-size: 20px;
  font-weigth: bold;
`;
const BasketTotal = styled.h2`
  justify-self: end;
`;
const BasketButton = styled.button`
 margin: 50px;
  border-radius: 8px;
  height: 40px;
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

