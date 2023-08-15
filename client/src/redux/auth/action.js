import {
  SIGN_IN,
  SIGN_OUT,
  USER_LOADING,
  ADD_TO_CART,
  GET_USER,
  REGISTER,
  ERROR,
  REMOVE_CART_ITEM,
  CHANGE_QTY,
} from "./type";

export const signIn = (userData) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING, payload: true });

    //api grapql request later
    // first send data to api after success response then store it to local store
    const user1 = JSON.parse(localStorage.getItem("user"));
    let userCredentials;
    if (user1) {
      userCredentials = {
        name: user1.name,
        email: userData.email,
        cart: user1.cart,
      };
    } else {
      userCredentials = {
        name: "",
        email: userData.email,
        cart: { items: [] },
      };
    }
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(userCredentials));
    const user = JSON.parse(localStorage.getItem("user"));
    return dispatch({
      type: SIGN_IN,
      payload: user,
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
    dispatch({ type: USER_LOADING, payload: true });

    //api grapql request later
    // first send data to api after success response then store it to local store
    const user1 = JSON.parse(localStorage.getItem("user"));
    let userCredentials;
    if (user1) {
      userCredentials = {
        name: user1.name,
        email: userData.email,
        cart: user1.cart,
      };
    } else {
      userCredentials = {
        name: userData.name,
        email: userData.email,
        cart: { items: [] },
      };
    }

    localStorage.setItem("user", JSON.stringify(userCredentials));
    const user = JSON.parse(localStorage.getItem("user"));
    return dispatch({
      type: REGISTER,
      payload: user,
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
    // first send data to api after success response then remove data from local store
    localStorage.removeItem("user");
    dispatch({ type: USER_LOADING, payload: true });
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

export const addToCart = (cart) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING, payload: true });

    // first send data to api after success response then store it to local store

    const user1 = JSON.parse(localStorage.getItem("user"));
    let userCredentials = { name: "", email: "", cart: { items: cart } };

    if (user1) {
      userCredentials = {
        ...user1,
        cart: { items: cart },
      };
    }

    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(userCredentials));
    const user = JSON.parse(localStorage.getItem("user"));

    return dispatch({
      type: ADD_TO_CART,
      payload: user,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const getUser = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING, payload: true });

    // first get user  from api after success response then store it to local store

    const user = JSON.parse(localStorage.getItem("user"));

    return dispatch({
      type: GET_USER,
      payload: user,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const changeItemQyty = (itemId, newQty) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING, payload: true });

    const user = JSON.parse(localStorage.getItem("user"));

    const updatedCart = user.cart.items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          qty: newQty,
        };
      }
      return item; // Return unchanged items
    });

    const updatedUser = {
      ...user,
      cart: {
        ...user.cart,
        items: updatedCart,
      },
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    return dispatch({
      type: CHANGE_QTY,
      payload: updatedUser,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const removeItemFromCart = (itemId) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOADING, payload: true });

    const user = JSON.parse(localStorage.getItem("user"));

    const updatedCart = user.cart.items.filter((item) => item.id !== itemId);

    const updatedUser = {
      ...user,
      cart: {
        ...user.cart,
        items: updatedCart,
      },
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    return dispatch({
      type: REMOVE_CART_ITEM,
      payload: updatedUser,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
