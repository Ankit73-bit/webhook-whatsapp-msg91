import Message from "../models/messageModel.js";

export const receiveMessage = async (req, res) => {
  const payload = req.body;

  const senderName =
    payload.customer_name || payload.contacts?.[0]?.profile?.name;
  const senderNumber = payload.contacts?.[0]?.wa_id;
  const messageText = payload.messages?.[0]?.text?.body;
  const timestamp = payload.received_at;

  console.log(
    `📨 ${senderName} (${senderNumber}) said: "${messageText}" at ${timestamp}`
  );

  try {
    await Message.create({
      senderName,
      senderNumber,
      messageText,
      timestamp,
    });
    res.status(200).json({ response: "success" });
  } catch (err) {
    console.error("❌ Error saving message:", err);
    res.status(500).json({ response: "error", error: err.message });
  }
};

export const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};
