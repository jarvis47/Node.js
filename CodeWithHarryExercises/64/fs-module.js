const http = require("http"); // Importing Module - http
const fs = require("fs"); //Importing Module - File System

const host = "127.0.0.1";
const port = 8000;

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('contentType', 'text/html');

    let text = fs.readFileSync('updater.txt', 'utf-8'); // Synchronous file reading

    text = text.replace("12/02/2020", "ROHAN");

    fs.writeFileSync("Rohan.txt", text); //Synchronous file writting
    
    res.end(text); 
});

const display = (msg) => {

    console.log("server running at http://"+host+":"+port+"/"+ msg);
} 
server.listen(port, host, display("hey Rohan Here"));