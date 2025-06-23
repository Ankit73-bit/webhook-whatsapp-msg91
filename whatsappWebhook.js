// whatsapp-webhook.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

app.post("/webhook/whatsapp", (req, res) => {
  const messageData = req.body;

  console.log("📩 Incoming WhatsApp Message:");
  console.log(JSON.stringify(messageData, null, 2));

  // Example: Extract message details
  const from = messageData.mobile;
  const message = messageData.message;

  // Log or process it as needed
  // e.g., save to DB, trigger bot, auto-reply, etc.

  res.status(200).send("Received");
});

app.listen(PORT, () => {
  console.log(
    `🚀 WhatsApp Webhook listening on http://localhost:${PORT}/webhook/whatsapp`
  );
});
