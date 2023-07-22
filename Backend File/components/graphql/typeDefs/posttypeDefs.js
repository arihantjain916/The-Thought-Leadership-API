const gql = require("graphql-tag");
module.exports = gql`
scalar Upload
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    username: String!
  }
  # type Image {
  #   url:String
  # }
  type Post {
    id: ID!
    caption: String!
    user_id: User!
    # image: Image
  }

  input PostInput {
    caption: String
    user_id: ID
  }

  type Query {
    getPost(ID: ID!): Post!
  }

  type Mutation {
    createPost(PostInput: PostInput): Post!
    deletePost(ID:ID!): Boolean
  }
`;
