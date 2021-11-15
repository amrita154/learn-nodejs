// const request = require("request");
// const { getCurrentWeatherURL } = require("./utils");


// request({ url: getCurrentWeatherURL("query=India") }, (err,response)=>{
//     console.log(response.body);
// })


const http = require("http");
const { getCurrentWeatherURL } = require("./utils");

const request=http.request(getCurrentWeatherURL("query=India"), (response)=>{
    response.on('data', (chunk) => {
        console.log(chunk.toString());
    })
    response.on('end', () => {
        
    })
})

request.end();