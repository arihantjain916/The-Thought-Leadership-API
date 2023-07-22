const Post = require("../../models/post");
const User = require("../../models/user");
const Like = require("../../models/like");

const LikeResolver = {
  Query: {
    async getLike(_, { ID }) {
      try {
        const like = await Like.findById(ID)
          .populate("user_id")
          .populate("post_id");
        if (!like) {
          throw new Error("No like Found");
        }
        return like;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createLike(_, { likeInput }) {
      const user = await User.findById(likeInput.user_id);
      if (!user) {
        throw new Error("User not found");
      }
      const post = await Post.findById(likeInput.post_id);
      if (!post) {
        throw new Error("Post not found");
      }
      const like = await Like.create(likeInput);
      post.likes.push(like._id);
      user.likes.push(like._id);
      await post.save();
      await user.save();

      return like;
    },
    async deleteLike(_, { ID }) {
      const id = ID;
      const like = await Like.findById(ID);
      const deleted = (await Like.deleteOne({ _id: ID })).deletedCount;
      if (deleted) {
        await Post.updateOne({ _id: like.post_id }, { $pull: { likes: id } });
        return deleted;
      } else {
        throw new Error("Deleted unsuccessfull");
      }
    },
  },
};

module.exports = LikeResolver;
