/* eslint-disable no-unused-vars */
import { ActionTypes } from "./action_type";
import Api from "../../api/Api";

// FETCH PRODUCTS
export const fetchProducts = () => async (dispatch) => {
  const response = await Api.get("/products");
  dispatch({
    type: ActionTypes.FETCH_PRODUCTS,
    payload: response.data,
  });
};

/**  FETCH SINGLE PRODUCT */

export const fetchProduct = (id) => async (dispatch) => {
  const response = await Api.get(`/products/${id}`);
  console.log(response.data);
  dispatch({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: response.data,
  });
};

/*
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
*/

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
