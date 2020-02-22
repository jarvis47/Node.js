const http = require("http");

//Importing custom modules
const sum = require("./custom-module");

const host = "127.0.0.1";
const server = http.createServer((req, res) =>{

    res.writeHead(200, {"contentType":"text/html"});

    let result = sum.sum(10, 20); // custom module function

    let readURL = req.url; //reads URL that comes from req

    res.end(sum.name + " : " + result + "\n \n" + readURL);
});

server.listen(8080, host, ()=>{
    console.log("Server is running !!");
});