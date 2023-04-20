import React, { useEffect, useState } from "react";
import "./Reviews.css";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { postReviews } from "../../Redux/actions/index";

const Reviews = ({ item }) => {
  console.log(item)
  const [input, setInput] = useState({
    rating: "",
    firstName: "",
    comment: "",
    productName:  item ,

  });
  const dispatch = useDispatch();

  const { user, isAuthenticated } = useAuth0();

  function handleChange(e) {
    console.log("input", input);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postReviews( input ));
    alert("Producto creado correctamente");
    setInput({
      rating: "",
      firstName: "",
      comment: "",
      productName:  item ,
    });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <select
            id="rating"
            name="rating"
            value={input.rating}
            onChange={(e) => handleChange(e)}
          >
            <option value="">--Seleccione una opción--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <input
            id="comment"
            name="comment"
            value={input.comment}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div>
          <label htmlFor="firstName">Name: </label>
          <input
            id="firstName"
            name="firstName"
            value={input.firstName}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Reviews;
