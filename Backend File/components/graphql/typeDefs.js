const UsertypeDefs = require("./typeDefs/usertypeDefs");
const PosttypeDefs = require("./typeDefs/posttypeDefs");
const CommenttypeDefs = require("./typeDefs/commenttypeDefs");
const LiketypeDefs = require("./typeDefs/liketypeDefs");
const FollowtypeDefs = require("./typeDefs/followtypeDefs");

const typeDef = [
  UsertypeDefs,
  PosttypeDefs,
  CommenttypeDefs,
  LiketypeDefs,
  FollowtypeDefs,
];

module.exports = typeDef;
