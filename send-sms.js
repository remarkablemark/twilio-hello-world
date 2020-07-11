require('dotenv').config();

const twilio = require('twilio');
const { name } = require('./package');
const debug = require('debug')(name);

const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  FROM_PHONE_NUMBER,
  TO_PHONE_NUMBER,
} = process.env;

debug('Account SID:', TWILIO_ACCOUNT_SID);
debug('Auth Token:', Array(TWILIO_AUTH_TOKEN.length).join('*'));
debug('From:', FROM_PHONE_NUMBER);
debug('To:', TO_PHONE_NUMBER);

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

(async function() {
  try {
    const message = await client.messages.create({
      body: 'Hello, world!',
      from: FROM_PHONE_NUMBER,
      to: TO_PHONE_NUMBER,
    });
    debug(message);
  } catch (error) {
    debug(error);
  }
})();
