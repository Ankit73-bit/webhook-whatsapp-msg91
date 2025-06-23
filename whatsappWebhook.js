const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/webhook/whatsapp", (req, res) => {
  // const payload = req.body;

  // const senderName =
  //   payload.customer_name || payload.contacts?.[0]?.profile?.name;
  // const senderNumber = payload.contacts?.[0]?.wa_id;
  // const messageText = payload.messages?.[0]?.text?.body;
  // const timestamp = payload.received_at;

  // console.log(
  //   `📨 ${senderName} (${senderNumber}) said: "${messageText}" at ${timestamp}`
  // );

  res.status(200).json({ response: "success" });
});

app.listen(PORT, () => {
  console.log(`🚀 Webhook server listening on port ${PORT}`);
});
