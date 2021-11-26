const express = require('express');

const app = express();
app.listen(3000);

app.get("/weather/current", (req, res) => {
    if (!req.query.location) {
        res.send({ error: "please send location to get the current weather" });
    }
    else {
        
    }
})