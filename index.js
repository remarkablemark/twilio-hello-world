require('dotenv').config();

const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  FROM_PHONE_NUMBER,
  TO_PHONE_NUMBER,
} = process.env;

console.log('Account SID:', TWILIO_ACCOUNT_SID);
console.log('Auth Token:', Array(TWILIO_AUTH_TOKEN.length).join('*'));
console.log('From:', FROM_PHONE_NUMBER);
console.log('To:', TO_PHONE_NUMBER);

const twilio = require('twilio');

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

(async function() {
  try {
    const message = await client.messages.create({
      body: 'Hello, world!',
      from: FROM_PHONE_NUMBER,
      to: TO_PHONE_NUMBER,
    });
    console.log(message);
  } catch (error) {
    console.error(error);
  }
})();
