import React from "react";
import "./style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, setCurrentPage } from "../../Redux/actions/index.js";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import Filter from "../Filter/Filter";

const Cards = () => {

  const { article } = useParams();
  const productsBoard = useSelector((state) => state.products);
  
  const filteredProducts =

    article ? productsBoard?.filter(
      (el) => el.category === article || el.brand.brandName === article

    ) : productsBoard;
  const dispatch = useDispatch();
  // const [currentPage, setCurrentPage] = useState(1);
  const currentPage = useSelector((state) => state.currentPage);

  const [productPerPage] = useState(4);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;

  const currentProduct = filteredProducts?.length > 0 ? 
  filteredProducts?.slice( indexOfFirstProduct, indexOfLastProduct) 
    : 
  productsBoard?.slice( indexOfFirstProduct, indexOfLastProduct);

  const pagination = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllProducts(article));
  }, [dispatch]);

  // <Link to={'/shoes/' + el.id +'/buyNow'}
  return (
    <div>
      <Pagination
        productPerPage={productPerPage}
        filteredProducts={filteredProducts?.length}
        pagination={pagination}
        currentPage={currentPage}
      />
      <Filter pagination={pagination} />
      {filteredProducts?.length > 0 ? (
        currentProduct?.map((el) => (
          <div key={el.name} className="container page-wrapper">
            <div className="page-inner">
              <div className="row">
                <div className="el-wrapper">
                  <Link
                    key={el.productsID}
                    to={`/Products/${article}/${el.productsID}/Detail`}
                  >
                    <div className="box-up">
                      <img className="img" src={el.img} alt="" />

                      <div className="img-info">
                        <div className="info-inner">
                          <span className="p-name">{el.name}</span>
                          <span className="p-company">
                            {el.brand.brandName}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="h-bg">
                      <div className="h-bg-inner" />
                    </div>
                    <span className="price">$ {el.price}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      ) || (
          productsBoard?.map((el) => (
            <div key={el.name} className="container page-wrapper">
              <div className="page-inner">
                <div className="row">
                  <div className="el-wrapper">
                    <Link
                      key={el.productsID}
                      to={`/Products/${article}/${el.productsID}/Detail`}
                    >
                      <div className="box-up">
                        <img className="img" src={el.img} alt="" />

                        <div className="img-info">
                          <div className="info-inner">
                            <span className="p-name">{el.name}</span>
                            <span className="p-company">
                              {el.brand.brandName}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="h-bg">
                        <div className="h-bg-inner" />
                      </div>
                      <span className="price">{el.price}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : <div> <h1 className="noproducts">No products found</h1> <Link to='/'><button className="buttonvolver">volver</button></Link> </div>}
      <Pagination
        productPerPage={productPerPage}
        filteredProducts={filteredProducts?.length}
        pagination={pagination}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Cards;
