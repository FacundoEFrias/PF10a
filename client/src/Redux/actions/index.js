import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_ID,
  GET_ALL_PRODUCTS_NAME,
  POST_NEW_PRODUCTS,
  SET_FILTERED_PRODUCTS,
  CREATE_NEW_USER,
  UPDATE_USER,
  SEARCH_USER,
  GET_ALL_USERS,
  SET_CURRENT_PAGE,
  SET_BANNED_PRODUCT,
  SET_FEATURED_PRODUCT,
  SET_PRIVILEGE_USER,
  SET_STATUS_USER,
  UPDATE_ADDRESS,
  GET_ALL_BILLS,
  CREATE_NEW_REVIEWS,
  GET_ALL_REVIEWS,
  UPDATE_STOCK,
  SET_ACTIVE_BILLS

} from "../actions-types/index.js";
const { REACT_APP_GET_ALL_PRODUCTS } = process.env;
import axios from "axios";

const url = "https://pf10a-production.up.railway.app";

//const url = 'http://localhost:3001'

export function getAllProducts(categoria) {
  return async function(dispatch) {
    try {
      const response = await axios.get(`${url}/products/`);

      return dispatch({
        type: GET_ALL_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllProductsId(id) {
  return async function(dispatch) {
    try {
      const response = await axios.get(`${url}/products/${id}`);
      return dispatch({
        type: GET_ALL_PRODUCTS_ID,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllProductsName(name) {
  return async function(dispatch) {
    try {
      const response = await axios.get(`${url}/search/?name=${name}`);

      return dispatch({
        type: GET_ALL_PRODUCTS_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postProducts(payload) {
  return async function(dispatch) {
    const response = await axios.post(`${url}/products/create`, payload);
    return dispatch({
      type: POST_NEW_PRODUCTS,
      payload: response.data,
    });
  };
}

export function FilteredProducts(query) {
  return async function(dispatch) {
    const response = await axios.get(`${url}/filtrado`, {
      params: query,
    });
    dispatch({
      type: SET_FILTERED_PRODUCTS,
      payload: response.data,
    });
  };
}
export function createNewUser(given_name, family_name, email, picture) {
  return async function(dispatch) {
    try {
      const response = await axios.post(`${url}/users/create/`, {
        given_name,
        family_name,
        email,
        picture,
      });
      dispatch({
        type: CREATE_NEW_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function updateUser(
  email,
  first_name,
  last_name,
  nationality,
  date_birth,
  mobile,
  address
) {
  return async function(dispatch) {
    try {
      const response = await axios.put(
        `${url}/users/modify/${email.email}`,
        first_name,
        last_name,
        nationality,
        date_birth,
        mobile,
        address,
      );
      dispatch({
        type: UPDATE_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function searchUser(email) {
  return async function(dispatch) {
    try {
      const response = await axios.put(`${url}/users/modify/${email}`);
      dispatch({
        type: SEARCH_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getAllUsers() {
  return async function(dispatch) {
    try{
      const response = await axios.get(`${url}/users`)
    dispatch({
      type: GET_ALL_USERS,
      payload: response.data
    })
    }catch(error){
      console.log(error);
    }
}
}
export function setCurrentPage(payload){
  return {
    type: SET_CURRENT_PAGE,
    payload
  }
}

export function setReviewButton(payload){
  return {
    type: SET_ACTIVE_BILLS,
    payload
  }
}
export function setBannedProduct(id){

 
  return async function(dispatch){
    try {
      const response = await axios.get(`${url}/users`);
      dispatch({
        type: GET_ALL_USERS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function setFeaturedProduct(id) {
  return async function(dispatch) {
    try {
      const response = await axios.put(`${url}/products/featured/${id}`);
      dispatch({
        type: SET_FEATURED_PRODUCT,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
export function setPrivilegeUser(id) {
  return async function(dispatch) {
    try {
      const response = await axios.put(`${url}/users/privilege/${id}`);
      dispatch({
        type: SET_PRIVILEGE_USER,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
export function setStatusUser(email) {
  return async function(dispatch) {
    try {
      const response = await axios.put(`${url}/users/disable/${email}`);
      dispatch({
        type: SET_STATUS_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateAddres(email, address) {
  return async function(dispatch) {
    try {
      const response = await axios.put(
        `${url}/users/address/${email}`,
        address
      );
      dispatch({
        type: UPDATE_ADDRESS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllBills() {
  return async function(dispatch) {
    try {
      const response = await axios.get(`${url}/bills/`);

      return dispatch({
        type: GET_ALL_BILLS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllReviews() {
  return async function(dispatch) {
    try {
      const response = await axios.get(`${url}/reviews`);
      return dispatch({
        type: GET_ALL_REVIEWS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postReviews (comment, rating, firstName, productName) {
  console.log(comment, rating, firstName, productName)
  return async function (dispatch){

    try {
      const response = await  axios.post(`${url}/reviews/create`, comment, rating, firstName, productName);
      return dispatch({
        type: CREATE_NEW_REVIEWS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function stockProducts(payload) {
  return async function(dispatch) {
    try {
      const response = await axios.put(
        `${url}/products/modify/${payload.productsID}`,
        payload
      );
      return dispatch({
        type: UPDATE_STOCK,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
