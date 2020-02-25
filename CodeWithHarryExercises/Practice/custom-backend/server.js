const http = require("http");
const fs = require("fs");

const host = "127.0.0.1";
const port = 8000;

const indexHTML = fs.readFileSync("./index.html");
const aboutHTML = fs.readFileSync("./about.html");
const contactHTML =  fs.readFileSync("./contact.html");

const server = http.createServer((req, res) => {

   // res.writeHead(200, {'contentType' : 'text/html'});
    if(req.url == "/")
    {
        res.writeHead(200, {'contentType' : 'text/html'});
        res.end(indexHTML);
    }
    else if(req.url == "/about")
    {
        res.writeHead(200, {'contentType' : 'text/html'});
        res.end(aboutHTML);
    }
    else if(req.url == "/contact")
    {
        res.writeHead(200, {'contentType' : 'text/html'});
        res.end(contactHTML);
    }
    else
    {
        res.writeHead(404, {'contentType' : 'text/html'});
        res.end(`<h1>404 Not Found</h1>`);
    }
    
});

server.listen(port, host, () => {

    console.log("server running at http://"+host+":"+port+"/");
    
});
