import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentPage } from "../../../Redux/actions";
import "./Destacados.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Destacados = ({ datos }) => {
  let newData = datos && datos.filter((e) => e.featuredProduct === true);

  const dispatch = useDispatch();

  //Cambia la primera letra en Mayuscula
  try {
    newData.map((e) => {
      e.category = e.category[0].toUpperCase() + e.category.substring(1);
    });
  } catch (error) {
    console.log(error);
  }
  const scroll = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };
  return (
    <div className="px-5 py-4 rounded my-4 destacado">
      <h2 className="text-center destacados">FEATURED PRODUCTS</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        showDots={true}
        className="mt-5 pb-5"
      >
        {newData ? (
          newData.map((e) => (
            <Link
              key={e.productsID}
              to={`/Products/${e.category}/${e.productsID}/Detail`}
              className="text-decoration-none"
              onClick={() => {
                scroll();
                dispatch(setCurrentPage(1));
              }}
            >
              <div className="card mx-3 text-center text-black">
                <img src={e.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{e.name}</h5>
                  <p className="text-secondary card-text">{e.category}</p>
                  <p className="text-secondary">{e.brand.brandName}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div></div>
        )}
      </Carousel>
    </div>
  );
};

export default Destacados;
