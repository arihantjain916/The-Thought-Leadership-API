const UserResolver = require("./Resolver/userResolver");
const PostResolver = require("./Resolver/postResolver");
const CommentResolver = require("./Resolver/commentResolver");
const LikeResolver = require("./Resolver/likeResolver");
const FollowResolver = require("./Resolver/followResolver");
const { merge } = require("lodash");

const resolvers = merge(
  UserResolver,
  PostResolver,
  CommentResolver,
  LikeResolver,
  FollowResolver
);

module.exports = resolvers;
