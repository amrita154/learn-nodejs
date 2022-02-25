const express = require('express');
const path = require('path');

const app = express();
app.listen(process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);

app.get('/run/:channelName', (req, res) => {
  console.log(__dirname + '/video.html');
  res.render(__dirname + '/video.html', {
    name: req.params.channelName,
  });
});
