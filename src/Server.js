//jshint esversion: 6
const express = require("express");
const bodyParser= require("body-parser");
// const https = require("https");
// const dotenv = require("dotenv");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/submitted.html");
});




app.listen(process.env.PORT || 5000,function(){
  console.log("This server is running on port 5000.");
});