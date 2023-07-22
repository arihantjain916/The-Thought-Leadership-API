const mongoose = require("mongoose");
const LikeSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User Information",
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post Information",
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Like = mongoose.model("Like Information", LikeSchema);
module.exports = Like;
