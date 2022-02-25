const express = require('express');
const path = require('path');

const app = express();
app.listen(3000);

app.get('/run', (req, res) => {
  res.sendFile(path.join(__dirname, '/video.html'));
});
