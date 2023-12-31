const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('Server started at ' + port);