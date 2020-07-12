# twilio-hello-world

This is a demo [Twilio](https://www.twilio.com/) project following the tutorials:

- [Programmable SMS Quickstart for Node.js](https://www.twilio.com/docs/sms/quickstart/node)
- [Receive and Reply to SMS and MMS Messages in Node.js](https://www.twilio.com/docs/sms/tutorials/how-to-receive-and-reply-node-js)

## Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/get-npm)
- [Twilio account with project and number](https://www.twilio.com/console)

## Install

Clone the repository:

```sh
git clone https://github.com/remarkablemark/twilio-hello-world.git
cd twilio-hello-world
```

Install the dependencies:

```sh
npm install
```

## Send SMS

Set the environment variables for your Twilio account SID, auth token, and your from and to phone numbers:

```sh
cp env .env
```

You can get the information from your [Twilio project dashboard](https://www.twilio.com/console):

```sh
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
FROM_PHONE_NUMBER=
TO_PHONE_NUMBER=
```

To send an SMS message, run the script:

```sh
npm run send-sms
```

## Receive SMS

Start the server by running:

```sh
npm start
```

Expose the server to the public with [ngrok](https://ngrok.com/):

```sh
ngrok http 8080
```

Then go to [`Phone Numbers` / `Manage Numbers`](https://www.twilio.com/console/phone-numbers/incoming) and click the active number.

Go to `Active Numbers` / `Messaging` and configure the webhook by replacing `https://demo.twilio.com/welcome/sms/reply/` with the ngrok forwarding URL (e.g., `https://abc123.ngrok.io`).

Send an SMS text message to your Twilio phone number and you should get a response.

## License

[MIT](LICENSE)
