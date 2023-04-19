import React from "react";
import {marcas} from '../../../data/marcas';
import "./style.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../../Redux/actions";

const Marcas = ({ scroll }) => {
  // let dataBrand = datos?.map((e) => e.brand.brandName);
  // let marcas = [...new Set(dataBrand)];

  const dispatch = useDispatch();

// console.log(marcas)
  return (
    <div className="container" id='marcas'>
      <h2 className="text-center mt-5 titulos-color">NUESTRAS MARCAS</h2>
      <div className="d-block row row-cols-4 d-flex justify-content-center lign-items-center">
        {marcas?.map(e => 
          <Link
            onClick={() => {
              scroll()
              dispatch(setCurrentPage(1))
            }}
            to={`/Products/${e.name}`} key={e.name} className="card">
            <img className="card_image" src={e.img} alt="" />
             {/* <h2 className="mt-4 fw-normal text titulos-color">{e.name}</h2> */}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Marcas;
