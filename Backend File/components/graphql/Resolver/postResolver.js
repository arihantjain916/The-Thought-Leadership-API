const Post = require("../../models/post");
const User = require("../../models/user");
const Like = require("../../models/like");
const Comment = require("../../models/comment")

const PostResolver = {
  Query: {
    async getPost(_, { ID }) {
      const post = await Post.findById(ID).populate("user_id");
      if (!post) {
        throw new Error("Post not found");
      }
      return post;
    },
  },
  Mutation: {
    async createPost(_, { PostInput }) {
      const user = await User.findById(PostInput.user_id);
      if (!user) {
        throw new Error("User not found");
      }
      const post = await Post.create(PostInput);

      user.posts.push(post._id);

      await user.save();
      return post;
    },
    async deletePost(_, { ID }) {
      const post = Post.findById(ID);
      if (!post) {
        throw new Error("No Post found");
      }
      const deleted = (await Post.deleteOne({ _id: ID })).deletedCount;
      if (deleted) {
        await Comment.deleteMany({ post_id: ID });
        await Like.deleteMany({ post_id: ID });
        return deleted;
      } else {
        throw new Error("Deleted unsuccessfull");
      }
    },
  },
};

module.exports = PostResolver;
