import {
  SIGN_IN,
  SIGN_OUT,
  LOADING,
  REGISTER,
  ADD_TO_CART,
  ERROR,
} from "./type";

const initalState = {
  cart: {},
  name: "",
  email: "",
  password: "",
  loading: false,
  error: null,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case LOADING:
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
        cart: { ...action.payload },
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
