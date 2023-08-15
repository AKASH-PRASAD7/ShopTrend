import gql from "graphql-tag";
//querys
const GET_PRODUCTS = gql`
  query ProductDetailsCollection {
    productDetailsCollection(first: 10) {
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

const CREATE_USER = gql`
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
