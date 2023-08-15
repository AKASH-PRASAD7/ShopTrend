import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAILS,
  ERROR,
  GET_FILTER_PRODUCTS,
  PAGE,
  GET_SORTED_PRODUCTS,
  LOADING,
} from "./type";

import {
  GET_PRODUCTS,
  SEARCH_PRODUCTS,
  GET_PRODUCT_BY_ID,
} from "../../query/queries";
import client from "../../query/client";

export const getAllProducts = () => async (dispatch) => {
  try {
    const { loading, error, data } = await client.query({
      query: GET_PRODUCTS,
    });
    if (loading) {
      dispatch({
        type: LOADING,
        payload: true,
      });
    }

    if (error) {
      throw new Error(error.message);
    }

    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: data.productDetailsCollection.edges,
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
    const { loading, error, data } = await client.query({
      query: GET_PRODUCT_BY_ID,
      variables: {
        id,
      },
    });
    if (loading) {
      dispatch({
        type: LOADING,
        payload: true,
      });
    }

    if (error) {
      throw new Error(error.message);
    }

    return dispatch({
      type: GET_PRODUCT_DETAILS,
      payload: data.productDetails,
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
    const filterString = filter.join(",");

    const { loading, error, data } = await client.query({
      query: SEARCH_PRODUCTS,
      variables: {
        input: filterString,
      },
    });
    if (loading) {
      dispatch({
        type: LOADING,
        payload: true,
      });
    }

    if (error) {
      throw new Error(error.message);
    }

    return dispatch({
      type: GET_FILTER_PRODUCTS,
      payload: data.productDetailsSearch.edges,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const getSortedProducts = (products, sort) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
      payload: true,
    });
    if (sort === "Best Rating") {
      const productsSortedByRating = products
        .slice()
        .sort((a, b) => b.node.rating - a.node.rating);
      return dispatch({
        type: GET_SORTED_PRODUCTS,
        payload: productsSortedByRating,
      });
    }
    if (sort === "Price: Low to High") {
      const productsSortedByPrice = products
        .slice()
        .sort((a, b) => a.node.price - b.node.price);
      return dispatch({
        type: GET_SORTED_PRODUCTS,
        payload: productsSortedByPrice,
      });
    }
    if (sort === "Price: High to Low") {
      const productsSortedByPriceDescending = products
        .slice()
        .sort((a, b) => b.node.price - a.node.price);
      return dispatch({
        type: GET_SORTED_PRODUCTS,
        payload: productsSortedByPriceDescending,
      });
    }
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
