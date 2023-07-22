const mongoose = require("mongoose");
const FollowSchema = new mongoose.Schema({
  follower_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User Information",
  },
  following_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User Information",
  },
});

const Follow = mongoose.model("Follow Information", FollowSchema);
module.exports = Follow;
