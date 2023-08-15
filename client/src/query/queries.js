import gql from "graphql-tag";
//querys
export const GET_PRODUCTS = gql`
  query ProductDetailsCollection {
    productDetailsCollection(first: 15) {
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          title
          description
          price
          discountPercentage
          rating
          brand
          thumbnail
          category
          id
          images
        }
      }
    }
  }
`;

//get product by id
export const GET_PRODUCT_BY_ID = gql`
  query ProductDetails($id: ID) {
    productDetails(by: { id: $id }) {
      title
      description
      price
      discountPercentage
      rating
      brand
      thumbnail
      category
      id
      images
    }
  }
`;

//search Products
export const SEARCH_PRODUCTS = gql`
  query ProductDetailsSearch($input: String) {
    productDetailsSearch(query: $input, first: 30) {
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          title
          description
          price
          discountPercentage
          rating
          brand
          thumbnail
          category
          id
          images
        }
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation UserCreate {
    userCreate(
      input: { name: "John Doe", email: "john@email.com", password: "1234" }
    ) {
      user {
        name
      }
    }
  }
`;
