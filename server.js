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
