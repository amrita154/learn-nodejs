// //taking input from command line
// // console.log(process.argv);
// const yargs = require("yargs");

// //can use yargs for command line interaction

// yargs.command({
//   command: "add",
//   describe: "Adding a note",
//   builder: {
//     title: {
//       describe: "Title of note",
//       demandOption: true,
//       type: "string",
//       },
//       body: {
//         describe: "Body of note",
//       demandOption: true,
//       type: "string",   
//       }
//   },
//   handler: (argv) => {
//     console.log("Adding a note",argv.title,argv.body);
//   },
// });

// yargs.command({
//   command: "read",
//   describe: "Reading a note",
//   handler: () => {
//     console.log("Reading a note");
//   },
// });

// yargs.command({
//   command: "list",
//   describe: "Listing a note",
//   handler: () => {
//     console.log("Listing a note");
//   },
// });

// yargs.parse();

// const http = require('http');
// const fs = require('fs');

// var server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-type': 'text/plain' });
//   res.end('Hey My first response');
// })

// server.listen(3000, '127.0.0.1');
// console.log("server is listening now");

//serving html pages

//  var server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-type': 'text/html' });
//    const readStream = fs.createReadStream(__dirname + '/index.html');
//    readStream.pipe(res);
// })

// server.listen(3000, '127.0.0.1');
// console.log("server is listening now");


//Express
// const express = require('express');

// var app = express();

// app.get('/profile/:id', (req, res) => {
//   res.send("this web oage is for" + req.params.id);
// })

// app.listen(3000);