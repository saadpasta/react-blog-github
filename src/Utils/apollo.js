import ApolloClient from "apollo-boost";

import { config } from '../config'

export const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${atob(config.githubConvertedToken)}`
      }
    });
  }
});

export const userClient = (token) => new ApolloClient({
  uri: "https://api.github.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  }
});