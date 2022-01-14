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


// app.post("/",function(req,res){

// const firstName = req.body.fName;
// const lastName = req.body.lName;
// const email = req.body.email;
// const tel = req.body.tel;
// const Container_type = req.body.Container_type;
// const interior = req.body.interior;
// const exterior = req.body.exterior;

// const data = {
//   members: [
//   {
//     email_address: email,
//     status: "subscribed",
//     merge_fields:{
//       FNAME: firstName,
//       LNAME: lastName,
//       Phone: tel,
//     merge_fields:{
//         Container_type: Container_type,
//         Interior: interior,
//         Exterior: exterior
//     }
      
//     }
//   }
//   ]

// };
// const jsonData = JSON.stringify(data);

// const url="https://us7.api.mailchimp.com/3.0/lists/8a3fa426ec";

// const options = {
// method: "POST",
// auth:process.env.APIKEY
// };

// const request = https.request(url,options,function(response){

//  if (response.statusCode === 200){
//      res.sendFile(__dirname + "/success.html");
//  }   else{
//      res.sendFile(__dirname + "/failure.html");
//  }

//  response.on("data",function(data){
//  console.log(JSON.parse(data));
//   });
// });

// request.write(jsonData);
// request.end();

// });

// app.post("/failure.html",function (req,res){
//   res.redirect("/");

// });

app.listen(process.env.PORT || 5000,function(){
  console.log("This server is running on port 5000.");
});