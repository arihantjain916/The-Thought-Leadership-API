const gql = require("graphql-tag");

module.exports = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    username: String!
  }
  type Message {
    message: String!
  }

  input FollowInput {
    follower_id: ID!
    following_id: ID!
  }

  type Mutation {
    follow(followInput: FollowInput!): Message
    unfollow(followInput: FollowInput!): Message!
  }
`;
