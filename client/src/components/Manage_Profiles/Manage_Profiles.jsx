import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./Manage_Profiles.css";
import {
  getAllUsers,
  setPrivilegeUser,
  setStatusUser,
} from "../../Redux/actions/index.js";
import axios from "axios";

const FormCreatePoke = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allUsers = useSelector((e) => e.user);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleBannedProduct = (e) => {
    dispatch(setStatusUser(e));
    navigate(0);
  };

  const handleFeaturedProduct = (e) => {
    dispatch(setPrivilegeUser(e));
    navigate(0);
  };

  try {
    return (
      <div className="all_">
      <div className="cart_manager">
        {allUsers ? (
          allUsers
            ?.sort((a, b) => a.idUser - b.idUser)
            .map((e) => (
              <main className="_cardCont">
                <section className={e.status ? "_card" : "of_cart"}>
                  <div className="-imageproduct">
                    <img
                      className="_img"
                      src={e.image}
                      alt="Missing image"
                      draggable="false"
                    />
                  </div>
                  <div className="-infoproduct">
                    <h2>
                      {e.first_name}
                      {e.last_name}
                    </h2>
                    <p>Email: {e.email}</p>
                  </div>
                  <div className="btn_">
                    <button className="-btnbuy">Edit Now</button>

                    {e.status === "active" ? (
                      <button
                        className={!e.privilige ? "fav" : "featured"}
                        onClick={() => handleFeaturedProduct(e.idUser)}
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

                    {e.status === "active" ? (
                      <button
                        className="fav"
                        onClick={() => handleBannedProduct(e.email)}
                      >
                        <AiFillEye className="svg_eyes" color="#08c46b" />
                      </button>
                    ) : (
                      <button
                        className="fav"
                        onClick={() => handleBannedProduct(e.email)}
                      >
                        <AiOutlineEyeInvisible
                          className="svg_eyes_disabled"
                          color="#08c46b"
                        />
                      </button>
                    )}
                  </div>
                </section>
              </main>
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
