const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  sender_id: {
    type: String,
    required: true,
    min: 8,
    max: 255,
  },
  receiver_id: {
    type: String,
    required: true,
    max: 255,
    min: 8,
  },
  message: {
    type: String,
    required: true,
    min: 1,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Chat", chatSchema);
