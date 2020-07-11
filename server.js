const { createServer } = require('http');
const express = require('express');
const twilio = require('twilio');
const { name } = require('./package');
const debug = require('debug')(name);

const app = express();
const { MessagingResponse } = twilio.twiml;

app.post('/sms', async (req, res) => {
  const twiml = new MessagingResponse();
  twiml.message('Hello, world!');
  res.set('Content-Type', 'text/xml');
  res.end(twiml.toString());
});

const port = process.env.PORT || 8080;

createServer(app).listen(port, () => {
  debug(`Express server listening on port ${port}`);
});
