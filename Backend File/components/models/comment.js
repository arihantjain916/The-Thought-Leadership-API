const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User Information",
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post Information",
  },
  created_at:{
    type : Date,
    default :Date.now()
  },
});

const Comment = mongoose.model("Comment Information", CommentSchema);
module.exports = Comment;
