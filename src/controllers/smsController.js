const SmsService = require("../services/smsService");

class SmsController {
    async sendSms(req, res) {
        const { phone, message } = req.body;

        if (!phone || !message) {
            return res.status(400).json({ error: "Número y mensaje son obligatorios" });
        }

        const result = await SmsService.sendSms(phone, message);

        if (result.success) {
            res.json(result);
        } else {
            res.status(400).json(result);
        }
    }
}

module.exports = new SmsController();
