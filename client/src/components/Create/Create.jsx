import React, { useState, useEffect } from "react";
import "./Create.css";
import { useDispatch, useSelector } from "react-redux";
import { postProducts, getAllProducts } from "../../Redux/actions/index";
import { Link, useNavigate } from "react-router-dom";

const validate = (input) => {
  let errors = {};

  const regex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;

  if (!regex.test(input.name)) {
    errors.name = "Cannot be completed with numbers";
  }
  if (input.name === "") {
    errors.name = "Complete field";
  }
  if (input.category === "") {
    errors.category = "Complete field";
  }
  if (input.description === "") {
    errors.description = "Complete field";
  }
  if (input.price === "") {
    errors.price = "Complete field";
  }
  if (input.material === "") {
    errors.material = "Complete field";
  }
  if (input.activity === "") {
    errors.activity = "Complete field";
  }
  if (input.brand === "") {
    errors.brand = "Complete field";
  }
  if (input.model === "") {
    errors.model = "Complete field";
  }

  return errors;
};

//!!
function Create() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const numberSizes = useSelector((state) => state.allProducts);
  const sizeNumber = numberSizes?.filter((size) => size.numbersizes);
  const sizeLeter = numberSizes?.filter((size) => size.sizes);
  const [errors, setErrors] = useState({});
  const [newBrand, setNewBrand] = useState(false);

  //! aca traigo los numeros de los talles
  const sizes = sizeNumber?.reduce((acc, curr) => {
    curr.numbersizes.forEach((item) => {
      if (!acc.includes(item.size)) {
        acc.push(item.size);
      }
    });
    return acc.sort();
  }, []);

  //! aca traigo las palabras de los talles(s,l, x , xl)
  const sizesLeter = ["small", "medium", "large", "extraLarge", "one size"];

  //! aca traigo los talles de boards
  const sizesboard = ["one size"];

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    img: "",
    description: "",
    category: "",
    price: "",
    material: "",
    activity: "",
    brand: "",
    model: "",
    numbersizes: [],
    sizes: [],
    boardsizes: [],
    featuredProduct: false,
  });

  const handleFeaturedProduct = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.checked,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postProducts(input));
    alert("Producto creado correctamente");
    setInput({
      name: "",
      img: "",
      description: "",
      category: "",
      price: "",
      material: "",
      activity: "",
      brand: "",
      model: "",
      numbersizes: [],
      sizes: [],
      boardsizes: [],
      featuredProduct: "",
    });
    dispatch(getAllProducts());
    navigate("/home");
  }
  function handleClickCategory(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setInput({
      name: "",
      img: "",
      description: "",
      category: e.target.value,
      price: "",
      material: "",
      activity: "",
      brand: "",
      model: "",
      numbersizes: [],
      sizes: [],
      boardsizes: [],
      featuredProduct: "",
    });
    document.querySelectorAll("input[type=checkbox]").forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
  //!checkbox BoardSizes
  function handleBoardStock(e) {
    const nuevoNumero = Number(e.target.value);
    const index = input.boardsizes.findIndex((s) => s.size === e.target.name);
    if (index === -1) {
      setInput({
        ...input,
        boardsizes: [
          ...input.boardsizes,
          {
            size: e.target.name,
            stock: e.target.value,
          },
        ],
      });
    } else {
      const newSizes = [...input.boardsizes];
      newSizes[index] = {
        size: e.target.name,
        stock: nuevoNumero,
      };
      setInput({
        ...input,
        boardsizes: newSizes,
      });
    }
  }

  //!checkbox NumberSizes
  function handleNumberStock(e) {
    const nuevoNumero = Number(e.target.value);
    const index = input.numbersizes.findIndex((s) => s.size === e.target.name);
    if (index === -1) {
      setInput({
        ...input,
        numbersizes: [
          ...input.numbersizes,
          {
            size: e.target.name,
            stock: e.target.value,
          },
        ],
      });
    } else {
      const newSizes = [...input.numbersizes];
      newSizes[index] = {
        size: e.target.name,
        stock: nuevoNumero,
      };
      setInput({
        ...input,
        numbersizes: newSizes,
      });
    }
  }

  //!checkbox Sizes

  function handleStock(e) {
    const nuevoNumero = Number(e.target.value);
    const index = input.sizes.findIndex((s) => s.size === e.target.name);
    if (index === -1) {
      setInput({
        ...input,
        sizes: [
          ...input.sizes,
          {
            size: e.target.name,
            stock: nuevoNumero,
          },
        ],
      });
    } else {
      const newSizes = [...input.sizes];
      newSizes[index] = {
        size: e.target.name,
        stock: nuevoNumero,
      };
      setInput({
        ...input,
        sizes: newSizes,
      });
    }
  }

  //!!!!!

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  return (
    <div className="signup-container">
      <div className="left-container">
        <h1>SnowPanda Co.</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <img className="img-link" src={input.img} alt="img not found" />
        <div className="puppy"></div>
      </div>
      <div className="right-container">
        <header>
          <h1>Create Product Form </h1>
          <div className="pets-weight">
            <label htmlFor="pet-weight-0-25">Category</label>
            <div className="radio-container">
              <input
                id="pet-weight-0-25"
                type="radio"
                name="category"
                value="accessories"
                onClick={(e) => handleClickCategory(e)}
              ></input>
              <label htmlFor="pet-weight-0-25">Accessories</label>

              <input
                id="pet-weight-25-50"
                name="category"
                value="pants"
                type="radio"
                onClick={(e) => handleClickCategory(e)}
              ></input>
              <label htmlFor="pet-weight-25-50">Pant</label>

              <input
                id="pet-weight-50-100"
                name="category"
                value="board"
                type="radio"
                onClick={(e) => handleClickCategory(e)}
              ></input>
              <label htmlFor="pet-weight-50-100">Board</label>

              <input
                id="pet-weight-100-plus"
                name="category"
                value="boots"
                type="radio"
                onClick={(e) => handleClickCategory(e)}
              ></input>
              <label htmlFor="pet-weight-100-plus">Boot</label>

              <input
                id="tshirt"
                name="category"
                value="t-shirts"
                type="radio"
                onClick={(e) => handleClickCategory(e)}
              ></input>
              <label htmlFor="tshirt">T-Shirt</label>

              <input
                id="jacket"
                name="category"
                value="jackets"
                type="radio"
                onClick={(e) => handleClickCategory(e)}
              ></input>
              <label htmlFor="jacket">Jacket</label>
            </div>
          </div>
          <div className="set">
            <div className="pets-spayed-neutered">
              <label htmlFor="pet-spayed">Name</label>
              <div className="radio-container">
                <input
                  id="pets-name"
                  placeholder="Product name"
                  name="name"
                  value={input.name}
                  type="text"
                  onChange={(e) => handleChange(e)}
                ></input>
              </div>
              {errors.name ? <p className="danger">{errors.name}</p> : null}
            </div>

            <div className="pets-spayed-neutered">
              <label htmlFor="pet-spayed">
                Brand{" "}
                {newBrand === false ? (
                  <button
                    onClick={() => {
                      setNewBrand(!newBrand);
                      setInput({ ...input, brand: "" });
                    }}
                  >
                    {" "}
                    New{" "}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setNewBrand(!newBrand);
                      setInput({ ...input, brand: "" });
                    }}
                  >
                    {" "}
                    Cancel{" "}
                  </button>
                )}
              </label>
              <div className="radio-container">
                {newBrand === false ? (
                  <select
                    id="pets-breed"
                    placeholder="Insert brand"
                    name="brand"
                    value={input.brand}
                    type="text"
                    onChange={(e) => handleChange(e)}
                  >
                    <option></option>
                    {numberSizes &&
                      Array.from(new Set(numberSizes.map((h) => h.brand)))
                        ?.filter(
                          (brand, index, array) =>
                            array.indexOf(brand) === index
                        )
                        .map((brand, index) => (
                          <option key={index}>{brand.brandName}</option>
                        ))}
                  </select>
                ) : (
                  <input
                    id="pets-breed"
                    placeholder="Insert New brand"
                    name="brand"
                    value={input.brand}
                    type="text"
                    onChange={(e) => handleChange(e)}
                  ></input>
                )}
              </div>
              {errors.brand ? <p className="danger">{errors.brand}</p> : null}
            </div>
          </div>
          <div className="set">
            <div className="pets-spayed-neutered">
              <label htmlFor="pet-spayed">Model</label>
              <div className="radio-container">
                <input
                  id="pets-breed"
                  placeholder="Model"
                  name="model"
                  value={input.model}
                  type="text"
                  onChange={(e) => handleChange(e)}
                ></input>
              </div>
              {errors.model ? <p className="danger">{errors.model}</p> : null}
            </div>

            <div className="pets-spayed-neutered">
              <label htmlFor="pet-spayed">Material</label>
              <div className="radio-container">
                <input
                  id="pets-birthday"
                  placeholder="Material"
                  name="material"
                  value={input.material}
                  type="text"
                  onChange={(e) => handleChange(e)}
                ></input>
              </div>
              {errors.material ? (
                <p className="danger">{errors.material}</p>
              ) : null}
            </div>
          </div>

          <div className="set">
            <div className="pets-gender">
              <label htmlFor="pet-gender-female">Price</label>
              <div className="radio-container">
                <input
                  id="pets-birthday"
                  placeholder="Price"
                  name="price"
                  value={input.price}
                  type="number"
                  onChange={(e) => handleChange(e)}
                ></input>
              </div>
              {errors.price ? <p className="danger">{errors.price}</p> : null}
            </div>

            <div className="pets-spayed-neutered">
              <label htmlFor="pet-spayed">Activity</label>
              <div className="radio-container">
                <select
                  id="pets-birthday"
                  placeholder="Activity"
                  name="activity"
                  value={input.activity}
                  type="text"
                  onChange={(e) => handleChange(e)}
                >
                  <option></option>
                  {numberSizes &&
                    Array.from(
                      new Set(numberSizes.map((h) => h.activity))
                    ).map((activity) => <option>{activity}</option>)}
                </select>
              </div>
              {errors.activity ? (
                <p className="danger">{errors.activity}</p>
              ) : null}
            </div>
          </div>
          <div className="pets-spayed-neutered">
            <label htmlFor="pet-spayed">Description </label>
            <div className="radio-container">
              <input
                id="pets-birthday"
                placeholder="Description"
                name="description"
                value={input.description}
                type="text"
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            {errors.description ? (
              <p className="danger">{errors.description}</p>
            ) : null}
          </div>

          <label>
            Featured:
            <input
              type="checkbox"
              name="featuredProduct"
              value={input.featuredProduct}
              checked={input.featuredProduct}
              onChange={handleFeaturedProduct}
            />
          </label>
          {/* //!!!!!!! */}
          <hr />

          {/* //! talles de numeros */}
          <label>Sizes </label>
          <hr />

          {input.category &&
          (input.category === "boots" || input.category === "pants")
            ? sizes.map((num) => (
                <div className="fato">
                  <div className="sizes">
                    <label htmlFor="">Insert size {num} stock</label>
                    <input
                      type="number"
                      min={0}
                      placeholder="stock"
                      name={num}
                      value={input.stock}
                      onBlur={(e) => handleNumberStock(e)}
                    />
                    <hr />
                  </div>
                </div>
              ))
            : input.category &&
              (input.category === "accessories" ||
                input.category === "t-shirts" ||
                input.category === "jackets")
            ? sizesLeter.map((leter) => (
                <div className="fato">
                  <div className="sizes">
                    <label htmlFor="">Insert size {leter} stock</label>
                    <input
                      type="number"
                      min={0}
                      placeholder="..."
                      name={leter}
                      value={input.stock}
                      onBlur={(e) => handleStock(e)}
                    />
                    <hr />
                  </div>
                </div>
              ))
            : sizesboard.map((leter) => (
                <div className="fato">
                  <div className="sizes">
                    <label htmlFor="">Insert stock for Boards</label>
                    <input
                      type="number"
                      min={0}
                      placeholder="..."
                      name={leter}
                      value={input.stock}
                      onBlur={(e) => handleBoardStock(e)}
                    />
                    <hr />
                  </div>
                </div>
              ))}

          {/* //!!!!!!! */}
          <hr />
          <label htmlFor="pets-upload">Upload a photo</label>
          <div className="pets-photo">
            <button id="pets-upload">
              <i className="fas fa-camera-retro"></i>
            </button>
            <div>
              <input
                className="input"
                type="text"
                value={input.img}
                name="img"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
        </header>
        <footer>
          <div className="set">
            <Link to="/home">
              <button id="back">Back</button>
            </Link>

            {!errors.model &&
            !errors.name &&
            !errors.price &&
            !errors.description &&
            !errors.material &&
            !errors.activity &&
            !errors.brand ? (
              !input.name ? null : (
                <button id="next" onClick={(e) => handleSubmit(e)}>
                  Upload
                </button>
              )
            ) : (
              <p className="danger">YOU HAVE ERRORS IN THE FORM</p>
            )}
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Create;
