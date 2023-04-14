import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./style.css";
import { setCurrentPage } from "../../../Redux/actions";

const Marcas = ({ datos, scroll }) => {
  let dataBrand = datos?.map((e) => e.brand.brandName);
  let marcas = [...new Set(dataBrand)];

  let dispatch = useDispatch()

  return (
    <div className="container" id='marcas'>
      <h2 className="text-secondary text-center my-5">NUESTRAS MARCAS</h2>
      <div className="d-block row row-cols-4 d-flex justify-content-center lign-items-center">
        {marcas?.map((e) => (
          <Link
            onClick={() => {
              scroll()
              dispatch(setCurrentPage(1))
            }}
            to={`/Products/${e}`}
            key={`/${e}`}
            className="py-4 text-secondary text-decoration-none rounded"
          >
            <b className="fluor fluor1 items">{e}</b>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Marcas;
