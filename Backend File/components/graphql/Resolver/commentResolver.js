const Post = require("../../models/post");
const User = require("../../models/user");
const Comment = require("../../models/comment");

const commentResolver = {
  Query: {
    async getComment(_, { ID }) {
      try {
        const comment = await Comment.findById(ID)
          .populate("user_id")
          .populate("post_id");
        if (!comment) {
          throw new Error("No Comment Found");
        }
        return comment;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createComment(_, { comment }) {
      const user = await User.findById(comment.user_id);
      if (!user) {
        throw new Error("User not found");
      }
      const post = await Post.findById(comment.post_id);
      if (!post) {
        throw new Error("Post not found");
      }
      const comments = await Comment.create(comment);
      post.comments.push(comments._id);
      await post.save();

      return comments;
    },
    async updateComment(_, { ID, comment }) {
      const commentfind = await Comment.findById(ID);
      if (!commentfind) {
        throw new Error("No Comment found");
      }
      const updated = (
        await Comment.updateOne(
          {
            _id: ID,
          },
          {
            $set: comment,
          }
        )
      ).modifiedCount;
      return updated;
    },
    async deleteComment(_, { ID }) {
      const id = ID;
      const comment = await Comment.findById(ID);
      if (!comment) {
        throw new Error("No Comment found");
      }
      const deleted = (await Comment.deleteOne({ _id: ID })).deletedCount;
      if (deleted) {
        await Post.updateOne(
          { _id: comment.post_id },
          { $pull: { comments: id } }
        );
        return deleted;
      } else {
        throw new Error("Deleted unsuccessfull");
      }
    },
  },
};

module.exports = commentResolver;
