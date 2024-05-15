const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String!
    name: String!
    bio: String
  }

  type Query {
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    createUser(username: String!, name: String!, bio: String): User
    updateUser(username: String!, name: String, bio: String): User
    deleteUser(username: String!): User
  }
`;

module.exports = typeDefs;


