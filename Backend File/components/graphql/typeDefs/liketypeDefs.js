const gql = require("graphql-tag");

module.exports = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    username: String!
  }
  type Post {
    id: ID!
    caption: String!
    user_id: User!
    # image: Image
  }
  type Like {
    id:ID
    user_id: User!
    post_id: Post!
    created_at: String!
  }

  input LikeInput{
    user_id:ID
    post_id:ID
  }

  type Query{
    getLike(ID: ID!): Like!
  }

  type Mutation{
    createLike(likeInput: LikeInput!): Like!
    deleteLike(ID:ID!): Boolean
  }
`;
