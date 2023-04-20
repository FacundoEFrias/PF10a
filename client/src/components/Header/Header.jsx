import React, { useState, useEffect } from "react";
import "./Header.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithubSquare,
  FaUserAlt,
  FaShoppingCart,
} from "react-icons/fa";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../img/logoPanda.png";
import Login from "../Login/Login.jsx";
import Logout from "../Logout/Logout.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../Redux/actions/index";
import { createContext } from "react";
import { BsFillCircleFill, BsFillMoonFill } from "react-icons/bs";
import ReactSwitch from "react-switch";

const Header = ({
  navigateToCategory,
  categories,
  countProducts,
  theme,
  setTheme,
  toggleTheme,
}) => {
  const location = useLocation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const datos = useSelector((e) => e.user);
  const { isAuthenticated, isLoading, user } = useAuth0();
  

  let perfil = null;

  try {
    perfil = datos.filter((obj) =>obj.email === user.email); // estoy matcheadn que el email de aut0 este en  la base de datos 
    
  } catch (error) {
    console.log('Esperando datos');
  }
  let isAdmin = null;
  
  try {
    isAdmin =datos.filter((obj)=>obj.email === user.email && obj.privilige === true);
    
     }
    catch (error) {
      console.log('Esperando datos');
    }

  

  const [dropActive, setDropActive] = useState(false);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <div></div>
      </div>
    );
  }

  function handleClick() {
    navigate(-1);
  }

  const rutaUrl = window.location.href;

  const isProductCategoryPage = categories.some(
    (category) => location.pathname === category.path
  );

  const scrollTop = () => {
    window.scroll(0, 0);
  };

  return (
    <div className="cntHeader">
      <Link to={"/"} onClick={() => scrollTop()}>
        <img src={Logo} alt="" className="imgLogo" />
      </Link>

      {/* {isProductCategoryPage && <SearchBar categories={categories} />} */}
      <div>
        {location.pathname !== "/" && <SearchBar categories={categories} />}
      </div>

      <Link to={"/Shop"} onClick={() => scrollTop()}>
        <button
          className={rutaUrl.includes("Shop") ? "btnHome active" : "btnHome"}
        >
          Shop
        </button>
      </Link>

      {!rutaUrl.includes("Shop") && !rutaUrl.includes("Products") ? (
        <>
          <a href="/#AboutUs" className="btnRedirectHome">
            About Us
          </a>
          <a href="/#OurValues" className="btnRedirectHome">
            Our Values
          </a>
          <a href="/#contacto" className="btnRedirectHome">
            Contact Us
          </a>
        </>
      ) : (
        <>
          <a href="/Shop#categoria" className="btnRedirectHome">
            Categorias
          </a>
          <a href="/Shop#marcas" className="btnRedirectHome">
            Marcas
          </a>
        </>
      )}

      {!isAuthenticated ? (
        <Login />
      ) : (
        <div
          onMouseOver={() => setDropActive(true)}
          onMouseOut={() => setDropActive(false)}
        >
          <button
            className={
              rutaUrl.includes("User")
                ? "btnUser active border border-white"
                : "btnUser"
            }
          >
            <FaUserAlt />
          </button>

          <div className={dropActive ? "drop-active" : "drop-null"}>
            {dropActive ? (
              <>
                <Link to="/User" className="text-decoration-none">
                  <a>Ver Perfil</a>
                </Link>
                <a class="dropdown-item" href="/ProfileBills">
                  Mis Compras
                </a>
                <a class="dropdown-item" href="/ProfileReview">
                  Mis Reviews
                </a>
                <a>
                  <Logout />
                </a>
                {isAdmin?.length ? <div class="">
                  <button
                    class="button-AdminManage dropdown-toggle ps-0"
                    id="bd-versions"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-display="static"
                  >
                    <span class="d-none d-lg-inline">Admin Console</span>
                  </button>
                  <ul
                    class="dropdown-menu dropdown-menu-end mt-0 pt-0"
                    aria-labelledby="bd-versions"
                  >
                    <li>
                      <a
                        class="dropdown-item text-black"
                        href="/ManageProfiles"
                      >
                        Manage Profiles
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-black"
                        href="/ManageProducts"
                      >
                        Manage Products
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item text-black" href="/ManageBills">
                        Manage Bills
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item text-black" href="/ManageReviews">
                        Manage Reviews
                      </a>
                    </li>
                  </ul>
                </div>: null}
              </>
            ) : null}
          </div>
        </div>
      )}
      {!isAuthenticated ? null : (
        <Link to={"/ShoppingCart"}>
          <button className="btnCarrt">
            <FaShoppingCart />
            <span className="notificacionCantidad badge rounded-pill bg-danger ">
              {countProducts}
            </span>
          </button>
        </Link>
      )}
      <div className="switch">
        {/* <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
        <ReactSwitch
          onChange={toggleTheme}
          checked={theme === "light"}
          offColor="#333"
          onColor="#ccc"
          onHandleColor="#000"
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                paddingRight: 2,
                color: "white",
              }}
            >
              <BsFillMoonFill />
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                paddingRight: 2,
                color: "yellow",
              }}
            >
              <BsFillCircleFill />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Header;
