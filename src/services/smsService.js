const axios = require("axios");
const { textbeltKey } = require("../config/envConfig");
const { twilioAccountSid, twilioAuthToken, twilioPhoneNumber } = require("../config/envConfig");


class SmsService {
    async sendSms(phone, message) {
        try {
            const url = `https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`;

            const params = new URLSearchParams();
            params.append("To", phone);
            params.append("From", twilioPhoneNumber); // Tu número Twilio
            params.append("Body", message);

            const response = await axios.post(url, params, {
                auth: {
                    username: twilioAccountSid,
                    password: twilioAuthToken
                }
            });

            if (response.status === 201) {
                return { success: true, message: "Mensaje enviado correctamente", sid: response.data.sid };
            } else {
                return { success: false, error: "Error al enviar el mensaje" };
            }
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}

module.exports = new SmsService();
