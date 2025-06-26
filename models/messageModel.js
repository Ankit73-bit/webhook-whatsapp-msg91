import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderName: String,
  senderNumber: String,
  messageText: String,
  timestamp: String,
});

export default mongoose.model("Message", messageSchema);
