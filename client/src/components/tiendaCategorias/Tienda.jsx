import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/actions/index";
import Banner from "./banner/Banner";
import Categorias from "./categorias/Categorias";
import Destacados from "./destacados/Destacados";
import Marcas from "./marcas/Marcas";
import "./style.css";
import { Link } from "react-router-dom";

const tienda = () => {
  const datos = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const scroll = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };
  return (
    <>
      <div className="carousel-contain">
        <Banner/>
      </div>
      <div className="tiendaCont p-0 m-0 container text-center mx-auto">
        <Categorias scroll={scroll} />
        <Destacados datos={datos} />
        <Marcas scroll={scroll} datos={datos} />
        <button className=" my-5 button">
          <Link 
                key="allProducts"
                to={`/Products/`}
                className="text-center text-white text-decoration-none"
                onClick={() => scroll()}
              >ALL PRODUCTS</Link>
        </button>
      </div>
    </>
  );
};

export default tienda;
