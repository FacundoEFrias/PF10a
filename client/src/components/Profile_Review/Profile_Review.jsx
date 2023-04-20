import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Reviews from "../Reviews/Reviews";

import { getAllBills } from "../../Redux/actions/index.js";

const profileReview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  const allBills = useSelector((e) => e.allBills);

  const [reviewButton, setReviewButton] = useState("Cerrado");

  try {
    if (isAuthenticated) {
      var profileBills = allBills?.filter((e) => e.user.email === user.email);
      var superBills = profileBills?.filter(
        (e) => e.payment_status === "approved"
      );
      var filterBills = superBills
        ?.map((objeto) => objeto.item)
        .reduce((acc, val) => acc.concat(val), []);

      var userBills = profileBills?.map((e) => e.item);
    }
    let userEmail = user;
  } catch (error) {
    console.log(error);
  }

  useEffect(() => {
    dispatch(getAllBills());
  }, [dispatch]);

  try {
    return (
      <div>
        <h1>ACA VAN LAS REVIEW PERRRRRRRRRRROo</h1>
        {filterBills ? (
          filterBills.map((e, index = 1) => (
            <a class="list-group">
              <div
                href="#"
                class="list-group-item list-group-item-action flex-column align-items-start active"
              >
                <div>{e}</div>
                <button
                  className="float-end btn btn-light btn-sm"
                  onClick={() => setReviewButton(index)}
                >
                  Editar Review
                </button>
                <div>
                  {reviewButton === index ? (
                    <div>
                      <div>
                        <Reviews item={e} />
                      </div>
                      <button
                        className="float-end btn btn-danger"
                        onClick={() => setReviewButton("Cerrado")}
                      >
                        X
                      </button>
                      <hr />
                    </div>
                  ) : null}
                </div>
              </div>
              <hr /> {/* //!Borraar esto y meterle un padding  */}
            </a>
          ))
        ) : (
          <h1>No Vendimo una mierda hasta ahora --Carita Triste-- </h1>
        )}
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

export default profileReview;
