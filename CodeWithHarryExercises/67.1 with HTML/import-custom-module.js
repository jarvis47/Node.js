const http = require("http");
const fs = require("fs");
const urlMethod = require("url");

//Importing custom modules
const sum = require("./custom-module");

const host = "127.0.0.1";
const sumHTML = fs.readFileSync("./sum.html");

const server = http.createServer((req, res) =>{

    res.writeHead(200, {"contentType":"text/html"});

    console.log(req.url);

    if(req.url =="/")
    {
        res.end(sumHTML);
    }
    else if(req.url.length > 1)
    {
        
        let url = urlMethod.parse(req.url, true);  //parsing URL 
        let urlObj = url.query; // converting parsed url into object

        //fetching object properties
        let num1 = urlObj.num1;
        let num2 = urlObj.num2;
        
        let result = sum.sum(num1, num2); // calling custom module method

        res.end(`result is ${result}`);
    }
    else
    {
        res.end("404 Not found");
    }
    
});

server.listen(8080, host, ()=>{
    console.log("Server is running !!");
});