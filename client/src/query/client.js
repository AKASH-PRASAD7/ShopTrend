import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/link-context";
const URL = import.meta.env.VITE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const httpLink = createHttpLink({
  uri: "https://shoptrend-grafbase-api-akash-prasad7.grafbase.app/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-api-key":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTIxMTM4MzUsImlzcyI6ImdyYWZiYXNlIiwiYXVkIjoiMDFIN1dYRzRWUkdSUzkwRzRZWlRYTkUzUkQiLCJqdGkiOiIwMUg3V1hHNTZBRzZGOURNTjUzQThERzRHRyIsImVudiI6InByb2R1Y3Rpb24iLCJwdXJwb3NlIjoicHJvamVjdC1hcGkta2V5In0.h6bsH6ehOXjl6ampHU06cv009rx0y_Gcj4Xv_hQtH1s",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
