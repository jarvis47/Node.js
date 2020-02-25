const express = require("express");
const fs = require("fs");
const url = require("url");

const app = express();
const port = 80;

const addNumberHTML = fs.readFileSync("./addNumber.html")

app.get("/", (req, res) =>{

    res.end(addNumberHTML)

});

app.get("/add", (req, res) =>{

    const urlParsing = url.parse(req.url, true)
    
    res.send("addition is : "+ (parseInt(urlParsing.query.num1)+parseInt(urlParsing.query.num2)));
     
});

app.listen(port, ()=>{
    console.log(`server is up and running on ${port}`);
    
});