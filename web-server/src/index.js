const { response } = require("express");
const express = require("express");
const { getCurrentWeather } = require("./utils");
const app = express();
app.listen(3000);

app.set('view engine', 'ejs');

app.get("", (req, res) => {
    res.render('home');
})

app.get("/weather/current",(req, res) => {
    if (!req.query.location) {
        return res.send({ error: "location should be there for current weather" });
    }
    else {
         getCurrentWeather(req.query.location, (err, response) => {
            if (err) {
                res.send({error:"location not available"})
            }
            else { 
                const data = JSON.parse(response.body);
                if (data.success!==false) {
                    const { weather_descriptions: desc = [], temperature: temp = 0 } = data.current;
                    res.send({
                        desc,
                        temp
                    })
                }
                else {
                     res.send({error:"location not available",data})
                }
            }
      })
    }
})