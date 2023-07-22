const gql = require("graphql-tag");

module.exports = gql`
  type Post {
    id: ID!
    caption: String!
  }
  type Like {
    id: ID!
    user_id: User!
    post_id: Post!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    username: String!
    posts: [Post]!
    likes: [Like]!
  }

  type UserToken {
    id: ID!
    name: String!
    email: String!
    password: String!
    username: String!
    token: String!
  }

  input UserInput {
    name: String
    email: String!
    password: String!
    username: String
  }

  type Query {
    getUser(ID: ID!): User!
  }

  type Mutation {
    registerUser(userInput: UserInput): UserToken!
    loginUser(userInput: UserInput): UserToken!
    deleteUser(ID:ID!): Boolean
  }
`;
