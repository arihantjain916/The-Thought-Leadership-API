const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: [true, "Username must be unique"],
  },
  email: {
    type: String,
    unique: true,
    require: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  created_at:{
    type : Date,
    default :Date.now()
  },
  password: {
    type: String,
    required: true,
  },
  posts: [
    {
      type:mongoose.Schema.Types.ObjectId,
      ref: "Post Information",
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like Information",
    },
  ],
  follows: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Follow Information",
    },
  ],
});

const User = mongoose.model("User Information", UserSchema);
module.exports = User;
