import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderName: String,
  senderNumber: String,
  messageText: String,
  timestamp: String,
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
