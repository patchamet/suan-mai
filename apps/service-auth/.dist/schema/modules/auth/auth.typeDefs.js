import { gql } from "graphql-tag";
export const typeDefs = gql `
  type User {
    id: ID!
    username: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    _empty: String
  }

  type Mutation {
    signUp(username: String!, password: String!): AuthPayload!
    signIn(username: String!, password: String!): AuthPayload!
  }
`;
