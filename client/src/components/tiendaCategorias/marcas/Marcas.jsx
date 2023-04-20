import React from "react";
import { marcas } from "../../../data/marcas";
import "./style.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../../Redux/actions";

const Marcas = ({ scroll }) => {
  // let dataBrand = datos?.map((e) => e.brand.brandName);
  // let marcas = [...new Set(dataBrand)];

  const dispatch = useDispatch();

  return (
    <div className="container pt-5" id='marcas'>

      <h2 className="text-center mt-5 titulos-color">NUESTRAS MARCAS</h2>
      <div className=" row row-cols-1 row-cols-sm-2 row-cols-mb-4">
        {marcas?.map((e) => (
          <Link
            onClick={() => {
              scroll();
              dispatch(setCurrentPage(1));
            }}

            to={`/Products/${e.name}`} key={e.name} className="marcas">
            <img className="marcas_image" src={e.img} alt="" />
             {/* <h2 className="mt-4 fw-normal text titulos-color">{e.name}</h2> */}

          </Link>
        ))}
      </div>
    </div>
  );
};

export default Marcas;
