const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User Information",
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment Information",
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like Information",
    },
  ],
});

const Post = mongoose.model("Post Information", PostSchema);
module.exports = Post;
