import {
  SIGN_IN,
  SIGN_OUT,
  USER_LOADING,
  REGISTER,
  GET_USER,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CHANGE_QTY,
  ERROR,
} from "./type";

const initalState = {
  cart: { items: [] },
  name: "",
  email: "",
  password: "",
  loading: false,
  error: null,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: action.payload,
        error: null,
      };
    case SIGN_IN:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null,
      };
    case GET_USER:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null,
      };
    case REGISTER:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null,
      };
    case SIGN_OUT:
      return initalState;

    case ADD_TO_CART:
      return {
        ...state,
        ...action.payload,
        error: null,
        loading: false,
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        ...action.payload,
        error: null,
        loading: false,
      };
    case CHANGE_QTY:
      return {
        ...state,
        ...action.payload,
        error: null,
        loading: false,
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
