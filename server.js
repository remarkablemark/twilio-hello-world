const app = require('express')();
const bodyParser = require('body-parser');
const { createServer } = require('http');
const debug = require('debug')(require('./package.json').name);
const { twiml } = require('twilio');

app.use(bodyParser.urlencoded({ extended: true }));

const { MessagingResponse } = twiml;

/**
 * GET /
 */
app.get('/', (req, res) => {
  res.send('OK');
});

/**
 * POST /sms
 */
app.post('/sms', (req, res) => {
  const { SmsSid, SmsStatus, Body } = req.body;
  debug(req.body);
  const twiml = new MessagingResponse();
  twiml.message(`SID: ${SmsSid}, Status: ${SmsStatus}, Body: ${Body}`);
  res.set('Content-Type', 'text/xml');
  res.end(twiml.toString());
});

const port = process.env.PORT || 8080;

createServer(app).listen(port, () => {
  debug(`Express server listening on port ${port}`);
});
