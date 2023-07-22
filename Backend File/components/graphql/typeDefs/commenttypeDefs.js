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
  type Comment {
    id:ID!
    comment: String!
    user_id: User!
    post_id: Post!
    created_at: String!
  }

  input CommentInput{
    comment:String!
    user_id:ID
    post_id:ID
  }

  type Query{
    getComment(ID: ID!): Comment!
  }

  type Mutation{
    createComment(comment: CommentInput!): Comment!
    updateComment(ID: ID! comment: CommentInput!): Boolean
    deleteComment(ID:ID!): Boolean
  }
`;
