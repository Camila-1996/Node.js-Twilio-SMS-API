require("dotenv").config();

module.exports = {
    port: process.env.PORT || 3000,
    textbeltKey: process.env.TEXTBELT_KEY || "textbelt",
    twilioAccountSid: "1111",
    twilioAuthToken: "11",
    twilioPhoneNumber: "+11111"
};
