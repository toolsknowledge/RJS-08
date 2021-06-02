//nodejs
//javascript

//import the node modules
//require() function, used to import the modules
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const bodyparser = require("body-parser");


//rest object
const app = express();
//where "app" is the rest object
//where "app" object used to develop the rest services like GET,POST,PUT,DELETE,......



//enable cors policy
app.use( cors() );



//MIME Type
app.use(bodyparser.json());




//read the client data
app.use( bodyparser.urlencoded({extended:false}) );



//create the reference variable to connect to mongodb database
const ashokIT = mongodb.MongoClient;



//create the GET Request
app.post("/login",(req,res)=>{

});










