const express = require("express");

const app = express();
const port = 80;

app.get("/", (req, res) =>{

    res.send("this is my 1st express application");

});

app.listen(port, () =>{
    console.log(`server running on ${port}`);
});