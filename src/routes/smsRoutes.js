const express = require("express");
const SmsController = require("../controllers/smsController");

const router = express.Router();

// Ruta para enviar SMS
router.post("/send-sms", SmsController.sendSms);

module.exports = router; 
