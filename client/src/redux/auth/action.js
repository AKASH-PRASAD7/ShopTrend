import {
  SIGN_IN,
  SIGN_OUT,
  LOADING,
  ADD_TO_CART,
  REGISTER,
  ERROR,
} from "./type";

export const signIn = (userData) => async (dispatch) => {
  try {
    dispatch({ type: LOADING, payload: true });

    //api grapql request later
    return dispatch({
      type: SIGN_IN,
      payload: userData,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: LOADING, payload: true });

    //api grapql request later
    return dispatch({
      type: REGISTER,
      payload: userData,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const signOut = () => (dispatch) => {
  try {
    dispatch({ type: LOADING, payload: true });
    return dispatch({
      type: SIGN_OUT,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const addToCart = (cartData) => async (dispatch) => {
  try {
    dispatch({ type: LOADING, payload: true });

    localStorage.setItem("cart", JSON.stringify(cartData));
    const cart = JSON.parse(localStorage.getItem("cart"));

    return dispatch({
      type: addToCart,
      payload: cart,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
