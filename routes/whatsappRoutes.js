import express from "express";
import {
  receiveMessage,
  getAllMessages,
} from "../controllers/whatsappController.js";

const router = express.Router();

router.post("/webhook/whatsapp", receiveMessage);
router.get("/messages", getAllMessages);

export default router;
