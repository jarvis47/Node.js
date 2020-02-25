const http = require("http");
const helloWolrd = require("./hello-world");

const host = "127.0.0.1";
const port = 8000;

const server = http.createServer((req, res) => {
    
    console.log("running create server method");
    res.writeHead(200, {"contentType":"txt/html"});
    res.end(helloWolrd);
});

server.listen(port, host, () => {

    console.log("server running at http://"+host+":"+port+"/");
    
});
