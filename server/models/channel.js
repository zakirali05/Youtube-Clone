const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema({
  profileImage: {
    public_id: { type: String, required: true },
    url: { type: String, required: true },
  },
  profilePoster: {
    public_id: { type: String, required: true },
    url: { type: String, required: true },
  },
  channelName: {
    type: String,
    required: true,
  },
  channelDescription: {
    type: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  subscribers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
  totalView: {
    type: Number,
    default: 0,
  },
});

const Channel = mongoose.model("Channel", channelSchema);
module.exports = Channel;
