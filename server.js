// whatsappWebhook.js
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import whatsappRoutes from "./routes/whatsappRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use("/", whatsappRoutes);

// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Webhook server listening on port ${PORT}`);
  });
});
