const express = require('express');
const path = require('path');
const app = express();

let PORT = 8888;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, console.log(`Listening to PORT ${PORT}...`));