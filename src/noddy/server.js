'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

let message = process.env.HELLO;
if(!message) {
  message = 'I have nothing good to say';
}

// App
const app = express();
app.get('/', (req, res) => {
  res.send(message);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);