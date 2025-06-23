const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/webhook/whatsapp", (req, res) => {
  const messageData = req.body;

  console.log("📩 Incoming WhatsApp Message:");
  console.log(JSON.stringify(messageData, null, 2));

  // TODO: Add processing logic here

  res.status(200).json({ response: "success" });
});

app.listen(PORT, () => {
  console.log(`🚀 Webhook server listening on port ${PORT}`);
});
