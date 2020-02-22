const http = require("http");
const fs = require("fs");

const host = "127.0.0.1";
const port = 8000;
const htmlFile = fs.readFileSync("./htmlPage.htm");

const server = http.createServer((req, res) => {

    /*
    res.statusCode = 200;
    res.setHeader('contentType', 'text/html');
    */
   
    res.writeHead(200, {'contentType':'text/html'});

    res.end(htmlFile);
});

server.listen(port, host, () => {

    console.log("server running at http://"+host+":"+port+"/");
    
});