import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Reviews from "../Reviews/Reviews";

import { getAllBills, setReviewButton } from "../../Redux/actions/index.js";

const ManageBills = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  const allBills = useSelector((e) => e.allBills);

  // const [reviewButton, setReviewButton] = useState(0);
  const reviewButton = useSelector((e) => e.reviewButton);

  try {
    if (isAuthenticated) {
      var profileBills = allBills?.filter((e) => e.user.email === user.email);
      var superBills = profileBills?.filter(
        (e) => e.payment_status === "approved"
      );

      var userBills = profileBills?.map((e) => e.item);
    }
    let userEmail = user.email;
  } catch (error) {
    console.log(error);
  }

  useEffect(() => {
    dispatch(getAllBills());
  }, [dispatch]);

  console.log(profileBills, "profileBILLS");
  console.log(allBills, "LASBILLS");
  
  const scrollTop = () => {
    window.scroll(0, 0)
  }

  try {
    return (
      <div>
        <h1>ACA VAN LAS BILL's PERRRRRRRRRRROo</h1>
        {superBills ? (
          superBills.map((e, index) => (
            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action flex-column align-items-start active"
              >
                <div class="d-flex w-100 justify-content-between">
                  {Math.floor((new Date() - new Date(e?.date)) / 86400000) ===
                  0 ? (
                    <small text-left>Today</small>
                  ) : (
                    <small text-left>
                      {Math.floor((new Date() - new Date(e?.date)) / 86400000)}{" "}
                      days ago
                    </small>
                  )}
                </div>
                <div>
                  {e?.payment_status ? (
                    <div>
                      <Link to={'/ProfileReview'} onClick={() => scrollTop()}>
        <button>Create Reviews</button>
      </Link>
                    </div>
                  ) : null}
                  <p id="" class="mb-1">
                  {e.item && e.image
    ? e.item.map((element, index) => {
        return (
          <div>
            <Link
              onClick={() => scrollTop()}
              to={`/Products/${e.category_name[index]}/${e.product_ID[index]}/Detail`}
              style={{ color: "red" }}
            >
             {element}
             <img src={e.image[index]} style={{ width: "5%" }} />
            </Link>
          </div>
        );
      })
    : null}

                  </p>
                </div>
                <div>
                  {/* //!ESTO HAY QUE EDIITARLO PARA QUE DESPUES SE TENGA QUE CAMBIAR A CANCELADO */}
                  {e?.payment_status ? (
                    <small> {e?.payment_status} </small>
                  ) : (
                    <small>Pending payment</small>
                  )}
                  {e?.payment_status && e?.Shipped === false ? (
                    <button onClick={(e) => handleSubmit(e)}>Shipped</button>
                  ) : null}
                </div>
                <div>
                  {/* //!ESTO HAY QUE EDIITARLO PARA QUE DESPUES SE TENGA QUE CAMBIAR A CANCELADO */}
                  {e?.price ? (
                    <small> Total Price $ {e?.price} </small>
                  ) : null}
                </div>
              </a>
              <hr /> {/* //!Borraar esto y meterle un padding  */}
            </div>
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

export default ManageBills;
