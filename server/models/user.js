const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  avatar: {
    public_id: { type: String, required: true },
    url: { type: String, required: true },
  },
  emailaddress: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  channels: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel",
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
