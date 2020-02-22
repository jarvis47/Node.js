const http = require("http");

const host = "127.0.0.1";
const port = 8000;

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('contentType', 'text/html');

   // res.writeHead(200, {'contentType' : 'text/html'});

    res.end(`<h1>My First <i>Node</i> Server</h1>`);
});

server.listen(port, host, () => {

    console.log("server running at http://"+host+":"+port+"/");
    
});