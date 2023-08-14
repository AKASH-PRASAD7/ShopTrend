import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAILS,
  ERROR,
  GET_FILTER_PRODUCTS,
  PAGE,
  GET_SORTED_PRODUCTS,
  LOADING,
} from "./type";

export const getAllProducts = (skip) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
      payload: true,
    });

    const response = await fetch(
      `https://dummyjson.com/products?limit=10&${skip}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: data.products,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
      payload: true,
    });

    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (!response.ok) {
      throw new Error("Failed to get product details");
    }
    const data = await response.json();
    return dispatch({
      type: GET_PRODUCT_DETAILS,
      payload: data,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const getFilterProducts = (filter) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
      payload: true,
    });

    //fetch from graphql api

    const response = await fetch(
      `https://dummyjson.com/products/category/${filter[0]}`
    );
    if (!response.ok) {
      throw new Error("Failed to filter products");
    }
    const data = await response.json();

    return dispatch({
      type: GET_FILTER_PRODUCTS,
      payload: data.products,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const getSortedProducts = (sort) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
      payload: true,
    });
    //fetch from graphql api
    // const response = await fetch(
    //   `https://dummyjson.com/products/category/${sort}`
    // );
    // if (!response.ok) {
    //   throw new Error("Failed to filter products");
    // }
    // const data = await response.json();
    return dispatch({
      type: GET_SORTED_PRODUCTS,
      payload: data.products,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const changePage = (pageValue) => (dispatch) => {
  return dispatch({
    type: PAGE,
    payload: pageValue,
  });
};
