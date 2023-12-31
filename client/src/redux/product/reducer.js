import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAILS,
  ERROR,
  GET_FILTER_PRODUCTS,
  PAGE,
  GET_SORTED_PRODUCTS,
  LOADING,
} from "./type";

const initialState = {
  loading: false,
  error: null,
  products: [],
  productDetails: {
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  },
  page: 1,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: payload,
        error: null,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: payload,
        error: null,
      };

    case GET_FILTER_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: payload,
        error: null,
      };

    case GET_SORTED_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: payload,
        error: null,
      };
    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        loading: false,
        productDetails: payload,
        error: null,
      };

    case PAGE:
      return {
        ...state,
        loading: false,
        page: state.page + payload,
        error: null,
      };

    case ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
