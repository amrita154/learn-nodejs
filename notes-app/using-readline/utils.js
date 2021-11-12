const fs = require("fs");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputUtils = {
    askQuestion: (question,responseFunction) => {
        readline.question(question, answer => {
            responseFunction(answer);
        })
    },
    closeReadline: () => {
          readline.close();
    }
}

const fileSystemUtils = {
    readFile:(path, callbackFunction) => {
        fs.readFile(path, "utf8", (err, data) => {
            callbackFunction(err, data);
        }); 
    },
    createFile: (path, callbackFunction) => {
        fs.open(path, "w+", callbackFunction);
    },
    writeFile: (path,data,callbackFunction) => {
        fs.writeFile(path, data, callbackFunction);
    },
    deleteFile: (path, callbackFunction) => {
        fs.unlink(path, callbackFunction);
    }
}


module.exports = {
    inputUtils,
    fileSystemUtils
}