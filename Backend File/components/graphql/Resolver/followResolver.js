const User = require("../../models/user");
const Follow = require("../../models/follow");

const FollowResolver = {
  Mutation: {
    async follow(_, { followInput }) {
      const follower = await User.findById(followInput.follower_id);
      const following = await User.findById(followInput.following_id);

      if (!follower) {
        throw new Error("User not found!");
      }
      if (!following) {
        throw new Error("The user you want not found!");
      }
      //   await Follow.create(followInput);
      follower.follows.push(followInput.following_id);
      await follower.save();
      const message = "User followed";
      return { message: message };
    },
    async unfollow(_, { followInput }) {
      const { follower_id, following_id } = followInput;
      await User.updateOne(
        { _id: follower_id },
        { $pull: { follows: following_id } },
        { new: true }
      );
      return { message: "User unfollowed" };
    },
  },
};

module.exports = FollowResolver;
