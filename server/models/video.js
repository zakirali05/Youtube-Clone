const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    thumbnail: {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
    video: {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    genre: [{ type: String, required: true }],
    channel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel",
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
    commentDetails: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", videoSchema);
module.exports = Video;
