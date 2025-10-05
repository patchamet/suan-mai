import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Item {
    id: ID!
    name: String!
    description: String
  }

  input CreateItemInput {
    name: String!
    description: String
  }

  input UpdateItemInput {
    name: String
    description: String
  }

  type Query {
    items: [Item!]!
    item(id: ID!): Item
  }

  type Mutation {
    createItem(input: CreateItemInput!): Item!
    updateItem(id: ID!, input: UpdateItemInput!): Item!
    deleteItem(id: ID!): Item!
  }
`;
